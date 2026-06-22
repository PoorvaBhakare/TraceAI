import { useState } from "react";

function SARButton() {
  const [report, setReport] = useState("");

  async function generateSAR() {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/sar"
      );

      const data = await response.json();

      console.log("SAR DATA:", data);

      setReport(data.report);
    } catch (error) {
      console.error(error);
      alert("Backend connected failed");
    }
  }

  return (
    <div className="w-full">
      <button
        onClick={generateSAR}
        className="
        bg-green-600
        text-white
        px-6
        py-3
        rounded-xl
        shadow
        hover:bg-green-700
        "
      >
        Generate SAR
      </button>

      {report !== "" && (
        <div
          className="
          mt-4
          bg-white
          p-6
          rounded-xl
          shadow-lg
          border
          "
        >
          <h2 className="text-xl font-bold mb-4">
            Suspicious Activity Report
          </h2>

          <pre className="whitespace-pre-wrap">
            {report}
          </pre>
        </div>
      )}
    </div>
  );
}

export default SARButton;