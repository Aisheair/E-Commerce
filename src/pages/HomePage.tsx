import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <nav
        className="flex items-center justify-between px-6 py-3 
  bg-black/30 backdrop-blur-md border border-white/10 
  text-white shadow-lg rounded-none sticky top-0 z-50"
      >
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="text-2xl font-semibold tracking-wider 
  bg-gradient-to-r from-white via-gray-200 to-gray-400 
  bg-clip-text text-transparent hover:opacity-80 transition"
          >
            Nexio
          </Link>
          <Link
            to="/"
            className=" font-bold text-gray-400 hover:text-accent transition-colors duration-300"
          >
            Home
          </Link>
        </div>
        <div>
          <Link to="/cart" className="flex items-center gap-1 hover:opacity-80 transition  ">
            <ShoppingCart size={26} />
            <span className="bg-red-700 rounded-full w-5 text-center text-sm">
              1
            </span>
          </Link>
        </div>
      </nav>

      <div>
        <div className="text-center pt-16">
          <p className=" text-3xl font-mono text-white/90">Welcome to Nexio</p>
          <p className=" mt-3 text-xl text-white/60 font-mono">
            Your one-stop shop for all your needs!
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
}
