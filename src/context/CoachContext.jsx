import React, { createContext, useState, useEffect, useContext } from 'react';

const CoachContext = createContext();

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
const API_URL = `${API_BASE_URL}/api/coaches/`;

export const CoachProvider = ({ children }) => {
  const [coaches, setCoaches] = useState([]);
  const [archivedCoaches, setArchivedCoaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCoaches = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch coaches');
      const data = await response.json();
      setCoaches(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching coaches:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoaches();
  }, []);

  const addCoach = async (coach) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(coach),
      });
      if (!response.ok) throw new Error('Failed to add coach');
      await fetchCoaches();
    } catch (err) {
      console.error('Error adding coach:', err);
      throw err;
    }
  };

  const deleteCoach = async (id) => {
    try {
      const response = await fetch(`${API_URL}${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete coach');
      await fetchCoaches();
    } catch (err) {
      console.error('Error deleting coach:', err);
      throw err;
    }
  };

  const fetchArchivedCoaches = async () => {
    try {
      const response = await fetch(`${API_URL}archived/`);
      if (!response.ok) throw new Error('Failed to fetch archived coaches');
      const data = await response.json();
      setArchivedCoaches(data);
    } catch (err) {
      console.error(err);
    }
  };

  const restoreCoach = async (id) => {
    try {
      const response = await fetch(`${API_URL}${id}/restore/`, { method: 'POST' });
      if (!response.ok) throw new Error('Failed to restore coach');
      await fetchCoaches();
      await fetchArchivedCoaches();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CoachContext.Provider value={{ coaches, archivedCoaches, addCoach, deleteCoach, restoreCoach, fetchArchivedCoaches, loading, error }}>
      {children}
    </CoachContext.Provider>
  );
};

export const useCoaches = () => {
  const context = useContext(CoachContext);
  if (!context) {
    throw new Error('useCoaches must be used within a CoachProvider');
  }
  return context;
};
