import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === id);

  useEffect(() => {
    if (!book) {
      navigate("/not-found");
    }
  }, [book, navigate]);

  if (!book) {
    return null;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className=" border-black px-4 py-2 hover:bg-[#59a9f0] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
        <FaArrowLeft className="inline-block" /> Go Back
      </button>
      <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Author:</strong> {book.author}
      </p>
      <p className="text-gray-600 mb-6">{book.description}</p>
    </div>
  );
}
