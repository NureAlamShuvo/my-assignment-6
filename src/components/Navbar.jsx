
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='px-10 border-b border-b-gray-200'>
            <div className="navbar">
                <div className="navbar-start">
                    <h2 className='text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6 font-semibold text-[#101727]">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-5">
                    <div className='hidden lg:flex gap-5 items-center'>
                        <ShoppingCart />
                        <a className='font-semibold text-[#101727] cursor-pointer'>Login</a>
                    </div>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</a>
                    <button className='lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {
                menuOpen && (
                    <div className='lg:hidden flex flex-col gap-3 pb-4 font-semibold text-[#101727]'>
                        <a>Products</a>
                        <a>Features</a>
                        <a>Pricing</a>
                        <a>Testimonials</a>
                        <a>FAQ</a>
                        <div className='flex gap-5 items-center mt-2'>
                            <ShoppingCart />
                            <a>Login</a>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
export default Navbar;