"use client";
import { useState,useEffect } from "react";
import NavbarBawah from "@/src/component/element/navbar/navbar-bawah";
import NavbarAtas from "@/src/component/element/navbar/navbar-atas";
import DefaultLayout from "@/src/component/layouts/DefaultLayout";
import PathWeb from "@/src/component/element/navbar/path";
import BookList from "@/src/component/element/book/booklist";
import FeaturedProduct from "@/src/component/element/book/featuredbook";

export default function ShopView({ listBooks, pageTitle }) {
  const isSearchMode = pageTitle.startsWith('Hasil Pencarian');
  const readingList = isSearchMode ? [] : listBooks.slice(0, 4); 
  const booksForYou = isSearchMode ? listBooks : listBooks.slice(4);
  const [breadcrumb, setBreadcrumb] = useState([
        { label: "Home", href: "/" },
        { label: "Shop", href: "/shop" },
  ]);

  return (
    
    <div>
      <NavbarAtas/>
      <NavbarBawah/>
        <div className="max-w-5xl mx-auto px-2 py-4">
          <PathWeb items={breadcrumb} />
          <h1 className="text-3xl font-extrabold mb-8">{pageTitle}</h1>
          {!isSearchMode &&(
            <FeaturedProduct />
          )}
          
          {!isSearchMode &&(
            <>
              <h2 className="mt-7.5 mb-5 border-b pb-2.5">Your Reading list</h2>
              <BookList books={readingList}/>
            </>
          )}
          {!isSearchMode &&(
            <>
              <h2 className="mt-7.5 mb-5 border-b pb-2.5">Books For You</h2>
              <BookList books={booksForYou}/>
            </>
          )}
          <h2>
            {isSearchMode ? `Hasil Ditemukan (${booksForYou.length} Buku)` : 'Buku Lainnya'}
          </h2>
        </div>

    </div>
  );
}