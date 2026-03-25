import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h2>⚡Vajra</h2>
        <div>
          <button style={styles.navBtn}>Login</button>
          <button style={styles.navBtnOutline}>Sign Up</button>
        </div>
      </nav>

      <div style={styles.hero}>
        <h1 style={styles.title}>
          Manage Projects <br /> Like a Pro 🚀
        </h1>

        <p style={styles.subtitle}>
          Organize teams, track tasks, and collaborate efficiently — all in one place.
        </p>

        <div style={styles.cta}>
          <Link to="/tech-form">
            <button style={styles.primaryBtn}>Get Started</button>
          </Link>

          <Link to="/profiles">
            <button style={styles.secondaryBtn}>Explore Developers</button>
          </Link>
        </div>
      </div>

      <div style={styles.features}>
        <div style={styles.card}>
          <h3>📊 Task Management</h3>
          <p>Create, assign, and track tasks easily.</p>
        </div>

        <div style={styles.card}>
          <h3>👥 Team Collaboration</h3>
          <p>Work together in real-time with your team.</p>
        </div>

        <div style={styles.card}>
          <h3>⚡ Fast & Scalable</h3>
          <p>Built with modern full-stack technologies.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    fontFamily: "sans-serif",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    alignItems: "center",
  },

  navBtn: {
    marginRight: "10px",
    padding: "8px 16px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },

  navBtnOutline: {
    padding: "8px 16px",
    border: "1px solid white",
    background: "transparent",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },

  hero: {
    textAlign: "center",
    marginTop: "80px",
  },

  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#cbd5f5",
  },

  cta: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  primaryBtn: {
    padding: "12px 22px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },

  secondaryBtn: {
    padding: "12px 22px",
    background: "transparent",
    border: "1px solid white",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "80px",
    padding: "0 20px",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
  },
};