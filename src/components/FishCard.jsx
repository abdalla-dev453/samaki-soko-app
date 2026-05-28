import { Link } from "react-router-dom"
import { Anchor, ArrowUpRight, MapPin, Scale } from "lucide-react"

function FishCard({ fish }) {

  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-950/10 dark:border-white/10 dark:bg-white/6 dark:text-white">

      <div className="relative h-56 overflow-hidden">
        <img
          src={fish.image}
          alt={fish.species}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-teal-300 px-3 py-1 text-xs font-black uppercase tracking-wide text-teal-950 shadow">
          Fresh Today
        </span>
        <p className="absolute bottom-4 left-4 text-sm font-bold text-white/90">
          {fish.quantity} kg available
        </p>
      </div>

      <div className="p-5">

        <div className="mb-4 flex items-start justify-between gap-4">

          <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
            {fish.species}
          </h2>

          <p className="text-right text-xl font-black text-teal-800 dark:text-teal-300">
            KES {fish.pricePerKg}
            <span className="block text-xs font-bold text-slate-500 dark:text-slate-400">per kg</span>
          </p>

        </div>

        <div className="grid gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <p className="flex items-center gap-2">
            <MapPin size={16} className="text-teal-700 dark:text-teal-300" />
            {fish.location}
          </p>

          <p className="flex items-center gap-2">
            <Anchor size={16} className="text-teal-700 dark:text-teal-300" />
            {fish.seller} • {fish.boatName}
          </p>

          <p className="flex items-center gap-2">
            <Scale size={16} className="text-teal-700 dark:text-teal-300" />
            Market-ready quantity
          </p>
        </div>

        {/* BUTTONS */}

        <div className="mt-5 flex gap-2">

          <Link
            to={`/market/${fish.id}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-center text-sm font-black text-white hover:bg-teal-800 dark:bg-teal-300 dark:text-teal-950 dark:hover:bg-white"
          >
            View Details
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to={`/sellers/${fish.id}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-800 hover:border-teal-200 hover:bg-teal-50 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
          >
            Seller
          </Link>

        </div>

      </div>

    </article>)
}

export default FishCard
