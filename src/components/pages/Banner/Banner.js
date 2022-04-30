import React from 'react';
import './Banner.css'
import banner from '../../../images/banner-products.png'
import fackbookIcon from '../../../images/social icon/fackbook.png'
import instagramIcon from '../../../images/social icon/instagram.png'
import whatsappIcon from '../../../images/social icon/whatsapp.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative'>
            <img className='opacity-80' src={banner} alt="" />
            <div className='header'>
                <input className='bg-slate-300 px-5 text-lg placeholder-black' type="search" placeholder='Search...' />
                <button className='bg-rose-700'>Search</button>
            </div>
            <div className='absolute bottom-4 left-2/3 cursor-pointer flex justify-around w-1/4'>
                <a href='https://www.facebook.com/samial.zaber.7/'
                target="_blank" rel="noopener noreferrer" ><img className='w-20' src={fackbookIcon} alt=""/></a>
                <img className='w-20' src={instagramIcon} alt="" />
                <img className='w-20' src={whatsappIcon} alt="" />
            </div>
        </div>
    );
};

export default Banner;