function Navbar() {
  return (
    <div
      className="
      bg-slate-950
      text-white
      px-8
      py-5
      shadow-lg
      "
    >
      <div
        className="
        flex
        justify-between
        items-center
        "
      >
        <div>
          <h1
            className="
            text-3xl
            font-bold
            "
          >
            TraceAI
          </h1>

          <p
            className="
            text-slate-400
            "
          >
            Fraud Intelligence Platform
          </p>
        </div>

        <div
          className="
          flex
          gap-8
          "
        >
          <span>Dashboard</span>
          <span>Investigations</span>
          <span>Reports</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;