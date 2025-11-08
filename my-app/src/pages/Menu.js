import { Link } from "react-router-dom";

function Menu() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>What do you need today?</h2>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "2rem"
      }}>
        <button>Get a New ID</button>

        <Link to="/jobs">
          <button>Jobs</button>
        </Link>

        <button>Counseling</button>
        <button>Housing</button>
        <button>Transportation</button>
      </div>
    </div>
  );
}

export default Menu;
