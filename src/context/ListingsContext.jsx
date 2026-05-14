import useLocalStorage from "../hooks/useLocalStorage"
import ListingsContext from "./listingsContext"

import fishListingsData from "../data/mockData"

function ListingsProvider({ children }) {

  const [listings, setListings] =
     useLocalStorage(
      "samakiListings",
      fishListingsData
     )
  // ADD LISTING

  function addListing(newListing) {

    setListings((prev) => [
      newListing,
      ...prev,
    ])
  }

  // DELETE LISTING

  function deleteListing(id) {

    setListings((prev) =>
      prev.filter((fish) => fish.id !== id)
    )
  }

  // UPDATE LISTING

  function updateListing(updatedFish) {

    setListings((prev) =>
      prev.map((fish) =>
        fish.id === updatedFish.id
          ? updatedFish
          : fish
      )
    )
  }

  return (
    <ListingsContext.Provider
      value={{
        listings,
        addListing,
        deleteListing,
        updateListing,
      }}
    >
      {children}
    </ListingsContext.Provider>
  )
}

export  {
  ListingsProvider,
}
