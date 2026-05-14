import { useContext } from "react"
import ListingsContext from "../context/listingsContext"

function useListings() {
  const context = useContext(ListingsContext)

  if (!context) {
    throw new Error("useListings must be used within a ListingsProvider")
  }

  return context
}

export default useListings
