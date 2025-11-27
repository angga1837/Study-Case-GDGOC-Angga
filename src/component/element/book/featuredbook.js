"use client";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useFeaturedBook } from "./featuredcontext";
export default function FeaturedProduct() {
  const { featuredBook: book } = useFeaturedBook();
    if (!book) return <div style={{padding: '20px', textAlign: 'center'}}>Tidak ada buku unggulan saat ini.</div>;

  const title = book.title;
  const author = book.author?.name;
  const tags = book.tags;
  const price = book.details?.price;
  const summary = book.summary ? book.summary.substring(0, 300) + '...' : 'Deskripsi tidak tersedia.';
  const totalPages = book.details?.total_pages;
  const isbn = book.details?.isbn;
  const publisher = book.publisher;
  const publishedDate = book.details?.published_date;


  return (
    <div className="flex p-7.5 bg-gray-100 rounded-xl mb-10">
      {/*Gambar Buku */}
      <div className="pr-7.5 w-1/3">
        <img 
          src={book.cover_image} 
          alt={title} 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/*Detail Buku */}
      <div className="w-4/6">
        {tags.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {tags.map((tag, index) => (
              <span 
                key={`${tag.url}-${index}`} 
                className="bg-purple-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm"
              >
                {tag.name}
              </span>
            ))}
          </div>
        ) : (
             // Fallback jika tidak ada tag sama sekali
             <span className="bg-gray-300 py-1 px-2.5 rounded-xl text-sm text-gray-700 font-semibold">
                {book.category?.name || 'Uncategorized'} 
            </span>
        )}
        <h1 className="mt-2.5 mb-1">{title}</h1>
        <h3 className="mb-3.5 text-green-400">{price}</h3>
        <p className="italic text-gray-400">Author: {author}</p>
        <p className="mb-5 leading-normal">{summary}</p>
        
        {/* Detail buku */}
        <div className="my-2">
            <p><strong>Total Halaman:</strong> {totalPages}</p>
            <p><strong>ISBN:</strong> {isbn || '-'}</p>
            <p><strong>Penerbit:</strong> {publisher || '-'}</p>
            <p><strong>Tanggal Terbit:</strong> {publishedDate}</p>
        </div>

        {/* Tombol buyi */}
        <div className="flex space-x-4 items-center text-center" >
          <button className="text-white py-3 px-6 border-none rounded bg-blue-400 cursor-pointer text-sm hover:scale-105 transition duration-200">
          Buy Now
        </button>
        <FiHeart className=" bg-blue-200 text-5xl p-3 rounded-full cursor-pointer hover:scale-105 transition duration-200"></FiHeart>
        <FiShoppingCart className="bg-blue-200 text-5xl p-3 rounded-full cursor-pointer hover:scale-105 transition duration-200"></FiShoppingCart>
        <FiEye className="bg-blue-200 text-5xl p-3 rounded-full cursor-pointer hover:scale-105 transition duration-200"></FiEye>
        </div>
        
      </div>
    </div>
  );
}