import { useParams } from "react-router-dom"
import FishCard from "../components/FishCard"
import useListings from "../hooks/useListings"

const SellerProfile = () => {

  const { id } = useParams()
  const { listings } = useListings()

  const sellerFish = listings.find (
    (fish) => fish.id === Number(id)
  )

  if (!sellerFish) {
    return (
      <h1 className="text-2xl font-bold">
        Seller not found
      </h1>
    )
  }

  const sellerListings = listings.filter (
    (fish) => fish.seller === sellerFish.seller
  )

  return (
    <div>

      {/**profile header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">

        <div className="flex flex-col md:flex-row justify-between">

          <div>

            <h1 className="text-4xl font-bold mb-2">
              {sellerFish.seller}
            </h1>

            <p className="text-gray-600 text-lg">
              Boat Name: {sellerFish.boatName}
            </p>

            <p className="text-gray-600">
              Landing Site: {sellerFish.location}
            </p>

          </div>

          <div className="mt-4 md:mt-0">

            <div className="bg-blue-100 p-4 rounded-lg">

              <p className="font-semibold">
                Active Listings
              </p>

              <p className="text-3xl font-bold text-blue-900">
                {sellerListings.length}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* SELLER LISTINGS */}

      <h2 className="text-2xl font-bold mb-6">
        Seller Listings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {sellerListings.map((fish) => (
          <FishCard
            key={fish.id}
            fish={fish}
          />
        ))}

      </div>

    </div>
  )
}

export default SellerProfile;
