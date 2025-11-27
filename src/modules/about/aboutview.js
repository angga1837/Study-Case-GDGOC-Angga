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
                <h1 className=" mt-20 text-center text-5xl font-bold my-7">About US</h1>
                <article className="bg-gray-200 rounded-4xl p-5.5">
                    <h3 className="font-bold my-6">Siapakah Kami?</h3>
                    <h3>Selamat datang di Bookstar, destinasi utama bagi para pecinta buku di seluruh Indonesia. Kami adalah sebuah toko buku modern yang lahir dari kecintaan mendalam terhadap literasi dan inovasi. Bookstar tidak hanya menjual buku; kami menyediakan akses tanpa batas ke dunia pengetahuan, cerita, dan inspirasi, dalam format apa pun yang Anda sukai.</h3>
                </article>
                
                
            </div>
        </div>
    )
}