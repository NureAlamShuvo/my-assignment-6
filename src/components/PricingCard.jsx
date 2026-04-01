import { Check } from 'lucide-react';
import React from 'react';

const PricingCard = () => {
    return (
        <div>
            <div className='container mx-auto p-28'>
                <div className='text-center mb-10'>
                    <h2 className='font-extrabold text-[#101727] text-5xl mb-4'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='bg-[#F2F2F2] p-6 space-y-6 rounded-2xl'>

                        <h3 className='text-[#101727] font-bold text-2xl'>Starter</h3>
                        <p className='text-[#627382]'>Perfect for getting started</p>
                        <h2> <span className='text-[#101727] font-bold'>$0</span> <span className='text-[#627382]'>/Month</span> </h2>

                        <div className='space-y-2'>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span> <span className='text-[#627382]'>Access to 10 free tools</span></span>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span><span className='text-[#627382]'>Basic templates</span></span>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span><span className='text-[#627382]'>Community support</span></span>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span><span className='text-[#627382]'>1 project per month</span></span>
                            <br />
                            <br />
                            
                        </div>

                        <div className='mt-8'>
                            <button className='btn btn-primary w-full rounded-full'>Get Started Free</button>
                        </div>
                    </div>

                    <div className='p-6 space-y-6 rounded-2xl shadow-sm bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]'>

                        <h3 className='font-bold text-2xl'>Pro</h3>
                        <p>Best for professionals</p>
                        <h2> <span className='font-bold'>$49.99</span> <span className='text-white/80'>/Month</span> </h2>

                        <div className='space-y-2'>

                            <span className='flex items-center gap-2'><span className='text-white'><Check size={16} /></span> <span className='text-white/80'>Access to all premium tools</span></span>
                            <span className='flex items-center gap-2'><span className='text-white'><Check size={16} /></span><span className='text-white/80'>Unlimited templates</span></span>
                            <span className='flex items-center gap-2'><span className='text-white'><Check size={16} /></span><span className='text-white/80'>Priority support</span></span>
                            <span className='flex items-center gap-2'><span className='text-white'><Check size={16} /></span><span className='text-white/80'>Unlimited projects</span></span>
                            <span className='flex items-center gap-2'><span className='text-white'><Check size={16} /></span><span className='text-white/80'>Cloud sync</span></span>
                            <span className='flex items-center gap-2'><span className='text-white'><Check size={16} /></span><span className='text-white/80'>Advanced analytics</span></span>

                        </div>

                        <div>
                            <button className='btn btn-primary w-full rounded-full bg-white text-[#4F39F6] hover:bg-gray-100 border-none font-bold'>Start Pro Trial</button>
                        </div>
                    </div>
                    <div className='bg-[#F2F2F2] p-6 space-y-6 rounded-2xl'>

                        <h3 className='text-[#101727] font-bold text-2xl'>Enterprise</h3>
                        <p className='text-[#627382]'>For teams and businesses</p>
                        <h2> <span className='text-[#101727] font-bold'>$79.99</span> <span className='text-[#627382]'>/Month</span> </h2>

                        <div className='space-y-2'>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span> <span className='text-[#627382]'>Everything in Pro</span></span>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span><span className='text-[#627382]'>Team collaboration</span></span>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span><span className='text-[#627382]'>Custom integrations</span></span>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span><span className='text-[#627382]'>Dedicated support</span></span>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span><span className='text-[#627382]'>SLA guarantee</span></span>
                            <span className='flex items-center gap-2'><span className='text-green-400'><Check size={16} /></span><span className='text-[#627382]'>Custom branding</span></span>
                        </div>

                        <div>
                            <button className='btn btn-primary w-full rounded-full'>Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PricingCard;
