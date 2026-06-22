function RiskBadge() {
  return (
    <div
      style={{
        backgroundColor: "#ffebee",
        border: "2px solid #f44336",
        padding: "15px",
        borderRadius: "10px",
        marginTop: "20px"
      }}
    >
      <h3>⚠ High Risk Account</h3>

      <p>
        Risk Score: <strong>82 / 100</strong>
      </p>

      <p>
        Status: <strong>HIGH RISK</strong>
      </p>
    </div>
  );
}

export default RiskBadge;