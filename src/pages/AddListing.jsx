import { useState } from "react"
import { useNavigate } from "react-router-dom"

import toast from "react-hot-toast"

import useListings from "../hooks/useListings"

function AddListing() {

  const navigate = useNavigate()

  const { addListing } = useListings()

  const [preview, setPreview] = useState("")

  const [formData, setFormData] = useState({
    species: "",
    pricePerKg: "",
    quantity: "",
    location: "",
    seller: "",
    boatName: "",
  })

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleImageChange(e) {

    const file = e.target.files[0]

    if (file) {

      const imageUrl =
        URL.createObjectURL(file)

      setPreview(imageUrl)
    }
  }

  function handleSubmit(e) {

    e.preventDefault()

    const newListing = {
      id: Date.now(),

      ...formData,

      pricePerKg: Number(formData.pricePerKg),

      quantity: Number(formData.quantity),

      image:
        preview ||
        "https://images.unsplash.com/photo-1510130387422-82bed34b37e9",
    }

    addListing(newListing)

    toast.success("Fish listing added successfully")

    navigate("/dashboard")
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Add Fish Listing
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* SPECIES */}

        <div>

          <label className="block mb-2 font-medium">
            Fish Species
          </label>

          <input
            type="text"
            name="species"
            placeholder="Example: Tuna"
            value={formData.species}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

        </div>

        {/* PRICE */}

        <div>

          <label className="block mb-2 font-medium">
            Price Per KG
          </label>

          <input
            type="number"
            name="pricePerKg"
            placeholder="Enter price"
            value={formData.pricePerKg}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

        </div>

        {/* QUANTITY */}

        <div>

          <label className="block mb-2 font-medium">
            Quantity (KG)
          </label>

          <input
            type="number"
            name="quantity"
            placeholder="Available quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

        </div>

        {/* SELLER */}

        <div>

          <label className="block mb-2 font-medium">
            Seller Name
          </label>

          <input
            type="text"
            name="seller"
            placeholder="Seller name"
            value={formData.seller}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

        </div>

        {/* BOAT */}

        <div>

          <label className="block mb-2 font-medium">
            Boat Name
          </label>

          <input
            type="text"
            name="boatName"
            placeholder="Boat name"
            value={formData.boatName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

        </div>

        {/* LOCATION */}

        <div>

          <label className="block mb-2 font-medium">
            Landing Site
          </label>

          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            required
          >

            <option value="">
              Select Landing Site
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

          </select>

        </div>

        {/* IMAGE */}

        <div>

          <label className="block mb-2 font-medium">
            Upload Fish Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />

        </div>

        {/* IMAGE PREVIEW */}

        {preview && (

          <div>

            <p className="mb-2 font-medium">
              Image Preview
            </p>

            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-xl"
            />

          </div>

        )}

        {/* BUTTON */}

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Listing
        </button>

      </form>

    </div>
  )
}

export default AddListing;
