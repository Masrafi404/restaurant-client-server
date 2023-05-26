import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className='featured-items text-white pt-8 my-20 bg-fixed'>
            <SectionTitle
                subHeading={'check it out'}
                heading={'Featured Item'}
            ></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas totam dolorem quaerat quidem, alias asperiores qui voluptates voluptatibus est culpa debitis quo numquam atque provident eos omnis similique deserunt architecto doloribus. Veritatis repudiandae debitis, facere nisi cum iusto labore sit magni aliquam voluptates. Doloremque libero corporis iure</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;