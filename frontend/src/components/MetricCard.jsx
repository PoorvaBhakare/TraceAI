function MetricCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2 text-slate-900">
        {value}
      </h2>
    </div>
  );
}

export default MetricCard;