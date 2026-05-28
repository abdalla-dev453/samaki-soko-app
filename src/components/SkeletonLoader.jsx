function SkeletonLoader() {

  return (
    <div className="animate-pulse overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/6">

      <div className="h-56 bg-slate-200 dark:bg-white/10"></div>

      <div className="space-y-4 p-5">

        <div className="h-5 rounded bg-slate-200 dark:bg-white/10"></div>

        <div className="h-4 rounded bg-slate-200 dark:bg-white/10"></div>

        <div className="h-4 rounded bg-slate-200 dark:bg-white/10"></div>

      </div>

    </div>
  )
}


export default SkeletonLoader;
