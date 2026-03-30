import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-16'>
            <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center py-16'>
                <div>
                    <h2 className='font-extrabold text-[4rem] text-white'>50K+</h2>
                    <p className='font-medium text-[1.1rem] text-white '>Active Users</p>
                </div>
                <div>
                    <h2 className='font-extrabold text-[4rem] text-white'>200+</h2>
                    <p className='font-medium text-[1.1rem] text-white'>Premium Tools</p>
                </div>
                <div>
                    <h2 className='font-extrabold text-[4rem] text-white'>4.9</h2>
                    <p className='font-medium text-[1.1rem] text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;