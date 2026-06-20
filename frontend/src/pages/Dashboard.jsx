import Navbar from "../components/Navbar";
import MetricCard from "../components/MetricCard";
import DemoLoader from "../components/DemoLoader";
import { dashboardMetrics } from "../data/demoData";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <DemoLoader />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          {dashboardMetrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;