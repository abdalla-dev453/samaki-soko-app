import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import useAuth from "../hooks/useAuth"
import useListings from "../hooks/useListings"
import StatsCard from "../components/StatsCard"

function Dashboard() {

  const { user, logout } = useAuth()
  const { listings, deleteListing } = useListings()

  function handleDelete(id) {
    deleteListing(id)
    toast.success("Listing deleted")
  }

  return (
    <div>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Welcome, {user?.name}
          </h1>

          <p className="text-gray-600">
            Manage your fish listings
          </p>

        </div>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      {/* STATS */}


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <StatsCard
          title="Total Listings"
          value={listings.length}
          color="text-black"
        />

        <StatsCard
          title="Active Listings"
          value={listings.length}
          color="text-green-600"
        />

        <StatsCard
          title="Earnings"
          value="KES 42,000"
          color="text-blue-900"
        />

      </div>

      {/* ADD BUTTON */}

      <Link
        to="/dashboard/add"
        className="inline-block mb-6 bg-blue-900 text-white px-6 py-3 rounded-lg"
      >
        Add New Listing
      </Link>

      {/* TABLE */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-900 text-white">

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
                className="border-b"
              >

                <td className="p-4">
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
                    className="bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </Link>

                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
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
