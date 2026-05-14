function SkeletonLoader() {

  return (
    <div className="animate-pulse bg-white rounded-2xl shadow overflow-hidden">

      <div className="bg-gray-300 h-52"></div>

      <div className="p-4 space-y-3">

        <div className="h-4 bg-gray-300 rounded"></div>

        <div className="h-4 bg-gray-300 rounded"></div>

        <div className="h-4 bg-gray-300 rounded"></div>

      </div>

    </div>
  )
}


export default SkeletonLoader;
