import React from 'react';
import './Banner.css'
import bg from '../../../image/bg.jpg';
import Header from '../../Header/Header';

const Banner = () => {
    return (
        <div className="banner-container">
            <img className="bg" src={bg} alt="" />
            <div className="banner">
                <Header />
                <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
                <div className="input-group mb-3 w-25 mx-auto">
                    <input type="text" className="form-control p-2" placeholder="search..." aria-label="search" />
                    <span className="input-group-text" id="basic-addon2">Search</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;