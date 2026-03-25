import React from "react";

function Resume() {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(-45deg, #020617, #0f172a, #020617)",
      paddingTop: "80px",
      color: "white"
    },

    header: {
      textAlign: "center",
      marginBottom: "30px"
    },
    hero: {
      textAlign: "center",
      marginBottom: "40px",
      position: "relative"
    },
    title: {
      fontSize: "42px",
      fontWeight: "800",
      marginBottom: "10px"
    },
    gradient: {
      background: "linear-gradient(135deg,#3b82f6,#6366f1)",
      WebkitBackgroundClip: "text",
      color: "transparent"
    },
    subtitle: {
      color: "#94a3b8",
      maxWidth: "600px",
      margin: "0 auto 20px",
      lineHeight: "1.6"
    },
    badges: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap"
    },
    badge: {
      padding: "6px 14px",
      borderRadius: "20px",
      background: "rgba(99,102,241,0.15)",
      border: "1px solid rgba(99,102,241,0.3)",
      fontSize: "12px"
    },
    glow: {
      position: "absolute",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent)",
      filter: "blur(120px)",
      top: "-100px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 0
    },

    iframe: {
      width: "90%",
      height: "85vh",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px",
      margin: "0 auto",
      display: "block",
      boxShadow: `
      0 30px 100px rgba(0,0,0,0.9),
      0 0 40px rgba(99,102,241,0.2)
      `,
      overflow: "hidden"
    }
  };

  return (
    <div style={styles.container}>
      
     

      {/* 🔥 EMBEDDED BUILDER */}
      <div style={styles.hero}>
        <div style={styles.glow}></div>
        <h1 style={styles.title}>
          Build a <span style={styles.gradient}>Professional Resume</span>
        </h1>
        <p style={styles.subtitle}>
          Create ATS-friendly, modern resumes in minutes.  
          Stand out, get noticed, and land your dream job 
        </p>
        <div style={styles.badges}>
          <span style={styles.badge}>⚡ Fast</span>
          <span style={styles.badge}>🎯 ATS Optimized</span>
          <span style={styles.badge}>🎨 Modern Design</span>
        </div>
      </div>
      <iframe
        src="https://resugen-rg.netlify.app/"
        style={styles.iframe}
        title="Resume Builder"
      />

    </div>
  );
}

export default Resume;