import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import useAuth from "../hooks/useAuth"
import useListings from "../hooks/useListings"
import StatsCard from "../components/StatsCard"
import { LogOut, Plus } from "lucide-react"

function Dashboard() {

  const { user, logout } = useAuth()
  const { listings, deleteListing } = useListings()

  function handleDelete(id) {
    deleteListing(id)
    toast.success("Listing deleted")
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      {/* HEADER */}

      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>

          <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
            Seller cockpit
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Welcome, {user?.name}
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Manage your fish listings
          </p>

        </div>

        <button
          onClick={logout}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-3 font-black text-red-700 hover:bg-red-600 hover:text-white dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-200"
        >
          <LogOut size={17} />
          Logout
        </button>

      </div>

      {/* STATS */}


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <StatsCard
          title="Total Listings"
          value={listings.length}
          color="text-slate-950 dark:text-white"
        />

        <StatsCard
          title="Active Listings"
          value={listings.length}
          color="text-green-600"
        />

        <StatsCard
          title="Earnings in KES#"
          value={listings.reduce((total, fish) => total + (fish.pricePerKg * fish.quantity), 0)}
          color="text-teal-800 dark:text-teal-300"
        />

      </div>

      {/* ADD BUTTON */}

      <Link
        to="/dashboard/add"
        className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-black text-white shadow-lg shadow-slate-950/10 hover:bg-teal-800 dark:bg-teal-300 dark:text-teal-950 dark:hover:bg-white"
      >
        <Plus size={18} />
        Add New Listing
      </Link>

      {/* TABLE */}

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/6">

        <table className="w-full">

          <thead className="bg-slate-950 text-white dark:bg-white/10">

            <tr>

              <th className="p-4 text-left">
                Species
              </th>

              <th className="p-4 text-left">
                Price
              </th>

              <th className="p-4 text-left">
                Quantity
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {listings.map((fish) => (

              <tr
                key={fish.id}
                className="border-b border-slate-100 last:border-0 dark:border-white/10"
              >

                <td className="p-4 font-black text-slate-950 dark:text-white">
                  {fish.species}
                </td>

                <td className="p-4">
                  KES {fish.pricePerKg}
                </td>

                <td className="p-4">
                  {fish.quantity} kg
                </td>

                <td className="p-4 flex gap-2">

                  <Link
                    to={`/dashboard/listings/${fish.id}/edit`}
                    className="rounded-full bg-amber-100 px-4 py-2 text-sm font-black text-amber-800 hover:bg-amber-200"
                  >
                    Edit
                  </Link>

                  <button
                    className="rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700 hover:bg-red-600 hover:text-white"
                    onClick={() => handleDelete(fish.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Dashboard;
