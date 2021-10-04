import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import image from '../Utilites/download.png';

const Home = () => {
    return (
        <div className="mt-5">
            <h1>Comprehensive learning programs & classes for  students</h1>
            <img className="w-25" src={image} alt="" />
            <div>
                <HomeCard></HomeCard>
            </div>

        </div>
    );
};

export default Home;