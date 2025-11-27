import BookCard from "./bookcard";

export default function BookList({ books }) {
  return (
    <div className="flex flex-wrap gap-15 content justify-start">
      {books.map((book) => (
        <BookCard key={book._id} book={book} /> 
      ))}
    </div>
  );
}