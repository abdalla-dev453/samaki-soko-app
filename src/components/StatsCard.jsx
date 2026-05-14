const StatsCard = ({
  title,
  value,
  color,
}) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow`}>

      <h2 className="text-lg font-semibold">
        {title}
        </h2>

      <p className={`text-4xl font-bold ${color}`}
      >
        {value}
        </p>

    </div>
  )
}

export default StatsCard;
