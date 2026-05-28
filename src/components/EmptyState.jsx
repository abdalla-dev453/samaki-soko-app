const EmptyState = ({ message }) => {
  return (
     <div className="rounded-lg border border-dashed border-slate-300 bg-white/80 p-12 text-center shadow-sm dark:border-white/15 dark:bg-white/6">

      <h2 className="mb-2 text-2xl font-black text-slate-950 dark:text-white">
        No Data Found
      </h2>

      <p className="text-slate-600 dark:text-slate-300">
        {message}
      </p>

    </div>
  )
  
}

export default EmptyState;
