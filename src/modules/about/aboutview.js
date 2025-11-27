"use client";
import { useState } from "react";
import NavbarAtas from "@/src/component/element/navbar/navbar-atas";
import NavbarBawah from "@/src/component/element/navbar/navbar-bawah";
import PathWeb from "@/src/component/element/navbar/path";

export default function AboutView(){
    const [breadcrumb, setBreadcrumb] = useState([
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    ]);
    return(
        <div>
            <NavbarAtas/>
            <NavbarBawah/>
            <div className="max-w-5xl mx-auto px-2 py-4">
                <PathWeb items={breadcrumb} />
                <h1 className=" mt-20 text-center text-8xl font-bold my-7">About Me</h1>
                <h3>Who am i?</h3>
                <h3>I dont know too</h3>
                
            </div>
        </div>
    )
}