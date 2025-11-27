"use client";
import Image from "next/image";
import { useState } from "react";
import NavbarAtas from "@/src/component/element/navbar/navbar-atas";
import NavbarBawah from "@/src/component/element/navbar/navbar-bawah";
import PathWeb from "@/src/component/element/navbar/path";
import BookCard from "@/src/component/element/book/bookcard";

function Keunggulan({keunggulan, penjelasan}){
    return(
        <div className="flex flex-col items-center p-6 bg-green-800 rounded-lg w-full max-w-xs">
            <h3 className="text-lg font-bold text-gray-100 mb-2 text-center">
                {keunggulan}
            </h3>

            {/* Deskripsi */}
            <p className="text-sm text-gray-100 mb-4 text-center flex-grow">
                {penjelasan}
            </p>
        </div>
    )
}
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
                <h3 className="max-w-5xl mx-auto font-bold text-3xl">Why BOOKSTAR?</h3>
                <div className="flex flex-wrap justify-center gap-6 p-8 mb-14">
                    <Keunggulan
                        keunggulan={"Fleksibilitas Format"}
                        penjelasan={"Tidak perlu memilih. Dengan Bookstar, Anda bisa mendapatkan buku baru dalam bentuk fisik untuk koleksi, atau langsung mengunduh e-book-nya untuk dibaca saat bepergian."}
                    />
                    <Keunggulan
                        keunggulan={"Koleksi Luas"}
                        penjelasan={"Mulai dari novel terlaris, literatur klasik, buku akademik, hingga panduan self-improvement, kami terus memperbarui katalog kami dengan judul-judul terbaru dari penerbit lokal maupun internasional."}
                    />
                    <Keunggulan
                        keunggulan={"Pengalaman Belanja Seamless"}
                        penjelasan={"Platform kami dirancang untuk memudahkan Anda mencari, meninjau, dan membeli buku, baik fisik maupun digital, dalam satu checkout yang mudah."}
                    />
                </div>
                
            </div>
        </main>
    )
}