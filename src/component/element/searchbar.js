import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'; 

export default function SearchBarPopUp({ isOpen, onClose }) {
    const router = useRouter(); 
    const [searchTerm, setSearchTerm] = useState(''); 

    if (!isOpen) {
        return null; 
    }

    const handleSearch = (e) => {
        e.preventDefault(); 
        
        const keyword = searchTerm.trim();

        if (keyword !== "") {
            console.log("Mengarahkan ke halaman Shop dengan keyword:", keyword);   
            router.push(`/shop?keyword=${encodeURIComponent(keyword)}`);
            onClose(); 
        }
    };

    return (
        <div className="w-full h-autoshadow-lg  border-gray-300">
            <div className="max-w-6xl mx-auto px-4 py-3">
                <form onSubmit={handleSearch} className="flex w-full">
                    <input
                        type="text"
                        placeholder="Cari judul buku di sini"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow p-3 text-xs border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 "
                    />
                    <button
                        type="submit"
                        className="bg-green-800 text-white p-3 rounded-r-lg  transition duration-300 flex items-center gap-2"
                        // Disable tombol jika input kosong
                        disabled={!searchTerm.trim()} 
                    >
                        <FiSearch className="text-xl" />
                    </button>
                </form>
            </div>
        </div>
    );
}