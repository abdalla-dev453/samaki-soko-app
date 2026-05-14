import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import useListings from '../hooks/useListings';

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
      <h1 className='text-2xl font-bold'>
        Listing not found
      </h1>
    )
  }

  return (
    <div className='max-w-2xl mx-auto bg-white p-8 rounded-xl shadow'>

      <h1 className='text-3xl font-bold md-6'>
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
          className="w-full p-2 border border-gray-300 rounded"
          />

          <input 
          type="text"
          name="pricePerKg"
          value={formData.pricePerKg}
          onChange={handleChange}
          placeholder="Price per Kg"
          className="w-full p-2 border border-gray-300 rounded"
          />

          <input 
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full p-2 border border-gray-300 rounded"
          />

          <input 
          type="text"
          name="seller"
          value={formData.seller}
          onChange={handleChange}
          placeholder="Seller"
          className="w-full p-2 border border-gray-300 rounded"
          />

          <input 
          type="text"
          name='boatName'
          value={formData.boatName}
          onChange={handleChange}
          placeholder="Boat Name"
          className="w-full p-2 border border-gray-300 rounded"
          />

          <select 
          name="location" 
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
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
          className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Update Listing 
          </button>

      </form>

    </div>
  )
}

export default EditListing;
