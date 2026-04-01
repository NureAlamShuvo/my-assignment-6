import { CircleDot, Play } from 'lucide-react';
import bannerImg from '../assets/banner.png';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex container mt-16 mx-auto items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 text-center sm:text-start'>
            <div>
                <button className='btn rounded-full bg-[#E1E7FF] text-[#4F39F6]'><CircleDot></CircleDot> New: AI-Powered Tools Available</button>
                <h1 className='font-extrabold text-[#101727] text-[2rem] md:text-[4.5rem]'>Supercharge Your Digital Workflow</h1>
                <p className='text-[#627382] text-[1.2rem]'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>
                <div className=' flex gap-4 mt-8 justify-center sm:justify-start'>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</a>
                    <a className='btn btn-outline rounded-full border-[#4F39F6] text-[#4F39F6]'><Play /> Watch Demo</a>
                </div>
            </div>

            {/* right area */}

            <div className='mt-5 lg:mt-0'>
                 <img src={bannerImg} alt="Banner Image" className='shadow-xl transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.01]' />
            </div>
            </div>
        </div>
    );
};

export default Banner;