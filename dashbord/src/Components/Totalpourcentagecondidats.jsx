import React, { useEffect, useState } from 'react';
import { countTotalPourcentagescondidats } from '../Services/CondidatService';

const TotalPostesCounter = () => {
  const [Totalcondidat, setTotalcondidat] = useState(null);

  useEffect(() => {
    const fetchTotalPostes = async () => {
      try {
        const total = await countTotalPourcentagescondidats();
        // Vérifiez si total est un nombre représentant directement le pourcentage
        // Si oui, vous pouvez l'assigner directement à Totalcondidat
        // Sinon, assurez-vous d'extraire la propriété correcte du total
        // par exemple, total.percentageCondidatsAdded
        setTotalcondidat(total.percentageCondidatsApplied); // Assurez-vous que total est un nombre valide
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
