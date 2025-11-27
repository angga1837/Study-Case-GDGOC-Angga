"use client";
import Image from "next/image";
import { useState } from "react";
import NavbarAtas from "@/src/component/element/navbar/navbar-atas";
import NavbarBawah from "@/src/component/element/navbar/navbar-bawah";
import PathWeb from "@/src/component/element/navbar/path";
import BookCard from "@/src/component/element/book/bookcard";

export default function HomeView(){
    const [breadcrumb, setBreadcrumb] = useState([
    { label: "Home", href: "/" }]);
    return(
        <main>
            <NavbarAtas/>
            <NavbarBawah/>
            <div className="max-w-5xl mx-auto px-2 py-4">
                <PathWeb items={breadcrumb} />
                <div className="flex my-20">
                    <div className=" bg-blue-50">
                        <h1 className=" text-8xl font-bold">BOOKSTAR</h1>
                        <p className="text-xl">The Heaven of Literature</p>
                    </div>
                    <div className="w-full h-fit bg-gray-600">
                        <img 
                            src={""} 
                            alt={"foto"}
                            className="w-full h-fit rounded cursor-pointer hover:scale-110 transition duration-200"
                            
                        />
                    </div>
                    
                </div>
                
            </div>
        </main>
    )
}