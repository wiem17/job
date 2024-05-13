import React, { useEffect, useState } from 'react';
import {countTotalCondidatesrefusé } from '../Services/CondidatService';

const TotalCondidatesCounter = () => {
  const [totalCondidates, setTotalCondidates] = useState(null);

  useEffect(() => {
    const fetchTotalCondidates = async () => {
      try {
        const total = await countTotalCondidatesrefusé();
        setTotalCondidates(total);
      } catch (error) {
        console.error('Error fetching total postes:', error);
      }
    };

    fetchTotalCondidates();
  }, []);

  return (
    <span className="color-brand-2">
      {totalCondidates !== null ? (
        `${totalCondidates} `
      ) : (
        'Chargement...'
      )} 
    </span>
  );
};

export default TotalCondidatesCounter;
