import ShopView from "@/src/modules/shop/shopview";
import { fetchBookData } from "@/src/utils/helper/bookfetch";
import { FeaturedBookProvider } from "@/src/component/element/book/featuredcontext";

export default async function ShopPage({ searchParams }){
  const keyword = searchParams.keyword || ''; 
  const { featuredBook, readingList, booksForYou } = await fetchBookData({
      limit: 13, 
      keyword: keyword 
  });
  const allListBooks = [...readingList, ...booksForYou];
  const pageTitle = keyword 
                    ? `Hasil Pencarian untuk: "${keyword}"` 
                    : '';

  if (allListBooks.length === 0 && keyword) {
      return (
          <div className="max-w-6xl mx-auto px-4 py-10 text-center">
              <h1 className="text-2xl font-bold mb-4">{pageTitle}</h1>
              <p className="text-gray-600">Maaf, kami tidak menemukan buku dengan judul yang mengandung kata {keyword}.</p>
          </div>
      );
  }

  return (
    <FeaturedBookProvider initialBook={featuredBook}>
        <ShopView 
            listBooks={allListBooks}
            pageTitle={pageTitle} 
        />
    </FeaturedBookProvider>
  );
}