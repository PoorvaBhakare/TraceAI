import ForceGraph2D from "react-force-graph-2d";

const data = {
  nodes: [
    { id: "Victim 1" },
    { id: "Victim 2" },
    { id: "Victim 3" },
    { id: "Mule Account" },
    { id: "Layer A" },
    { id: "Layer B" },
    { id: "Destination" }
  ],
  links: [
    { source: "Victim 1", target: "Mule Account" },
    { source: "Victim 2", target: "Mule Account" },
    { source: "Victim 3", target: "Mule Account" },
    { source: "Mule Account", target: "Layer A" },
    { source: "Mule Account", target: "Layer B" },
    { source: "Layer A", target: "Destination" }
  ]
};

function NetworkGraph() {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-2">
        Fraud Network Intelligence
      </h2>

      <p className="text-slate-500 mb-4">
        Connected suspicious accounts detected
      </p>

      <ForceGraph2D
        graphData={data}
        height={600}
      />
    </div>
  );
}

export default NetworkGraph;