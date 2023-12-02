import React, { useState, useEffect } from 'react';
import { CarouselCustomNavigation } from '../../carousel/Carousel';
import SignIn from './SignIn';

const ShouldRenderLoginPage = () => {

  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    // Check if the user has visited the site before
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      // If the user has visited before, setFirstVisit to false
      setFirstVisit(false);
    } else {
      // If it's the first visit, set the flag in local storage
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);


  return (
    <div>
      {firstVisit ? (
        <CarouselCustomNavigation />
      ) : (
        <SignIn />
      )}
    </div>
  )
}

export default ShouldRenderLoginPage



