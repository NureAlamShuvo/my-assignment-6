import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cartItems, setCartItems }) => {
    // console.log(cartItems);
    const handlePayment = () =>{
        setCartItems([]);
        toast.success("Payment Successfull");
    }

    const handleDeletCart = (item) =>{
        const filteredArray = cartItems.filter(c => c.id !== item.id);
        setCartItems(filteredArray);
        toast.error("Item Deleted!");
    }

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='container mx-auto space-y-4 border border-gray-300 rounded-2xl p-10 mt-8'>
            <h2 className="text-[#101727] font-bold text-[1.2rem]">Your Cart</h2>

            {
                cartItems.length === 0 ? <div className='flex flex-col items-center gap-4'>
                    <ShoppingCart className='text-[#627382]' size={60}></ShoppingCart>
                    <p className='text-[#627382]'>Your cart is empty</p>
                </div>
                : 
                <>
                    {
                cartItems.map((item) => <div key={item.id} className='bg-[#F9FAFC] flex items-center justify-between p-4'>
                    <div className='flex gap-4 p-4 items-center'>
                        <div>

                            <img className='border border-gray-200 rounded-full p-2' src={item.img} alt="Image not found" />

                        </div>
                        <div>

                            <h2 className='font-semibold text-[#101727] text-[1.1rem]'>{item.name}</h2>
                            <p className='font-medium text-[#627382]'>${item.price}</p>

                        </div>

                        </div>

                        <div className='text-end'>
                            <p onClick={()=> handleDeletCart(item)} className='font-bold text-[#FF3980] cursor-pointer'>Remove</p>
                        </div>

                </div>)
            }

            <div className='flex justify-between'>
                <h2 className='text-[#627382]'>Total:</h2>
                <p className='font-bold text-[#101727] text-[1.2rem]'>${totalPrice.toFixed(2)}</p>
            </div>
            <div>
                <button onClick={handlePayment} className='btn btn-primary w-full rounded-full'>Proceed to Checkout</button>
            </div>
                </>
            }

        </div>
    );
};

export default Cart;