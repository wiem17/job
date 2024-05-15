import React, { useEffect, useState } from 'react';
import { countTotalPourcentagescondidatsaccept } from '../Services/CondidatService';

const TotalPostesCounter = () => {
  const [Totalcondidat, setTotalcondidat] = useState(null);

  useEffect(() => {
    const fetchTotalPostes = async () => {
      try {
        const total = await countTotalPourcentagescondidatsaccept();
       
        setTotalcondidat(total.percentageCondidatsAccepted); // Assurez-vous que total est un nombre valide
        console.log(total);
      } catch (error) {
        console.error('Error fetching total postes:', error);
      }
    };

    fetchTotalPostes();
  }, []);

  return (
    <span className="font-sm status up">
      {
        `${Totalcondidat}%` // Ajoutez le % ici pour indiquer que c'est un pourcentage
      
      } 
    </span>
  );
};

export default TotalPostesCounter;
