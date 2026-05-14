import FishCard from "../components/FishCard";
import useListings from "../hooks/useListings";
import EmptyState from "../components/EmptyState";
import useLocalStorage from "../hooks/useLocalStorage";
import { useState, useEffect } from "react";
import SkeletonLoader from "../components/SkeletonLoader";

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
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Fish Marketplace
        </h1>

        {/**search + filter section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          
          {/**search */}

          <input
           type="text"
           value={searchTerm}
           placeholder="Search fish species..."
           onChange={(e) => 
             setSearchTerm(e.target.value)
           }
           className="border p-3 rounded-lg flex-1"
            />

            {/**location filter */}

            <select
              value={selectedLocation}
              onChange={(e) => 
               setSelectedLocation(e.target.value)
              }
            className="border p-3 rounded-lg"
            >

              <option value="">
                All Locations
              </option>

              <option value="Shimoni">
                Shimoni
              </option>

              <option value="Vanga">
                Vanga
              </option>

              <option value="Msambweni">
                Msambweni
              </option>

              <option value="Diani beach reefs">
                Diani beach reefs
              </option>

              <option value="Wasini Island">
                Wasini Island
              </option>
            </select>

        </div>

        {/**listing grid */}

        {
  loading ? (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
