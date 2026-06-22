function CaseHero() {
  return (
    <div
      className="
      bg-gradient-to-r
      from-slate-900
      to-blue-900
      text-white
      rounded-2xl
      p-8
      shadow-xl
      "
    >
      <div className="flex justify-between items-center">

        <div>
          <p className="text-red-300 font-semibold">
            🚨 ACTIVE FRAUD CASE
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Mule Network Investigation
          </h1>

          <p className="text-slate-300 mt-3">
            Pass-Through Mule Pattern Detected
          </p>
        </div>

        <div className="text-right">
          <div className="text-5xl font-bold">
            82
          </div>

          <div className="text-red-300">
            HIGH RISK
          </div>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div>
          <p className="text-slate-400">
            Accounts Involved
          </p>

          <h2 className="text-3xl font-bold">
            14
          </h2>
        </div>

        <div>
          <p className="text-slate-400">
            Fraud Rings
          </p>

          <h2 className="text-3xl font-bold">
            3
          </h2>
        </div>

        <div>
          <p className="text-slate-400">
            Potential Loss
          </p>

          <h2 className="text-3xl font-bold">
            ₹4.8 Cr
          </h2>
        </div>

      </div>
    </div>
  );
}

export default CaseHero;