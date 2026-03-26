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
      padding: "120px 10% 60px",
      background: "linear-gradient(135deg, #f0f9ff 0%, #f8fafc 50%, #e0f2fe 100%)",
      color: "#1f2937",
      position: "relative",
      overflow: "hidden"
    },
    decorativeOrb: {
      position: "absolute",
      width: "500px",
      height: "500px",
      background: "radial-gradient(circle, rgba(59,130,246,0.12), transparent)",
      filter: "blur(80px)",
      top: "-10%",
      right: "-5%",
      zIndex: 0
    },
    decorativeOrb2: {
      position: "absolute",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle, rgba(96,165,250,0.1), transparent)",
      filter: "blur(100px)",
      bottom: "10%",
      left: "-5%",
      zIndex: 0
    },
    content: {
      position: "relative",
      zIndex: 1
    },
    title: {
      fontSize: "46px",
      fontWeight: "800",
      marginBottom: "40px",
      textAlign: "center",
      color: "#1e40af",
      letterSpacing: "-0.02em",
      textShadow: "0 2px 10px rgba(37,99,235,0.1)"
    },
    searchBox: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "50px"
    },
    input: {
      padding: "18px 28px",
      width: "420px",
      borderRadius: "16px",
      border: "1.5px solid #dbeafe",
      background: "rgba(255,255,255,0.9)",
      color: "#1f2937",
      outline: "none",
      fontSize: "15px",
      boxShadow: "0 4px 20px rgba(37,99,235,0.1), 0 0 0 1px rgba(37,99,235,0.05)",
      transition: "0.3s"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "30px",
      maxWidth: "1300px",
      margin: "0 auto"
    },
    card: {
      background: "rgba(255,255,255,0.95)",
      borderRadius: "22px",
      padding: "28px",
      border: "1px solid #dbeafe",
      display: "flex",
      flexDirection: "column",
      height: "380px",
      transition: "0.3s",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 8px 30px rgba(37,99,235,0.08), 0 2px 8px rgba(0,0,0,0.04)",
      cursor: "pointer"
    },
    cardTop: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "18px"
    },
    avatarRing: {
      padding: "3px",
      borderRadius: "50%",
      background: "linear-gradient(135deg,#2563eb,#3b82f6)"
    },
    avatar: {
      width: "52px",
      height: "52px",
      borderRadius: "50%",
      background: "#f1f5f9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700",
      fontSize: "20px",
      color: "#2563eb"
    },
    bio: {
      fontSize: "14px",
      color: "#6b7280",
      lineHeight: "1.6"
    },

    name: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#111827"
    },
    domain: {
      fontSize: "14px",
      color: "#6b7280",
      fontWeight: "500"
    },
    skills: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "15px",
      minHeight: "36px"
    },
    contactRow: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      marginBottom: "14px"
    },
    contactItem: {
      fontSize: "13px",
      color: "#6b7280"
    },
    skillTag: {
      background: "#eff6ff",
      padding: "6px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      border: "1px solid #dbeafe",
      color: "#2563eb",
      fontWeight: "500",
      transition: "0.3s"
    },
    connectBtn: {
      width: "100%",
      padding: "12px",
      borderRadius: "12px",
      border: "none",
      background: "linear-gradient(135deg,#2563eb,#3b82f6)",
      color: "white",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "15px",
      boxShadow: "0 4px 15px rgba(37,99,235,0.3)",
      transition: "0.3s"
    },
    status: {
      position: "absolute",
      top: "18px",
      right: "18px",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#22c55e",
      boxShadow: "0 0 10px rgba(34,197,94,0.5)"
    },
    bioBox: {
      minHeight: "70px",
      marginBottom: "14px"
    },
    contactBox: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      marginBottom: "14px"
    },
    skillsBox: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "16px"
    },
    buttonWrapper: {
      marginTop: "auto"
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.decorativeOrb}></div>
      <div style={styles.decorativeOrb2}></div>
      <div style={styles.content}>
        <motion.h1 
          style={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >Connect with Developers</motion.h1>
        {/* SEARCH */}
        <motion.div 
          style={styles.searchBox}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input placeholder="Search by domain (frontend, AI, backend...)" style={styles.input} onChange={(e) => setSearch(e.target.value)}/>
        </motion.div>
        {/* GRID */}
        <div style={styles.grid}>
          {filteredProfiles.map((p, index) => (
            <motion.div 
              key={index} 
              style={styles.card} 
              className="connect-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                boxShadow: "0 20px 50px rgba(37,99,235,0.15)"
              }}
            >
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
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(37,99,235,0.4)"
            }}
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
            
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
  
} 
export default Connect;