import React, { useEffect, useState } from 'react';
import { countTotalPourcentagesPostes } from '../Services/PosteService';

const TotalPostesCounter = () => {
  const [totalPostes, setTotalPostes] = useState(null);

  useEffect(() => {
    const fetchTotalPostes = async () => {
      try {
        const total = await countTotalPourcentagesPostes();
        setTotalPostes(total.percentagePostesAdded); // Assurez-vous que total est l'objet contenant le pourcentage
        console.log(total)
      } catch (error) {
        console.error('Error fetching total postes:', error);
      }
    };

    fetchTotalPostes();
  }, []);

  return (
    <span className="font-sm status up">
      {totalPostes !== null ? (
        `${totalPostes}%` // Ajoutez le % ici pour indiquer que c'est un pourcentage
      ) : (
        'Chargement...'
      )} 
    </span>
   
  );
};

export default TotalPostesCounter;
