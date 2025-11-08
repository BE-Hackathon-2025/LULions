import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome User</h1>
      <p>We're here to help you take your next steps.</p>

      <Link to="/menu">
        <button style={{ marginTop: "1rem", padding: "10px 20px" }}>
          Continue
        </button>
      </Link>
    </div>
  );
}

export default Welcome;