import { useState } from "react";

export default function TechForm() {
  const [form, setForm] = useState({
    name: "",
    tech: "",
    domain: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Data submitted!");
  };

  const styles = {
    container: {
      minHeight: "100vh",
      padding: "120px 20px 60px",
      background: "linear-gradient(135deg, #f0f9ff 0%, #f8fafc 50%, #e0f2fe 100%)",
      color: "#1f2937",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      overflow: "hidden"
    },
    decorativeOrb: {
      position: "absolute",
      width: "500px",
      height: "500px",
      background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent)",
      filter: "blur(80px)",
      top: "10%",
      left: "-10%",
      zIndex: 0
    },
    decorativeOrb2: {
      position: "absolute",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle, rgba(96,165,250,0.12), transparent)",
      filter: "blur(100px)",
      bottom: "10%",
      right: "-5%",
      zIndex: 0
    },
    content: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    title: {
      fontSize: "38px",
      fontWeight: "800",
      marginBottom: "40px",
      color: "#1e40af",
      textAlign: "center",
      textShadow: "0 2px 10px rgba(37,99,235,0.1)"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      maxWidth: "450px",
      background: "rgba(255,255,255,0.95)",
      padding: "44px",
      borderRadius: "24px",
      border: "1px solid #dbeafe",
      boxShadow: "0 10px 40px rgba(37,99,235,0.12), 0 2px 8px rgba(0,0,0,0.04)"
    },
    input: {
      padding: "16px 20px",
      borderRadius: "14px",
      border: "1.5px solid #dbeafe",
      background: "#fafafa",
      color: "#1f2937",
      fontSize: "15px",
      outline: "none",
      transition: "0.3s",
      width: "100%",
      boxSizing: "border-box"
    },
    button: {
      padding: "16px 32px",
      background: "linear-gradient(135deg, #2563eb, #3b82f6)",
      border: "none",
      borderRadius: "14px",
      color: "white",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
      transition: "0.3s",
      marginTop: "10px"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.decorativeOrb} />
      <div style={styles.decorativeOrb2} />
      <div style={styles.content}>
        <h2 style={styles.title}>Enter Your Details</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            placeholder="Name"
            style={styles.input}
            onChange={handleChange}
          />

          <input
            name="tech"
            placeholder="Tech Stack"
            style={styles.input}
            onChange={handleChange}
          />

          <input
            name="domain"
            placeholder="Domain"
            style={styles.input}
            onChange={handleChange}
          />

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}