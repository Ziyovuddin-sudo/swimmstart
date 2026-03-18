import React, { useEffect } from 'react';
import Coaches from '../../components/Coaches/Coaches';

const CoachesPage = ({ openModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#020617', minHeight: '100vh' }}>
      <Coaches onOpenModal={openModal} />
    </div>
  );
};

export default CoachesPage;
