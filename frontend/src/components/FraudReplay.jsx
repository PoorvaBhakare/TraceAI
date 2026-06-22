import { useState } from "react";

function FraudReplay() {

  const steps = [
    "Victim transfers ₹50,000",
    "Mule receives funds",
    "Funds moved to Layer-A",
    "Funds moved to Layer-B",
    "Funds exit network"
  ];

  const [index, setIndex] =
    useState(0);

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold">
        Fraud Replay Engine
      </h2>

      <p className="mt-4">
        Step {index + 1} / {steps.length}
      </p>

      <p className="mt-2">
        {steps[index]}
      </p>

      <button
        className="
        bg-blue-600
        text-white
        px-4
        py-2
        rounded-lg
        mt-4
        "
        onClick={() =>
          setIndex((index + 1) % steps.length)
        }
      >
        Next Step
      </button>

    </div>
  );
}

export default FraudReplay;