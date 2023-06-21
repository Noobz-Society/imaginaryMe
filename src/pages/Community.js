import React, { useEffect }from 'react'
import '../assets/css/Community.css'
import { AvatarCard } from '../components/AvatarCard'


export default function Community() {
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14];

  useEffect(() => {
    document.body.classList.add('white-background');

    return () => {
      document.body.classList.remove('white-background');
    
    };
  }, []);
  return (
      <div className="community_container">
        <div className="community_subcontainer">
          {
            cards.map((card, index) => (
              <AvatarCard key={index} card={card} />
            ))
          }
      </div>
      </div>
  );
}
