import React from "react";

function Resume() {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f9ff 0%, #f8fafc 50%, #e0f2fe 100%)",
      paddingTop: "100px",
      color: "#1f2937",
      position: "relative",
      overflow: "hidden"
    },
    decorativeOrb: {
      position: "absolute",
      width: "600px",
      height: "600px",
      background: "radial-gradient(circle, rgba(59,130,246,0.12), transparent)",
      filter: "blur(100px)",
      top: "-30%",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 0
    },
    content: {
      position: "relative",
      zIndex: 1
    },
    header: {
      textAlign: "center",
      marginBottom: "40px"
    },
    hero: {
      textAlign: "center",
      marginBottom: "50px",
      position: "relative",
      padding: "0 20px"
    },
    title: {
      fontSize: "46px",
      fontWeight: "800",
      marginBottom: "16px",
      color: "#1e40af",
      letterSpacing: "-0.02em",
      textShadow: "0 2px 10px rgba(37,99,235,0.1)"
    },
    gradient: {
      background: "linear-gradient(135deg,#2563eb,#3b82f6)",
      WebkitBackgroundClip: "text",
      color: "transparent"
    },
    subtitle: {
      color: "#6b7280",
      maxWidth: "600px",
      margin: "0 auto 24px",
      lineHeight: "1.7",
      fontSize: "18px"
    },
    badges: {
      display: "flex",
      justifyContent: "center",
      gap: "14px",
      flexWrap: "wrap"
    },
    badge: {
      padding: "10px 18px",
      borderRadius: "24px",
      background: "rgba(255,255,255,0.9)",
      border: "1.5px solid #dbeafe",
      fontSize: "13px",
      color: "#2563eb",
      fontWeight: "600",
      boxShadow: "0 2px 10px rgba(37,99,235,0.08)"
    },
    glow: {
      position: "absolute",
      width: "600px",
      height: "600px",
      background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent)",
      filter: "blur(120px)",
      top: "-200px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 0
    },

    iframe: {
      width: "90%",
      maxWidth: "1200px",
      height: "85vh",
      border: "1.5px solid #dbeafe",
      borderRadius: "24px",
      margin: "0 auto",
      display: "block",
      boxShadow: `
      0 20px 60px rgba(37,99,235,0.12),
      0 0 40px rgba(59,130,246,0.08)
      `,
      overflow: "hidden",
      background: "white"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.decorativeOrb}></div>
      <div style={styles.content}>
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
    </div>
  );
}

export default Resume;