import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ToolsCard = ({ tool, handleAddToCart }) => {

    const [clickBtn, setClickBtn] = useState(false);

    const handleBuyBtn = () =>{
        setClickBtn(true);
        handleAddToCart(tool);
    }

    return (
        <div className='rounded-2xl bg-[#F2F2F2] p-10 space-y-4'>

                            <img src={tool.img} alt="Image not found!" />

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
                            <button onClick={handleBuyBtn} className={`btn w-full ${clickBtn ? "btn-success" : "btn-primary"}`}>{clickBtn ? <span className='flex items-center gap-2'><Check size={16}/>Added To Card</span> : "Buy Now"}</button>
                        </div>
    );
};

export default ToolsCard;
