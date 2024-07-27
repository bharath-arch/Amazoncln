import React, { useEffect, useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiLocationOn, CiSearch } from "react-icons/ci";

function Header() {
    const [isFocused, setIsFocused] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100); 
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header 
            className={`p-2 w-full md:h-20 h-auto bg-gray-800 flex justify-between items-center transition-all duration-300 ${isSticky ? 'sticky top-0 shadow-lg z-50' : 'relative'}`}
        >
            <div className="flex gap-10 items-center">
                <div className='text-white'>
                    <img src="" alt="Logo" />
                </div>
                <div className="text-white ">
                    <span className='flex items-end'>
                        <CiLocationOn size={30} />
                        <span>
                            <span className="text-sm">
                                Delivering to {`kochi`}
                            </span>
                            <span className="flex">
                                <span className="font-semibold">
                                    {`Updated location`}
                                </span>
                            </span>
                        </span>
                    </span>
                </div>
                <div className="">
                    <form action="" className="relative">
                        <span className={`flex ${isFocused ? 'border-3 rounded-xl border-orange-300 shadow-outline-blue' : ''}`}>
                            <input 
                                type="search" 
                                name="" 
                                id="" 
                                className="p-2 w-[36rem] rounded-s-md border-none outline-none" 
                                onClick={handleFocus} 
                                onBlur={handleBlur} 
                            />
                            <span className="p-1 bg-yellow-400 w-12 cursor-pointer rounded-e-md flex justify-center items-center">
                                <CiSearch size={35} />
                            </span>
                        </span>
                    </form>
                </div>
            </div>

            <div className="text-white ">
                <ul className='flex justify-between items-center gap-5'>
                    <li>
                        <span className="text-sm">Hello, sign in</span><br />
                        <span className="flex items-center place-items-center">Account & Lists <IoMdArrowDropdown /> </span>
                    </li>
                    <li>Orders</li>
                    <li><IoCartOutline size={30} /></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
