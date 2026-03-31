
import React, { use, useState } from 'react';
import ToolsCard from './ToolsCard';

const Tools = ({ toolsPromise }) => {

    const tools = use(toolsPromise);

    const [activeTap, setActiveTap] = useState("products");

    return (
        <div className='py-28'>
            <div className='text-center space-y-4'>
                <h2 className='font-extrabold text-[2.5rem] text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

                <div className='flex gap-4 justify-center'>
                    <button onClick={() => setActiveTap("products")} className={`btn ${activeTap === "products" ? "btn-primary" : "btn-outline"}`}>Products</button>

                    <button onClick={() => setActiveTap("cart")} className={`btn ${activeTap === "cart" ? "btn-primary" : "btn-outline"}`}>Cart</button>

                </div>
            </div>

            {
                activeTap === "products" && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto mt-10'>
                        {
                            tools.map(tool =>
                                <ToolsCard key={tool.id} tool={tool}></ToolsCard>)
                        }
                    </div>
                )
            }

            {activeTap === "cart" && <cart></cart>}
            
        </div>
    );
};

export default Tools;
