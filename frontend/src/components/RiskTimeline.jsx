import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { step: "S1", risk: 10 },
  { step: "S2", risk: 18 },
  { step: "S3", risk: 27 },
  { step: "S4", risk: 41 },
  { step: "S5", risk: 82 }
];

function RiskTimeline() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Risk Evolution Timeline
      </h2>

      <LineChart
        width={700}
        height={250}
        data={data}
      >
        <XAxis dataKey="step" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="risk"
        />
      </LineChart>

    </div>
  );
}

export default RiskTimeline;