import React, { createContext, useState, useEffect, useContext } from 'react';

const NewsContext = createContext();

const API_BASE_URL = import.meta.env.DEV 
  ? 'http://127.0.0.1:8000' 
  : (import.meta.env.VITE_API_URL || 'https://swimmstart-uz.onrender.com');
const API_URL = `${API_BASE_URL}/api/news/`;

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [archivedNews, setArchivedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch news');
      const data = await response.json();
      setNews(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const addNews = async (newsItem) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsItem),
      });
      if (!response.ok) throw new Error('Failed to add news');
      await fetchNews();
    } catch (err) {
      console.error('Error adding news:', err);
      throw err;
    }
  };

  const deleteNews = async (id) => {
    try {
      const response = await fetch(`${API_URL}${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete news');
      await fetchNews();
    } catch (err) {
      console.error('Error deleting news:', err);
      throw err;
    }
  };

  const fetchArchivedNews = async () => {
    try {
      const response = await fetch(`${API_URL}archived/`);
      if (!response.ok) throw new Error('Failed to fetch archived news');
      const data = await response.json();
      setArchivedNews(data);
    } catch (err) {
      console.error(err);
    }
  };

  const restoreNews = async (id) => {
    try {
      const response = await fetch(`${API_URL}${id}/restore/`, { method: 'POST' });
      if (!response.ok) throw new Error('Failed to restore news');
      await fetchNews();
      await fetchArchivedNews();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NewsContext.Provider value={{ news, archivedNews, addNews, deleteNews, restoreNews, fetchArchivedNews, loading, error }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};
