import React, { useEffect, useState } from "react";
import axios from "axios";
import { transform } from "framer-motion";
import { motion } from "framer-motion";

function Connect() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("profiles")) || []; 
    setProfiles(stored);
  }, []);
  const fetchProfiles = async () => {
    try {
      const res = await axios.get("http://localhost:5001/profiles");
      setProfiles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredProfiles = profiles.filter((p) =>
    (p.domain || "").toLowerCase().includes(search.toLowerCase())
  );

  const styles = {
    container: {
      minHeight: "100vh",
      padding: "100px 10%",
      background: "radial-gradient(circle at top, #0f172a, #020617)",
      color: "white"
    },
    title: {
      fontSize: "42px",
      fontWeight: "800",
      marginBottom: "30px",
      textAlign: "center"
    },
    searchBox: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "50px"
    },
    input: {
      padding: "14px 18px",
      width: "320px",
      borderRadius: "10px",
      border: "1px solid #1e293b",
      background: "#020617",
      color: "white",
      outline: "none"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "30px"
    },
    card: {
      background: "rgba(15,23,42,0.7)",
      backdropFilter: "blur(14px)",
      borderRadius: "18px",
      padding: "20px",
      border: "1px solid rgba(255,255,255,0.08)",

      display: "flex",
      flexDirection: "column",

      height: "340px",   // 🔥 FIXED HEIGHT

      transition: "0.3s",
      position: "relative",
      overflow: "hidden",

      boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
      cursor: "pointer"
    },
    cardTop: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "15px"
    },
    avatarRing: {
      padding: "3px",
      borderRadius: "50%",
      background: "linear-gradient(135deg,#3b82f6,#6366f1)"
    },
    avatar: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: "#020617",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700"
    },
    bio: {
      fontSize: "13px",
      color: "#94a3b8",
      lineHeight:"1.5"
    },

    name: {
      fontSize: "18px",
      fontWeight: "600"
    },
    domain: {
      fontSize: "13px",
      color: "#94a3b8"
    },
    skills: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "15px",
      minHeight:"32px"
    },
    contactRow: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      marginBottom: "12px"
    },
    contactItem: {
      fontSize: "12px",
      color: "#cbd5f5"
    },
    skillTag: {
      background: "rgba(99,102,241,0.15)",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      border: "1px solid rgba(99,102,241,0.3)",
      transition:"0.3s"
    },
    connectBtn: {
      width: "100%",
      padding: "10px",
      borderRadius: "10px",
      border: "none",
      background: "linear-gradient(135deg,#3b82f6,#6366f1)",
      color: "white",
      cursor: "pointer"
    },
    status: {
      position: "absolute",
      top: "15px",
      right: "15px",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#22c55e",
      boxShadow: "0 0 10px #22c55e"
    },
    bioBox: {
      minHeight: "70px",
      marginBottom:"12px"
    },
    contactBox: {
      
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      marginBottom:"12px"
    },
    skillsBox: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom:"12px"
    },
    buttonWrapper: {
      marginTop: "auto"
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Connect with Developers</h1>
      {/* SEARCH */}
      <div style={styles.searchBox}>
        <input placeholder="Search by domain (frontend, AI, backend...)" style={styles.input} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      {/* GRID */}
      <div style={styles.grid}>
        {filteredProfiles.map((p, index) => (
          <div key={index} style={styles.card} className="connect-card">
            {/* STATUS DOT */}
            <div style={styles.status}></div>
            {/* TOP */}
            <div style={styles.cardTop}>
              <div style={styles.avatarRing}>
                <div style={styles.avatar}>
                  {p.name?.charAt(0).toUpperCase()}
                </div>
              </div>
              <div>
                <h3 style={styles.name}>{p.name}</h3>
                <p style={styles.domain}>{p.domain}</p>
              </div>
            </div>
            {/* BIO */}
            <div style={styles.bioBox}>
              <p style={styles.bio}>
                {p.bio || "No bio provided"}
              </p>
            </div>
            {/* CONTACT */}
            <div style={styles.contactBox}>
              <span style={styles.contactItem}>
                📧 {p.email || "-"}
              </span>
              <span style={styles.contactItem}>
                📱 {p.phone || "-"}
              </span>
            </div>
            {/* SKILLS */}
            <div style={styles.skillsBox}>
              {(p.skills || "")
              .split(",")
              .slice(0, 3)
              .map((skill, i) => (
              <span key={i} style={styles.skillTag}>
                {skill.trim()}
              </span>
            ))}
            </div>
            {/* BUTTON */}
            <motion.button
            style={styles.connectBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (!p.email) {
                alert("No email available");
                return;
              }
              const subject = encodeURIComponent("Let's Connect 🚀");
              const body = encodeURIComponent(
                `Hi ${p.name},\n\nI saw your profile on Realm and would love to connect with you!\n\nBest regards`
              );
              const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${p.email}&su=${subject}&body=${body}`;
              window.open(gmailURL, "_blank");
            }}
            >
              Connect
            </motion.button>
            
          </div>
        ))}
      </div>
    </div>
  );
  
} 
export default Connect;