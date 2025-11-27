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
            <div className=" ">
                <div className="max-w-5xl mx-auto px-2 py-4"><PathWeb items={breadcrumb} /></div>
                <div className="flex py-20 px-36 items-center bg-green-800">
                    <div className="text-amber-50">
                        <h1 className=" text-8xl font-bold">BOOKSTAR</h1>
                        <p className="text-xl">The Heaven of Literature</p>
                    </div>
                    <div className="w-full h-auto flex justify-center ">
                        <Image
                            src="/homeimage.webp" 
                            alt="foto"
                            width={400}
                            height={600}
                            className="rounded"
                        />
                    </div>
                </div>
                <div className="max-w-5xl mx-auto my-28 space-y-11">
                    <h3 className="text-5xl">Selamat datang</h3>
                    <p className="text-xl text-justify">BOOKSTAR adalah surga bagi para pecinta buku, sebuah toko buku online premium yang menghubungkan Anda dengan literatur terbaik dari seluruh penjuru dunia. Kami menawarkan koleksi yang tak tertandingi, melayani setiap genre dan minat, dengan fleksibilitas total dalam cara Anda membaca.</p>
                </div>
                
            </div>
        </main>
    )
}