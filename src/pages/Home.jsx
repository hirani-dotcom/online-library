import React from 'react';
import Landing from '../components/Landing';
import Featured from '../components/Featured';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';
import Highlights from '../components/Highlights';

const Home = () => {
  return (
    <>    
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;