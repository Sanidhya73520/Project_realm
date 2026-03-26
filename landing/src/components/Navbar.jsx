import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";




export default function Navbar() {
  const [lang, setLang] = useState("EN");
  


  return (
    <div style={styles.nav}>
      
      {/* 🔥 LOGO */}
      <div style={styles.logoContainer} className="logoContainer">
        <img src={logo} alt="Realm" style={styles.logoImg} />
        <span style={styles.logoText}>Realm</span>
      </div>

      {/* 🔗 LINKS */}
      <div style={styles.links}>
        <div style={styles.links}>
          <Link to="/" className="nav-link" style={styles.link}>Home</Link>
          
         
          
          <Link
          to="/#features"
          className="nav-link"
          style={styles.link}
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          >
            Features
          </Link>
          <Link to="/connect" className="nav-link" style={styles.link}>Connect</Link>
          <Link to="/resume" className="nav-link" style={styles.link}>Resume Builder</Link>
           <Link to="/news" className="nav-link" style={styles.link}>News</Link>
        </div>
      </div>

      {/* 👉 RIGHT SIDE */}
      <div style={styles.right}>
        
        {/* 🌐 LANGUAGE
        
        <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          localStorage.setItem("lang", e.target.value);
        }}
        style={styles.select}
        >
          <option>English</option>
          <option>Hindi</option>
        </select> */}

        {/* 🔐 LOGIN */}
        <button style={styles.register} onClick={() =>window.location.href = "https://project-management-kiit.vercel.app"}>
          Login / Register
        </button>

        {/* 🚀 REGISTER
        <button style={styles.register} onClick={() =>window.location.href = "https://project-management-kiit.vercel.app"}>
          Register
        </button> */}
      </div>

    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    width: "92%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.6)",
    boxShadow: "0 8px 32px rgba(59, 130, 246, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)",
    zIndex: 1000
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    cursor: "pointer"
  },

  logoImg: {
    width: "48px",
    height: "48px",
    objectFit: "contain",
    animation: "floatLogo 4s ease-in-out infinite",
    transition: "0.3s",
    filter: "drop-shadow(0 4px 8px rgba(37, 99, 235, 0.2))"
  },

  logoText: {
    fontWeight: "800",
    fontSize: "26px",
    letterSpacing: "-0.5px",
    color: "#1e40af",
    textShadow: "0 2px 4px rgba(37, 99, 235, 0.1)"
  },

  links: {
    display: "flex",
    gap: "36px",
    alignItems: "center"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "16px"
  },

  link: {
    textDecoration: "none",
    color: "#475569",
    fontWeight: "500",
    fontSize: "15px",
    padding: "8px 4px",
    display: "inline-block",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative"
  },

  login: {
    padding: "10px 22px",
    border: "1.5px solid #e2e8f0",
    background: "rgba(255,255,255,0.8)",
    color: "#475569",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "500",
    fontSize: "14px"
  },

  register: {
    padding: "12px 26px",
    border: "none",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(37, 99, 235, 0.1)",
    transition: "0.3s",
    fontWeight: "600",
    fontSize: "14px"
  },

  navItem: {
    color: "#475569",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.3s",
    position: "relative"
  }
};