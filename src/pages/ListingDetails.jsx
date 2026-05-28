import { useParams, useNavigate } from "react-router-dom"
import useListings from "../hooks/useListings"
import { ArrowLeft, Anchor, MessageCircle, MapPin, Scale } from "lucide-react"

function ListingDetails() {

  const { id } = useParams()
  const navigate = useNavigate()
  const { listings } = useListings()

  const fish = listings.find(
    (item) => item.id === Number(id)
  )

  if (!fish) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-2xl font-black">Fish listing not found</h1>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm hover:bg-teal-50 dark:border-white/10 dark:bg-white/6 dark:text-white"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-950/8 dark:border-white/10 dark:bg-white/6">

        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[360px]">
            <img
              src={fish.image}
              alt={fish.species}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute left-6 top-6 rounded-full bg-teal-300 px-4 py-2 text-sm font-black uppercase tracking-wide text-teal-950 shadow-lg">
              Fresh Catch
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Listing Details
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              {fish.species}
            </h1>

            <p className="mt-4 text-4xl font-black text-teal-800 dark:text-teal-300">
              KES {fish.pricePerKg}
              <span className="ml-2 text-base font-bold text-slate-500 dark:text-slate-400">per kg</span>
            </p>

            <div className="mt-8 grid gap-3">
              {[
                [Scale, "Quantity", `${fish.quantity} kg available`],
                [MapPin, "Landing Site", fish.location],
                [Anchor, "Seller", `${fish.seller} • ${fish.boatName}`],
              ].map(([Icon, label, value]) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 text-teal-800 dark:bg-teal-300/15 dark:text-teal-200">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">{label}</p>
                    <p className="font-black text-slate-950 dark:text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 font-black text-white shadow-lg shadow-teal-950/20 hover:bg-teal-800"
            >
              <MessageCircle size={19} />
              Contact Seller on WhatsApp
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ListingDetails;
