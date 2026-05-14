/*const Home = () => {
  return (
    <div>
      <h1>Samaki Soko</h1>
      <p>Fresh fish directly from fishermen</p>
    </div>
  )
}

export default Home;*/
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-cyan-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">

          
          {/* LEFT CONTENT */}

          <div>
            <span className="bg-cyan-500 px-4 py-2 rounded-full text-sm font-semibold">
              Fresh From The Ocean
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-6">
              Buy Fresh Fish Directly From Fishermen
            </h1>

            <p className="text-lg text-slate-200 mt-6 leading-relaxed">
              Samaki Soko connects local fishermen with customers, restaurants,
              and seafood lovers. Fresh, affordable, and delivered fast.
            </p>

            </div>

            </div>

            </section>
    </div>
  );
};

export default Home;