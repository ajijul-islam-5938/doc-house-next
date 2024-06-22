import Banner from '@/components/Banner/Banner';
import Doctors from '@/components/Doctors/Doctors';
import Services from '@/components/Services/Services';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Doctors/>
    </div>
  );
};

export default Home;