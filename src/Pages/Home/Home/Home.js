import React from 'react';
import useTitle from '../../../hooks/useTitle';
import GetInTouch from '../../GetInTouch/GetInTouch';
import Hero from '../Hero/Hero';
import LatestServices from '../LatestServices/LatestService';
import MyGoal from '../MyGoal/MyGoal';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <MyGoal></MyGoal>
            <LatestServices></LatestServices>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;