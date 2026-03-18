import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import RegisterModal from './components/RegisterModal/RegisterModal';
import Home from './pages/Home/Home';
import CoachesPage from './pages/CoachesPage/CoachesPage';
import NewsPage from './pages/NewsPage/NewsPage';
import Login from './components/Admin/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
import { CoachProvider } from './context/CoachContext';
import { NewsProvider } from './context/NewsContext';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Бассейн');

  const openModal = (service = 'Бассейн') => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <CoachProvider>
      <NewsProvider>
        <Router>
          <div className="App">
            <Navbar onOpenModal={() => openModal()} />
            <main className="content">
              <Routes>
                <Route path="/" element={<Home openModal={openModal} />} />
                <Route path="/treneri" element={<CoachesPage openModal={openModal} />} />
                <Route path="/novosti" element={<NewsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
              <Footer />
            </main>

            <RegisterModal 
              isOpen={isModalOpen} 
              onClose={closeModal} 
              preSelectedService={selectedService}
            />
          </div>
        </Router>
      </NewsProvider>
    </CoachProvider>
  );
}

export default App;
