import React, { useEffect, useState } from 'react';
import { countTotalPostes } from '../Services/PosteService';

const TotalPostesCounter = () => {
  const [totalPostes, setTotalPostes] = useState(null);

  useEffect(() => {
    const fetchTotalPostes = async () => {
      try {
        const total = await countTotalPostes();
        setTotalPostes(total);
      } catch (error) {
        console.error('Error fetching total postes:', error);
      }
    };

    fetchTotalPostes();
  }, []);

  return (
    <span className="color-brand-2">
      {totalPostes !== null ? (
        `${totalPostes} `
      ) : (
        'Chargement...'
      )} 
    </span>
  );
};

export default TotalPostesCounter;
