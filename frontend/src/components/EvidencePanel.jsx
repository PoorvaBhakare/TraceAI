function EvidencePanel() {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-6
        "
      >
        Investigation Evidence
      </h2>

      <div className="mb-4">
        <span
          className="
          bg-red-100
          text-red-700
          px-3
          py-1
          rounded-full
          "
        >
          High Risk Pattern
        </span>
      </div>

      <div className="space-y-4">

        <div>
          <h3 className="font-semibold">
            Pattern
          </h3>

          <p>
            Pass Through Mule
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Confidence
          </h3>

          <p>
            94%
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Risk Factors
          </h3>

          <ul className="list-disc ml-5">
            <li>Rapid outgoing transfers</li>
            <li>Pass-through ratio exceeded threshold</li>
            <li>Multiple linked accounts detected</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">
            Supporting Evidence
          </h3>

          <p>
            Five incoming transfers followed
            by rapid outgoing movement
            within 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
}

export default EvidencePanel;