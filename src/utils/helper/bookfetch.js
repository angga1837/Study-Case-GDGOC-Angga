const BASE_URL = "https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book";
const MAX_READING_LIST = 4;

export async function fetchBookData(params = {}) {
    const queryOptions = {
        sort: params.sort || 'title',
        page: params.page || 1,      
        year: params.year || '',     
        genre: params.genre || '',   
        keyword: params.keyword || '', 
        limit: params.limit || 20   
    };


    const query = new URLSearchParams(queryOptions).toString();
    const apiURL = `${BASE_URL}?${query}`; 
    
    console.log("Mengambil data dari URL:", apiURL); 

    try {
        
        const response = await fetch(apiURL, {
            next: { revalidate: 3600 } 
        });

        if (!response.ok) {
            throw new Error(`Gagal mengambil data buku: ${response.statusText}`);
        }

        const fullData = await response.json();
        const allBooks = fullData.books || []; 

        if (allBooks.length === 0) {
            return { featuredBook: null, readingList: [], booksForYou: [] };
        }

        const featuredBook = allBooks[0]; 
        const readingList = allBooks.slice(1, 1 + MAX_READING_LIST); 
        const booksForYou = allBooks.slice(1 + MAX_READING_LIST); 
        return {
            featuredBook,
            readingList,
            booksForYou,
        };

    } catch (error) {
        console.error("Terjadi error saat mengambil data buku:", error);
        return { featuredBook: null, readingList: [], booksForYou: [] };
    }
}