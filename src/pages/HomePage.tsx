import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/product";

export default function HomePage() {
  return (
    <>
      <nav
        className="flex items-center justify-between px-6 py-3 
  bg-black/50 backdrop-blur-md border border-white/10 
  text-white shadow-lg rounded-none fixed w-full top-0 left-0 z-50"
      >
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="text-2xl font-semibold tracking-wider 
  bg-gradient-to-r from-[#15d5ae] via-gray-200 to-gray-400 
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
          <Link
            to="/cart"
            className="flex items-center gap-1 hover:opacity-80 transition  "
          >
            <ShoppingCart size={26} className="text-[#15d5ae]" />
            <span className="bg-red-700 rounded-full w-5 text-center text-sm">
              1
            </span>
          </Link>
        </div>
      </nav>

      <div>
        <div className="text-center pt-25 pb-20">
          <p className=" text-3xl font-mono text-white/90">
            Welcome to <span className="text-[#15d5ae]">Nexio</span>
          </p>
          <p className=" mt-3 text-xl text-white/60 font-mono">
            Your one-stop shop for all your needs!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#111111] border border-white/10 rounded-xl 
                 p-5 flex flex-col items-center text-center 
                 hover:border-[#00ffcc]/40 transition-all duration-300"
            >
              <Link to={`/${product.url}`} className="w-full">
                <img src={product.image} alt={product.name} />
              </Link>

              <div>
                <p className="text-lg font-semibold text-white">
                  {product.name}
                </p>
                <p className="text-[#15d5ae] font-medium mb-3">
                  {product.price}
                </p>
              </div>

              <div className="flex">
                {
                  [...Array(5)].map((_,i)=>(
                    <Star key={i} size={14} className={`${i < product.rating ? "text-yellow-400":"text-gray-400"}`}/>

                  ))
                }
              </div>

             

              <button
                className="w-full py-2 text-[#15d5ae] font-medium 
           border-b border-[#00ffcc]/20 hover:border-[#15d5ae]/60 
           hover:text-white transition-all duration-200"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
