function CaseOverview() {
  return (
    <div
      className="
      bg-gradient-to-r
      from-red-600
      to-red-500
      text-white
      rounded-2xl
      shadow-xl
      p-8
      mb-6
      "
    >
      <h1
        className="
        text-4xl
        font-bold
        "
      >
        🚨 Active Fraud Investigation
      </h1>

      <p className="mt-2">
        High confidence mule network detected
      </p>

      <div
        className="
        grid
        grid-cols-4
        gap-6
        mt-8
        "
      >

        <div>
          <p>Risk Score</p>
          <h2 className="text-3xl font-bold">
            82
          </h2>
        </div>

        <div>
          <p>Loss At Risk</p>
          <h2 className="text-3xl font-bold">
            ₹4.8 Cr
          </h2>
        </div>

        <div>
          <p>Accounts</p>
          <h2 className="text-3xl font-bold">
            14
          </h2>
        </div>

        <div>
          <p>Confidence</p>
          <h2 className="text-3xl font-bold">
            94%
          </h2>
        </div>

      </div>
    </div>
  );
}

export default CaseOverview;