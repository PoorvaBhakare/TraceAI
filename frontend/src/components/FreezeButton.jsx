import { useState } from "react";

function FreezeButton() {

  const [frozen, setFrozen] =
    useState(false);

  return (
    <div>

      <button
        onClick={() => setFrozen(true)}
        className="
        bg-red-600
        text-white
        px-6
        py-3
        rounded-xl
        shadow
        "
      >
        Freeze Network
      </button>

      {frozen && (

        <div
          className="
          mt-4
          bg-red-50
          border
          border-red-300
          p-4
          rounded-xl
          "
        >
          <h3>
            ✅ Network Frozen
          </h3>

          <p>
            Accounts Frozen: 14
          </p>

          <p>
            Estimated Loss Prevented:
            ₹18.2 Lakh
          </p>
        </div>

      )}

    </div>
  );
}

export default FreezeButton;