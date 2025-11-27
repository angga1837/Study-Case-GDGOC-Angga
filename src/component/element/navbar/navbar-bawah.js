"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import SearchBarPopUp from "../searchbar";

function NavbarButton({route, konten}){
    return(
        <Link
            href={route} 
            className="hover:scale-105 px-2 py-0.5 rounded-2xl transition duration-300 delay-75"
        >
            {konten}
        </Link>
    )
}

export default function NavbarBawah(){
    const [open, setOpen] = useState(false);
    // Utuk menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Untuk kontrol search pop-up
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Toggle untuk ikon search
    const toggleSearch = () => {
        setIsSearchOpen(prev => !prev);
    };

    // clos serch
    const closeSearch = () => {
        setIsSearchOpen(false);
    }
    return(
        <div className="sticky top-0 z-50 bg-gray-100">
            <nav className="w-full">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    {/*logo*/}
                    <Link href="/" className="text-xl font-bold" >
                        BOOKSTAR
                    </Link>
                    
                    {/*rute page dan basic website tombol*/}
                    <div className="mx-auto flex justify-between items-center">
                        {/*rute page*/}
                        <div className="flex justify-between items-center">
                            <NavbarButton konten={"Home"} route={"/"}></NavbarButton>
                            <NavbarButton konten={"Shop"} route={"/shop"}></NavbarButton>
                            <NavbarButton konten={"About"} route={"/about"}></NavbarButton>
                            <NavbarButton konten={"Blog"} route={"/blog"}></NavbarButton>
                            <NavbarButton konten={"Contact"} route={"/contact"}></NavbarButton>
                            <NavbarButton konten={"Pages"} route={"/pages"}></NavbarButton>
                        </div>
        
                        {/*basic website tombol*/}
                        <div className="flex justify-between items-center text-blue-300">
                            <Link href="#" className="hover:scale-105 px-2 py-0.5 rounded-2xl transition duration-300 delay-75">Login / Register </Link>
                            <div className="hover:scale-105 px-2 py-0.5  rounded-2xl transition duration-300 delay-75 cursor-pointer" onClick={toggleSearch}><FiSearch ></FiSearch></div>
                            <div className="hover:scale-105 px-2 py-0.5  rounded-2xl transition duration-300 delay-75 cursor-pointer"><FiShoppingCart></FiShoppingCart></div>
                            <div className="hover:scale-105 px-2 py-0.5  rounded-2xl transition duration-300 delay-75 cursor-pointer"><FiHeart></FiHeart></div>
                        </div>
                    </div>
                    
                        {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>
                </div>
                    {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden px-6 py-3 flex flex-col gap-3 bg-white shadow">
                        <NavbarButton konten={"Home"} route={"/"}></NavbarButton>
                        <NavbarButton konten={"Shop"} route={"/shop"}></NavbarButton>
                        <NavbarButton konten={"About"} route={"/about"}></NavbarButton>
                        <NavbarButton konten={"Blog"} route={"/blog"}></NavbarButton>
                        <NavbarButton konten={"Contact"} route={"/contact"}></NavbarButton>
                        <NavbarButton konten={"Pages"} route={"/pages"}></NavbarButton>
                    </div>
                )}
            </nav>
            <SearchBarPopUp isOpen={isSearchOpen} onClose={closeSearch}/>
        </div>
    )
}