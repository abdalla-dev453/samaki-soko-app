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
import { ArrowRight, BadgeCheck, Fish, MapPin, ShieldCheck } from "lucide-react";
import heroImage from "../assets/hero.jpeg";


const Home = () => {
  return (
    <div>
      <section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-slate-500 text-white">
        <img
          src={heroImage}
          alt="Fresh fish laid on ice at a coastal market"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,23,0.92),rgba(3,34,36,0.7)_46%,rgba(3,18,23,0.16))]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-bold text-teal-50 shadow-xl backdrop-blur">
              <BadgeCheck size={16} />
              Fresh catch, verified sellers
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
              Samaki Soko
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              Buy premium coastal seafood directly from trusted fishermen across Shimoni, Vanga, and Msambweni.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/market"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3 font-black text-teal-950 shadow-2xl shadow-teal-950/30 hover:bg-white"
              >
                Explore Market
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur hover:bg-white/18"
              >
                Sell Your Catch
              </Link>
            </div>
          </div>

          <div className="grid gap-4 self-end pb-6 sm:grid-cols-3 lg:self-center lg:pb-0">
            {[
              ["15+", "Live listings"],
              ["3", "Landing sites"],
              ["Same day", "Catch updates"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/15 bg-white/12 p-5 shadow-2xl backdrop-blur-md"
              >
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-1 text-sm font-semibold text-teal-50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-14 md:grid-cols-3">
        {[
          [Fish, "Auction-ready inventory", "Scan species, price, quantity, and boat details in a market built for repeat buying."],
          [ShieldCheck, "Trusted seller flow", "Seller pages and direct contact make sourcing transparent from landing site to kitchen."],
          [MapPin, "Coastal coverage", "Filter listings by key landing sites and keep procurement focused on your preferred supply routes."],
        ].map(([Icon, title, copy]) => (
          <article
            key={title}
            className="rounded-lg border border-slate-200 bg-white/82 p-6 shadow-sm dark:border-white/10 dark:bg-white/6"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 text-teal-800 dark:bg-teal-300/15 dark:text-teal-200">
              <Icon size={21} />
            </div>
            <h2 className="text-xl font-black text-slate-950 dark:text-white">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{copy}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Home;
