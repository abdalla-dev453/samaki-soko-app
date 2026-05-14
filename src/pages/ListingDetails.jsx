import { useParams, useNavigate } from "react-router-dom"
import useListings from "../hooks/useListings"

function ListingDetails() {

  const { id } = useParams()
  const navigate = useNavigate()
  const { listings } = useListings()

  const fish = listings.find(
    (item) => item.id === Number(id)
  )

  if (!fish) {
    return (
      <h1 className="text-2xl font-bold">
        Fish listing not found
      </h1>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src={fish.image}
        alt={fish.species}
        className="w-full h-[400px] object-cover"
      />

      <div className="p-8">

        <div className="flex justify-between items-center">

          <h1 className="text-4xl font-bold">
            {fish.species}
          </h1>

          <span className="bg-green-500 text-white px-3 py-1 rounded">
            Fresh Catch
          </span>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Fish Details
            </h2>

            <p className="mb-2">
              <strong>Price:</strong>
              {" "}KES {fish.pricePerKg}/kg
            </p>

            <p className="mb-2">
              <strong>Quantity:</strong>
              {" "}{fish.quantity} kg
            </p>

            <p className="mb-2">
              <strong>Landing Site:</strong>
              {" "}{fish.location}
            </p>

          </div>

          <div>

            <h2 className="text-2xl text-green-500 font-semibold mb-4">
              Seller Information
            </h2>

            <p className="mb-2">
              <strong>Seller:</strong>
              {" "}{fish.seller}
            </p>

            <p className="mb-2">
              <strong>Boat Name:</strong>
              {" "}{fish.boatName}
            </p>

            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              Contact Seller on WhatsApp
            </a>

            <button onClick={() => navigate(-1)} className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600">
              Go back
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ListingDetails;
