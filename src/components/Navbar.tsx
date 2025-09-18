import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white text-black px-6 py-3 flex gap-6 shadow-md justify-center ">
      <Link
        to="/"
        className=" border-black border-2 px-4 py-2 hover:bg-[#59a9f0] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] "
      >
        Home
      </Link>
      <Link
        to="/books"
        className=" border-black border-2 px-4 py-2 hover:bg-[#59a9f0] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
        Books
      </Link>
    </nav>
  );
}
