const EmptyState = ({ message }) => {
  return (
     <div className="bg-white p-10 rounded-xl shadow text-center">

      <h2 className="text-2xl font-bold mb-2">
        No Data Found
      </h2>

      <p className="text-gray-600">
        {message}
      </p>

    </div>
  )
  
}

export default EmptyState;
