import FishCard from "../components/FishCard";
import useListings from "../hooks/useListings";
import EmptyState from "../components/EmptyState";
import useLocalStorage from "../hooks/useLocalStorage";
import { useState, useEffect } from "react";
import SkeletonLoader from "../components/SkeletonLoader";
import { Search, SlidersHorizontal } from "lucide-react";

const Market = () => {
  const { listings } = useListings();
  const [searchTerm, setSearchTerm] = useLocalStorage("marketSearch", "");
  const [selectedLocation, setSelectedLocation] = useLocalStorage(
    "marketLocation",
    ""
  );
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const timerId = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timerId)
  }, []);


  const filteredFish = listings.filter((fish) =>
    fish.species.toLowerCase().includes(searchTerm.toLowerCase()),
  )

    .filter((fish) => selectedLocation ? fish.location === 
      selectedLocation
 : true
    )

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
            Live coastal inventory
          </span>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Fish Marketplace
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Browse verified catch by species and landing site, priced for fast procurement.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/6 dark:text-slate-200">
          {filteredFish.length} listings available
        </div>
      </div>

        <div className="mb-8 grid gap-4 rounded-lg border border-slate-200 bg-white/86 p-3 shadow-sm backdrop-blur md:grid-cols-[1fr_260px] dark:border-white/10 dark:bg-white/6">
          <label className="relative block">
            <Search
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchTerm}
              placeholder="Search species..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-13 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
            />
          </label>

          <label className="relative block">
            <SlidersHorizontal
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="h-13 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-12 pr-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
            >

              <option value="">All Locations</option>
              <option value="Shimoni">Shimoni</option>
              <option value="Vanga">Vanga</option>
              <option value="Msambweni">Msambweni</option>
              <option value="Diani beach reefs">Diani beach reefs</option>
              <option value="Wasini Island">Wasini Island</option>
            </select>
          </label>

        </div>

        {/**listing grid */}

        {
  loading ? (

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {[...Array(6)].map((_, index) => (

        <SkeletonLoader
          key={index}
        />

      ))}

    </div>

  ) : filteredFish.length === 0 ? (

    <EmptyState
      message="No fish listings found."
    />

  ) : (

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {filteredFish.map((fish) => (

        <FishCard
          key={fish.id}
          fish={fish}
        />

      ))}

    </div>

  )
}

    </div>
  )
}

export default Market;
