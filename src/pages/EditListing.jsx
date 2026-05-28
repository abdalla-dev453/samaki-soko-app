import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import useListings from '../hooks/useListings';
import { Save } from 'lucide-react';

const EditListing = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const { listings, updateListing } = useListings()

  const fish = listings.find(
    (item) => item.id ===  Number(id)
  )

  const [formData, setFormData] = useState({
    species: fish ?.species || "",
    pricePerKg: fish ?.pricePerKg || "",
    quantity: fish ?.quantity || "",
    location: fish ?.location || "",
    seller: fish ?.seller || "",
    boatName: fish ?.boatName || "",
    image: fish ?.image || "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] :
      e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    updateListing({
      ...fish, 
      ...formData,
      pricePerKg: Number(formData.pricePerKg),
      quantity: Number(formData.quantity),
    })

    toast.success(
      "Listing updated successfully!",
    )

    navigate("/dashboard")
  }

  if (!fish) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className='text-2xl font-black'>Listing not found</h1>
      </div>
    )
  }

  return (
    <div className='mx-auto max-w-3xl px-6 py-10'>
      <div className='rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/8 sm:p-8 dark:border-white/10 dark:bg-white/6'>

      <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
        Seller listing
      </p>

      <h1 className='mb-6 mt-2 text-4xl font-black tracking-tight text-slate-950 dark:text-white'>
        Edit Listing
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        >

          <input 
          type="text"
          name="species"
          value={formData.species}
          onChange={handleChange}
          placeholder="Species"
          className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
          />

          <input 
          type="text"
          name="pricePerKg"
          value={formData.pricePerKg}
          onChange={handleChange}
          placeholder="Price per Kg"
          className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
          />

          <input 
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
          />

          <input 
          type="text"
          name="seller"
          value={formData.seller}
          onChange={handleChange}
          placeholder="Seller"
          className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
          />

          <input 
          type="text"
          name='boatName'
          value={formData.boatName}
          onChange={handleChange}
          placeholder="Boat Name"
          className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
          />

          <select 
          name="location" 
          value={formData.location}
          onChange={handleChange}
          className="h-13 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
          >
            <option value="">Select Location</option>
            <option value="Shimoni">Shimoni</option>
            <option value="Vanga">Vanga</option>
            <option value="Msambweni">Msambweni</option>
            <option value="Diani beach reefs">Diani beach reefs</option>
            <option value="Wasini">Wasini</option>
          </select>

          <button 
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 py-4 font-black text-white hover:bg-teal-800 dark:bg-teal-300 dark:text-teal-950 dark:hover:bg-white"
          >
            <Save size={18} />
            Update Listing 
          </button>

      </form>

      </div>
    </div>
  )
}

export default EditListing;
