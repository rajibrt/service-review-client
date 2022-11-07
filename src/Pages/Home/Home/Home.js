import React from 'react';
import Hero from '../Hero/Hero';
import LatestServices from '../LatestServices/LatestService';
import OurGoal from '../OurGoal/OurGoal';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <OurGoal></OurGoal>
            <LatestServices></LatestServices>
        </div>
    );
};

export default Home;