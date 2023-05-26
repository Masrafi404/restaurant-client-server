import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Fearured/Featured';
import TestiMonials from '../TestiMonials/TestiMonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;