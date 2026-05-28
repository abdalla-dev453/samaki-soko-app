const StatsCard = ({
  title,
  value,
  color,
}) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/6">

      <h2 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        {title}
        </h2>

      <p className={`mt-3 text-4xl font-black ${color}`}
      >
        {value}
        </p>

    </div>
  )
}

export default StatsCard;
