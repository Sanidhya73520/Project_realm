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
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/connect" style={styles.link}>Connect</Link>
          <Link to="/news" style={styles.link}>News</Link>
          <Link to="/resume" style={styles.link}>Resume Builder</Link>
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
    width: "85%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    borderRadius: "16px",

    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(14px)",

    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",

    zIndex: 1000
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer"
  },

  logoImg: {
    width: "52px",
    height: "52px",
    objectFit: "contain",
    animation: "floatLogo 4s ease-in-out infinite",
    transition: "0.3s"
  },

  logoText: {
    fontWeight: "700",
    fontSize: "22px",
    letterSpacing: "0.6px"
  },

  links: {
    display: "flex",
    gap: "30px",
    alignItems:"center"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  lang: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    padding: "6px 10px",
    borderRadius: "8px",
    outline: "none",
    cursor: "pointer"
  },

  login: {
    padding: "8px 16px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "transparent",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s"
  },

  register: {
    padding: "8px 18px",
    border: "none",
    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(99,102,241,0.5)",
    transition: "0.3s"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    fontSize:"16px",
    padding:"6px 0",
    display:"inline-block",
    transition: "0.3s",
    cursor: "pointer"
  },
  navItem: {
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.3s",
    position: "relative"
  }
};