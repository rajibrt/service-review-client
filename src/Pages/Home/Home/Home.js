import React from 'react';
import Hero from '../Hero/Hero';
import LatestServices from '../LatestServices/LatestService';
import MyGoal from '../MyGoal/MyGoal';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <MyGoal></MyGoal>
            <LatestServices></LatestServices>
        </div>
    );
};

export default Home;