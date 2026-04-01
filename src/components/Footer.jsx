import React from 'react';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#0A0F1E] border-t border-blue-900/30 pt-16 pb-10 mt-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    
                    <div>
                        <h2 className="text-3xl font-extrabold text-white mb-4">DigiTools</h2>
                        <p className="text-zinc-400 text-sm">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                        
                    </div>

                    
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">Features</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">About</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Press</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li><a className="hover:text-white transition">Documentation</a></li>
                            <li><a className="hover:text-white transition">Help Center</a></li>
                            <li><a className="hover:text-white transition">Community</a></li>
                            <li><a className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-white font-semibold mb-4 text-lg'>Social Links</h3>
                    <div className="flex gap-4 mt-6">
                            
                            <a className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition">
                                <FaInstagram className="text-white" size={18} />
                            </a>
                            <a className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition">
                                <FaFacebook className="text-white" size={18} />
                            </a>
                            <a className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition">
                                <FaXTwitter className="text-white" size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} DigiTools. All rights reserved</div>
                    <div className="flex gap-6">
                        <a className="hover:text-white transition">Privacy Policy</a>
                        <a className="hover:text-white transition">Terms of Service</a>
                        <a className="hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
