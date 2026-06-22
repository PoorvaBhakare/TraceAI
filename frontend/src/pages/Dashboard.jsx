import Navbar from "../components/Navbar";
import CaseHero from "../components/CaseHero";
import MetricCard from "../components/MetricCard";
import DemoLoader from "../components/DemoLoader";
import { dashboardMetrics } from "../data/demoData";

import RiskBadge from "../components/RiskBadge";
import DetonationMoment from "../components/DetonationMoment";
import NetworkGraph from "../components/NetworkGraph";
import EvidencePanel from "../components/EvidencePanel";
import FraudReplay from "../components/FraudReplay";
import FreezeButton from "../components/FreezeButton";
import SARButton from "../components/SARButton";
import RiskTimeline from "../components/RiskTimeline";

function Dashboard() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />

      <div className="p-6">

        <DemoLoader />

        <div className="grid grid-cols-2 gap-4 mt-6">
          {dashboardMetrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
            />
          ))}
        </div>

        <div className="mt-6">
          <RiskBadge />
        </div>

        <div className="mt-6">
          <DetonationMoment />
        </div>

        <div className="mt-6">
          <RiskTimeline />
        </div>

        <div className="mt-6">
          <NetworkGraph />
        </div>

        <div className="mt-6">
          <EvidencePanel />
        </div>

        <div className="mt-6">
          <FraudReplay />
        </div>

        <div className="flex gap-4 mt-6">
          <FreezeButton />
          <SARButton />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;