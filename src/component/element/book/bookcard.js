"use client";
import { useFeaturedBook } from "./featuredcontext";
export default function BookCard({ book }) {
  const { setBookAsFeatured } = useFeaturedBook();
  const title = book.title;
  const authorName = book.author?.name || 'Anonim';
  const price = book.details?.price || 'Harga Tidak Tersedia';
  const coverImage = book.cover_image;
  const oldPrice = 'Rp 65.000'; 
  const currentPrice = price; 
  const handleClick = () => {
      setBookAsFeatured(book);
  };

  return (
    <div className="w-1/5 p-2.5 mb-5 border rounded-lg border-gray-100">
      <img 
        src={coverImage} 
        alt={title}
        className="w-full h-auto rounded cursor-pointer hover:scale-110 transition duration-200"
        onClick={handleClick} 
      />
      <h4 className="mt-2.5 mb-1 text-xl">{title}</h4>
      <p className="mb-2.5 text-sm text-amber-950">
        {authorName}
      </p>
      <div className="flex items-center">
        <span className="text-gray-500 mr-2.5 line-through">
          {oldPrice}
        </span>
        <span className="text-green-500 font-bold">
          {currentPrice}
        </span>
      </div>
    </div>
  );
}