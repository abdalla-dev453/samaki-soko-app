import { useState } from "react"
import { useNavigate } from "react-router-dom"

import toast from "react-hot-toast"

import useListings from "../hooks/useListings"
import { ImagePlus, Plus } from "lucide-react"

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
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/8 sm:p-8 dark:border-white/10 dark:bg-white/6">

      <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
        Seller listing
      </p>

      <h1 className="mb-6 mt-2 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
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
            className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
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
            className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
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
            className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
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
            className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
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
            className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
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
            className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
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
            className="w-full rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-semibold file:mr-4 file:rounded-full file:border-0 file:bg-teal-700 file:px-4 file:py-2 file:font-black file:text-white dark:border-white/10 dark:bg-slate-950/50"
          />

        </div>

        {/* IMAGE PREVIEW */}

        {preview && (

          <div>

            <p className="mb-2 font-medium">
              <span className="inline-flex items-center gap-2">
                <ImagePlus size={17} />
                Image Preview
              </span>
            </p>

            <img
              src={preview}
              alt="Preview"
              className="h-64 w-full rounded-lg object-cover"
            />

          </div>

        )}

        {/* BUTTON */}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 py-4 font-black text-white hover:bg-teal-800 dark:bg-teal-300 dark:text-teal-950 dark:hover:bg-white"
        >
          <Plus size={18} />
          Add Listing
        </button>

      </form>

      </div>
    </div>
  )
}

export default AddListing;
