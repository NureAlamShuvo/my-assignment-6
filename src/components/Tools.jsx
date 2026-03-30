import { Check } from 'lucide-react';
import React, { use } from 'react';

const Tools = ( {toolsPromise} ) => {

    const tools = use(toolsPromise);
    console.log(tools);

    return (
        <div className='py-28'>
            <div className='text-center space-y-4'>
                <h2 className='font-extrabold text-[2.5rem] text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

                <div className='flex gap-4 justify-center'>
                    <button className='btn btn-primary'>Products</button>
                    <button className='btn btn-outline'>Products</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto mt-10'>
                {
                    tools.map(tool => <div key={tool.id} className='rounded-2xl bg-[#F2F2F2] p-10 space-y-4'>
                        <img src={tool.img} alt="" />
                        <h2 className='font-bold text-[1.2rem] text-[#101727]'>{tool.name}</h2>
                        <p className='text-[#627382]'>{tool.description}</p>
                        <h2> <span className='font-bold text-[1.2rem] text-[#101727]'>${tool.price}</span><span className='text-[#627382]'>/{tool.period}</span></h2>
                        <div className='space-y-2'>
                            {
                                tool.features.map((feature, index) => (
                                    <p key={index} className='flex items-center gap-2'>
                                    <span className='text-green-400'><Check size={16} /></span> 
                                    <span className='text-[#627382]'>{feature}</span>
                                </p>)
                                )
                            }
                        </div>
                        <button className='btn btn-primary w-full'>Buy Now</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tools;