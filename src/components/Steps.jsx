import { CircleUser, CircleUserRound, Package, Rocket } from 'lucide-react';
import React from 'react';

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC] px-6 py-10 md:p-28'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='font-extrabold text-[#101727] text-[3rem]'>Get Started in 3 Steps</h2>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-9 mt-10'>
                    <div className='bg-white rounded-2xl p-10 text-center relative transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]'>
                        <div className='absolute top-3 right-3'>
                            <button className='btn btn-primary rounded-full'>01</button>
                        </div>
                        <div className='space-y-4'>

                            <div className='flex justify-center bg-purple-100 p-4 rounded-full w-fit mx-auto'>
                                <CircleUserRound className='text-purple-600' size={60}></CircleUserRound>
                            </div>

                            <h2 className='font-bold text-2xl text-[#101727]'>Create Account</h2>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl text-center p-10 relative transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]'>
                        <div className='absolute top-3 right-3'>
                            <button className='btn btn-primary rounded-full'>02</button>
                        </div>
                        <div className='space-y-4'>

                            <div className='flex justify-center bg-purple-100 p-4 rounded-full w-fit mx-auto'>
                                <Package className='text-purple-600' size={60}></Package>
                            </div>

                            <h2 className='font-bold text-2xl text-[#101727]'>Choose Products</h2>
                            <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl text-center p-10 relative transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]'>
                        <div className='absolute top-3 right-3'>
                            <button className='btn btn-primary rounded-full'>03</button>
                        </div>
                        <div className='space-y-4'>
                            <div className='flex justify-center bg-purple-100 p-4 rounded-full w-fit mx-auto'>
                                <Rocket className='text-purple-600' size={60}></Rocket>
                            </div>

                            <h2 className='font-bold text-2xl text-[#101727]'>Start Creating</h2>
                            <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
