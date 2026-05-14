import { Link } from "react-router-dom"

function FishCard({ fish }) {

  return (
    <div className="
bg-white
dark:bg-gray-900
dark:text-white
rounded-2xl
shadow-md
overflow-hidden
hover:scale-[1.02]
hover:shadow-2xl
transition
duration-300
" >

      <img
        src={fish.image}
        alt={fish.species}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <div className="flex justify-between items-center mb-2">

          <h2 className="text-xl font-bold text-amber-800">
            {fish.species}
          </h2>

          <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">
            Fresh Today
          </span>

        </div>

        <p className="text-gray-600">
          Location: {fish.location}
        </p>

        <p className="text-gray-600">
          Seller: {fish.seller}
        </p>

        <p className="text-gray-600">
          Boat: {fish.boatName}
        </p>

        <p className="text-blue-900 font-bold mt-2">
          KES {fish.pricePerKg}/kg
        </p>

        <p className="text-green-600">
          {fish.quantity} kg available
        </p>

        {/* BUTTONS */}

        <div className="flex gap-2 mt-4">

          <Link
            to={`/market/${fish.id}`}
            className="flex-1 bg-blue-900 text-white py-2 rounded-lg text-center hover:bg-blue-700"
          >
            View Details
          </Link>

          <Link
            to={`/sellers/${fish.id}`}
            className="flex-1 border border-blue-900 text-blue-900 py-2 rounded-lg text-center hover:bg-blue-50"
          >
            Seller
          </Link>

        </div>

      </div>

    </div>)
}

export default FishCard
