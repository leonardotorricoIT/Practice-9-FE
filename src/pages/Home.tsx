import { Link } from "react-router-dom";
import { RiBookShelfLine } from "react-icons/ri";
export default function Home() {
  return (
    <div className=" mt-10 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to MyBooks App
        <RiBookShelfLine
          className="inline-block ml-2 text-[#59a9f0]"
          size={40}
        />
      </h1>

      <p className="mb-6 text-gray-700">
        Simple App to show React Router and show a list of books
      </p>
      <Link
        to="/books"
        className=" border-black border-2 px-4 py-2 hover:bg-[#59a9f0] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
        Go to Books
      </Link>
    </div>
  );
}
