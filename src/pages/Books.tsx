import { Link } from "react-router-dom";
import { books } from "../data/books";

export default function Books() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Books List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <li key={book.id} className="border rounded-lg p-4 shadow bg-white">
            <h3 className="font-semibold text-lg">{book.title}</h3>
            <p className="text-gray-600 mb-2">by {book.author}</p>
            <Link
              to={`/books/${book.id}`}
              className=" border-black border-2 px-4 py-2 hover:bg-[#ffe552] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              View Book
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
