import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import {
  FiShield,
  FiUser,
  FiUsers,
  FiMessageSquare,
  FiGrid,
  FiCalendar,
  FiFileText,
  FiZap,
  FiLayers
} from "react-icons/fi";

export default function Home() {
  const newsHighlights = [
    {
      title: "AI is transforming dev workflows",
      desc: "AI tools are reshaping how developers build apps faster.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    {
      title: "React ecosystem evolving fast",
      desc: "New frameworks & tools are pushing React forward.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
    },
    {
      title: "Startups shifting to AI-first",
      desc: "AI-first startups are dominating innovation space.",
      image: "https://images.unsplash.com/photo-1674027392884-751cb1f0cb6b"
    }
  ];
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    skills: "",
    email:"",
    phone:"",
    bio:""
  });
  const handleCreateProfile = () => {
    if (
      !formData.name ||
      !formData.domain ||
      !formData.skills ||
      !formData.email ||
      !formData.phone ||
      !formData.bio
    ) {
      alert("⚠️ Please fill all fields");
      return;
  }
    const existing = JSON.parse(localStorage.getItem("profiles")) || [];
    const updatedProfiles = [...existing, formData];
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    // 🔥 ADD THIS HERE
    setShowToast(true);
    setTimeout(() => {
      window.location.href = "/connect";
    }, 1500);
  };
  const [showToast, setShowToast] = useState(false);
  /* FEATURES DATA */
      const features = [
        {
          icon: <FiShield />,
          title: "Authentication",
          desc: "Secure login & roles",
          image: "https://images.unsplash.com/photo-1633265486064-086b219458ec"
        },
        {
          icon: <FiUser />,
          title: "Profiles",
          desc: "Build your identity",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        },
        {
          icon: <FiUsers />,
          title: "Networking",
          desc: "Find developers",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        },
        {
          icon: <FiMessageSquare />,
          title: "Chat",
          desc: "Real-time messaging",
          image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
        },
        {
          icon: <FiGrid />,
          title: "Projects",
          desc: "Manage workflows",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        },
        {
          icon: <FiCalendar />,
          title: "Productivity",
          desc: "Tasks & reminders",
          image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
        },
        {
          icon: <FiFileText />,
          title: "Resume Builder",
          desc: "Create resumes",
          image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4"
        },
        {
          icon: <FiZap />,
          title: "AI Assistant",
          desc: "Smart suggestions",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
        }
      ];
  useEffect(() => {
    if (window.location.hash === "#features") {
      const el = document.getElementById("features");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  
    return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.imageGlow}></div>
        <div style={styles.orb}></div>
        <div style={styles.glow}></div>
        <div style={styles.light}></div>
        {/* LEFT */}
        <motion.div
          style={styles.left}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={styles.title}>
            Manage Projects <br />
            <span className="gradient-text">Without Chaos</span> 
          </h1>

          <p style={styles.subtitle}>
            A modern platform to manage projects, connect with developers,
            stay updated with tech news, and build resumes — all in one place.
          </p>

          <div style={styles.actions}>
            <button style={styles.primary} onClick={() =>window.location.href = "https://project-management-kiit.vercel.app"}>
              Get Started
            </button>
            {/* <button style={styles.secondary}>Explore</button> */}
          </div>
        </motion.div>
        {/* RIGHT IMAGE */}
        <motion.div style={styles.right}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        >
          <motion.div
          whileHover={{ scale: 1.06, rotate: 1.5 }}
          transition={{ duration: 0.3 }}
          style={{ position: "relative", zIndex: 2 }}
          >
            <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="coding system"
            style={styles.image}
            />
          </motion.div>
        </motion.div>
      </section>
      
      <motion.section
      id="features"
      style={styles.features}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 style={styles.sectionTitle}>Everything You Need. One Platform.</h2>
        <div style={styles.grid}>
          {/* 🔥 BIG FEATURE CARD */}
          <motion.div
          style={{ ...styles.cardWrapper, ...styles.bigCard }}
          whileHover={{
            scale: 1.03,
            rotateX: 4,
            rotateY: -4,
            boxShadow: "0 30px 80px rgba(99,102,241,0.4)"
          }}
          transition={{ type: "spring", stiffness: 120 }}
          >
            {/* 🔥 BLUR BACKGROUND */}
            <motion.div
            style={styles.bgImage}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6 }}
            >
            </motion.div>
            <div style={styles.overlay}></div>
            {/* CONTENT */}
            <div style={styles.cardContent}>
              <div style={styles.iconBox}> <FiLayers /></div>
              <h2>All-in-One Developer Platform</h2>
              <p>
                Manage projects, connect with developers, chat, build resumes,
                and boost productivity — all in one ecosystem.
              </p>
            </div>
          </motion.div>
          {/* 🔹 SMALL CARDS */}
          {features.map((item, i) => (
            <motion.div
            key={i}
            style={styles.cardWrapperSmall}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 60px rgba(99,102,241,0.4)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
            >
              {/* 🔥 BACKGROUND IMAGE */}
              <motion.div
              style={{
                ...styles.bgImageSmall,
                backgroundImage: `url(${item.image})`
              }}
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.5 }}
              ></motion.div>
              <div style={styles.overlaySmall}></div>
              {/* CONTENT */}
              <div style={styles.cardContent}>
                <div style={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* CONNECT */}
      <motion.section
      style={styles.connect}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      >
        <div style={styles.connectWrapper}>
          
          {/* LEFT → FORM */}
          <motion.div style={styles.formCard} whileHover={{ scale: 1.02 }}>
            <h2 style={styles.formTitle}>Create Your Profile</h2>
            <input placeholder="Your Name" style={styles.input} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
            <input placeholder="Domain (e.g Web Dev)" style={styles.input} onChange={(e) => setFormData({ ...formData, domain: e.target.value })  }/>
            <input placeholder="Skills (React,AI,...)" style={styles.input} onChange={(e) => setFormData({ ...formData, skills: e.target.value })}/>
            <input placeholder="Email" style={styles.input} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            <input placeholder="Phone" style={styles.input} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
            <textarea placeholder="Short Bio (2 lines about you)" style={styles.textarea} rows={3} onChange={(e) => setFormData({ ...formData, bio: e.target.value })}/>
            <motion.button
            style={styles.primary}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleCreateProfile}
            >
              Create Profile
            </motion.button>
            
          </motion.div>
            <div style={styles.connector}></div>
            {/* RIGHT → DESCRIPTION */}
            <motion.div
            style={styles.connectVisual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03,rotateY:6,rotateX:-4 }}
            transition={{ type: "spring", stiffness: 120 }}
            >
              {/* BACKGROUND IMAGE */}
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="developer" style={styles.connectImage}/>
              {/* GRADIENT OVERLAY */}
              <div style={styles.overlay}></div>
              {/* LIGHT SWEEP EFFECT */}
              <div style={styles.lightSweep}></div>
              {/* MAIN TEXT */}
              <div style={styles.visualContent}>
                <h2 style={styles.visualTitle}>Build Your Developer Identity</h2>
                <p style={styles.visualDesc}> Create a powerful profile and get discovered globally.</p>
              </div>
              {/* FLOATING CARDS */}
              <motion.div style={styles.floatingCards}>{[
                { text: "Discover", color: "#6366f1" },
                { text: "Connect", color: "#3b82f6" },
                { text: "Network", color: "#22c55e" }
              ].map((item, i) => (
              <motion.div
              key={i}
              style={{
                ...styles.miniCard,
                borderLeft: `3px solid ${item.color}`
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity }}
              whileHover={{ scale: 1.08 }}
              >
                <span style={styles.dot}></span>
                {item.text}
              </motion.div>
              ))}
              </motion.div>
          </motion.div>
        </div>
      </motion.section>


      {/* RESUME */}
      <motion.section
      style={styles.resumeWrapper}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      >
        {/* LEFT */}
        <div style={styles.resumeLeft}>
          <h1 style={styles.resumeTitle}>
            Build <span style={styles.gradient}>ATS-Ready</span> Resumes
          </h1>
          <p style={styles.resumeDesc}>
            Create professional resumes that stand out. Designed for developers with
            modern templates, real-time preview, and ATS optimization.
          </p>
          <div style={styles.featureGrid}>
            {[
              { title: "ATS Optimized", desc: "Pass screening systems" },
              { title: "Live Preview", desc: "Instant changes" },
              { title: "Modern Templates", desc: "Clean designs" },
              { title: "One-Click Export", desc: "Download PDF" }
            ].map((f, i) => (
            <motion.div
            key={i}
            style={styles.featureCard}
            whileHover={{
              scale: 1.05,
              background:
              "linear-gradient(145deg, rgba(99,102,241,0.25), rgba(59,130,246,0.15))"
            }}
            >
              <h3>{f.title}</h3>
              <p style={{ color: "#94a3b8" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
        style={styles.primary}
        whileHover={{ scale: 1.08 }}
        onClick={() => (window.location.href = "/resume")}
        >
          Go to Resume Builder →
        </motion.button>
        </div>
        {/* RIGHT IMAGE */}
        <motion.div
        style={styles.resumeRight}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        >
          <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4" alt="resume preview" style={styles.resumeImage}/>
        </motion.div>
      </motion.section>
      <section style={styles.newsSection}>
        <motion.h2
        style={styles.dynamicTitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
          🚀 <span style={styles.gradientText}>Trending Tech</span> Right Now
        </motion.h2>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        >
        {newsHighlights.map((item, i) => (
          <SwiperSlide key={i}>
            <div style={styles.newsCard}>
              <img src={item.image} style={styles.newsImage} />
              <div style={styles.overlay}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button
                style={styles.primary}
                onClick={() => (window.location.href = "/news")}
                >
                  Explore News →
                </button>
              </div>
            </div>
         </SwiperSlide>
        ))}
        </Swiper>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <h4>Get to Know Us</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div>
            <h4>Connect with Us</h4>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
          <div>
            <h4>Make with Realm</h4>
            <p>Build Projects</p>
            <p>Developer Tools</p>
            <p>AI Assistant</p>
            <p>Resume Builder</p>
          </div>
          <div>
            <h4>Let Us Help You</h4>
            <p>Your Account</p>
            <p>Support</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </div>
        {/* 🔥 BOTTOM BAR */}
        <div style={styles.footerBottomBar}>
          <h2 style={{ margin: 0 }}>Realm</h2>
          <div style={styles.footerControls}>
            <select style={styles.select}>
              <option>English</option>
              <option>Hindi</option>
            </select>
            <select style={styles.select}>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>
        </div>
        <p style={styles.copy}>© 2026 Realm. All rights reserved.</p>
      </footer>

    </div>
  );
}

const styles = {
  newsSection: {
    padding: "100px 0",
    textAlign: "center",
    maxWidth: "850px",   // 🔥 controls width
    margin: "0 auto",
    position:"relative"    // 🔥 centers it
  },
  page: {
    paddingTop:"80px",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
    color: "white",
    background: "linear-gradient(-45deg, #020617, #0f172a, #020617)",
    backgroundSize: "400% 400%",
    animation: "gradientMove 12s ease infinite"
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 10% 40px",
    minHeight: "70vh",
    gap: "40px",
    position: "relative",
    overflow:"hidden"
  },
  orb: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent)",
    top: "20%",
    left: "30%",
    filter: "blur(120px)",
    zIndex: 0
  },

  glow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "rgba(59,130,246,0.2)",
    filter: "blur(120px)",
    top: "100px",
    right: "10%"
  },

  light: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "rgba(99,102,241,0.15)",
    filter: "blur(150px)",
    top: "50px",
    left: "30%"
  },

  left: {
    flex:1,
    maxWidth: "520px",
    zIndex: 2
  },

  title: {
    fontSize: "52px",
    fontWeight: "800",
    marginBottom: "12px",
    lineHeight:"1.1"
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "30px"
  },

  actions: {
    display: "flex",
    gap: "15px"
  },

  primary: {
    padding: "12px 28px",
    background: "linear-gradient(135deg,#4f46e5,#6366f1)",
    borderRadius: "10px",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 10px 30px rgba(99,102,241,0.5)",
    transition: "all 0.3s ease"
  },

  secondary: {
    padding: "12px 26px",
    border: "1px solid #334155",
    background: "transparent",
    borderRadius: "10px",
    color: "white"
  },

  right: {
    flex: 1.2,
    display: "flex",
    justifyContent: "center"
  },

  image: {
    width: "600px",
    
    borderRadius: "20px",

  /* 🔥 KEY FIXES */
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(10px)",

    border: "1px solid rgba(255,255,255,0.08)",

    boxShadow: `
    0 40px 120px rgba(0,0,0,0.9),
    0 0 60px rgba(99,102,241,0.25)
    `,

    transition: "0.4s"
  },
  imageGlow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(99,102,241,0.3), transparent)",
    filter: "blur(120px)",
    top: "50%",
    right: "5%",
    transform: "translateY(-50%)",
    zIndex: 0
  },

  features: {
    padding: "120px 10%",
    textAlign: "center"
  },

  sectionTitle: {
    fontSize: "32px",
    fontWeight:"700",
    marginBottom: "50px",
    textAlign:"center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
    alignItems:"stretch",
    gridAutoFlow:"dense"
  },
  bigCard: {
    gridColumn: "span 2",
    gridRow: "span 2",
    padding: "40px"
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "30px",
    marginTop: "40px"
  },

  card: {
    background: "rgba(15, 23, 42, 0.7)",
    backdropFilter: "blur(12px)",
    padding: "25px",
    borderRadius: "18px",
    // width: "260px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: `
    0 10px 40px rgba(0,0,0,0.5),
    0 0 30px rgba(99,102,241,0.15)
    `,
    transform: "scale(1.03)",   // 👈 always slightly zoomed
    transition: "0.3s",
    animation: "cardGlow 3s ease-in-out infinite",
    curse:"pointer"
  },
  iconBox: {
    width: "58px",
    height: "58px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize:"24px",
    
    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
    marginBottom: "20px",
    boxShadow: "0 20px 50px rgba(99,102,241,0.6)"
  },
  iconDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#6366f1",
    marginBottom: "15px"
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "6px",
    textAlign:"center"
  },
  cardDesc: {
    color: "#94a3b8",
    fontSize: "14px",
    textAlign:"center"
  },

  icon: {
    width: "48px",
    height: "48px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
    fontSize: "22px",

    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
    boxShadow: "0 10px 30px rgba(99,102,241,0.5)"
  },

  connect: {
    padding: "120px 10%",
    textAlign: "center",
    borderTop: "1px solid #1e293b"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "400px",
    margin: "30px auto"
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#020617",
    color: "white"
  },

  news: {
    padding: "120px 10%",
    textAlign: "center",
    borderTop: "1px solid #1e293b"
  },

  resume: {
    padding: "120px 10%",
    textAlign: "center",
    borderTop: "1px solid #1e293b"
  },

  footer: {
    padding: "40px",
    textAlign: "center",
    borderTop: "1px solid #1e293b",
    marginTop: "50px",
    color: "#94a3b8"
  },
  connect: {
    padding: "140px 10%",
    borderTop: "1px solid #1e293b"
  },
  connectWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "40px", // 🔥 reduced from 60 → 30
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "0 auto"
  },
  formCard: {
    flex: 1,
    height:"440px",
    minWidth: "320px",
    maxWidth: "420px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "28px",
    justifyContent:"center",

    borderRadius: "20px",
    background: "rgba(15, 23, 42, 0.65)",
    backdropFilter: "blur(16px)",

    border: "1px solid rgba(255,255,255,0.08)",

    boxShadow: `
    0 20px 60px rgba(0,0,0,0.7),
    0 0 40px rgba(99,102,241,0.15)
    `
  },
  formTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    textAlign: "center"
  },
  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#020617",
    color: "white",
    outline: "none",
    transition: "0.3s"
  },
  connectText: {
    flex: 1,
    minWidth: "280px",
    maxWidth: "460px",
    position:"relative"
  },
  connectHeading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "16px",
    lineHeight:"1.2"
  },
  connectDesc: {
    color: "#94a3b8",
    marginBottom: "18px",
    lineHeight: "1.6"
  },
  connectList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  connectItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "15px",
    color: "#cbd5f5"
  },

  bullet: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
    boxShadow: "0 0 10px rgba(99,102,241,0.7)"
  },
  connector: {
    width: "2px",
    height: "180px",
    background: "linear-gradient(to bottom, transparent, #6366f1, transparent)",
    opacity: 0.5
  },
  glowBg: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent)",
    filter: "blur(100px)",
    top: "-50px",
    right: "-50px",
    zIndex: 0
  },
  connectText: {
    flex: 1,
    position: "relative",
    zIndex: 2
  },
  connectHeading: {
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "16px"
  },
  previewCard: {
    marginTop: "25px",
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(15,23,42,0.7)",
    border: "1px solid rgba(255,255,255,0.08)",
    textAlign: "center",
    backdropFilter: "blur(10px)"
  },
  avatarPreview: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px",
    fontSize: "22px",
    fontWeight: "bold"
  },
  tagPreview: {
    marginTop: "10px",
    padding: "6px 12px",
    borderRadius: "20px",
    background: "#1e40af",
    display: "inline-block",
    fontSize: "12px"
  },
  connectVisual: {
    flex: 1,
    position: "relative",
    borderRadius: "24px",
    overflow: "hidden",
    height: "440px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
    transition:"0.4s"
  },
  connectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter:"brightness(0.8) contrast(1.15) saturate(1.1)"
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(2,6,23,0.95), rgba(2,6,23,0.3))"
  },
  lightSweep: {
    position: "absolute",
    top: 0,
    left: "-50%",
    width: "50%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent)",
    transform: "skewX(-20deg)",
    animation: "sweep 6s infinite"
  },
  visualContent: {
    position: "absolute",
    bottom: "30px",
    left: "30px",
    zIndex: 2
  },

  visualTitle: {
    fontSize: "30px",
    fontWeight: "800",
    marginBottom: "10px",
    letterspacing:"0.5px"
  },
  visualDesc: {
    color: "#94a3b8",
    maxWidth: "320px",
    fontSize:"14px"
  },
  floatingCards: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex:2
  },
  miniCard: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(14px)",
    padding: "10px 16px",
    borderRadius: "12px",
    fontSize: "13px",
    color: "white",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow:"0 10px 30px rgba(0,0,0,0.5)",
    curse:"pointer"
  },
  lightSweep: {
    position: "absolute",
    top: 0,
    left: "-50%",
    width: "50%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent)",
    transform: "skewX(-20deg)",
    animation: "sweep 6s infinite"
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#6366f1",
    marginRight: "8px",
    display: "inline-block"
  },
  textarea: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#020617",
    color: "white",
    outline: "none",
    resize: "none",              // 🔥 prevents ugly resize
    minHeight: "48px",           // same base feel as inputs
    fontFamily: "inherit",
    transition: "0.3s"
  },
  resumeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    marginTop: "40px"
  },
  resumeCard: {
    padding: "25px",
    borderRadius: "16px",
    background: "rgba(15,23,42,0.6)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
    textAlign: "left"
  },
  resumeWrapper: {
    display: "flex",
    gap: "60px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "120px 10%",
    flexWrap: "wrap",
    position: "relative"
  },
  resumeLeft: {
    flex: 1,
    minWidth: "320px"
  },
  resumeRight: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    position: "relative"
  },
  resumeTitle: {
    fontSize: "42px",
    fontWeight: "800",
    marginBottom: "10px"
  },
  gradient: {
    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  },
  resumeDesc: {
    color: "#94a3b8",
    marginBottom: "30px",
    maxWidth: "500px"
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "20px",
    marginBottom: "30px"
  },
  featureCard: {
    padding: "18px",
    borderRadius: "16px",
    background: "rgba(15,23,42,0.6)",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "0.3s",
    backdropFilter: "blur(10px)"
  },

  resumeImage: {
    width: "380px",
    borderRadius: "20px",
    boxShadow: `
    0 30px 80px rgba(0,0,0,0.8),
    0 0 50px rgba(99,102,241,0.3)
    `,
    animation: "float 6s ease-in-out infinite"
  },
  resumeRightGlow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(99,102,241,0.3), transparent)",
    filter: "blur(120px)",
    zIndex: 0
  },
  newsSection: {
    padding: "100px 8%",
    textAlign: "center"
  },
  newsCard: {
    position: "relative",
    borderRadius: "24px",
    overflow: "hidden",
    height: "450px",
    boxShadow: "0 40px 120px rgba(0,0,0,0.8)"
  },
  newsImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "30px",
    background:
    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
    color: "white",
    textAlign: "left"
  },
  bigCardVisual: {
    marginTop: "25px",
    height: "120px",
    borderRadius: "14px",
    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
    opacity: 0.15,
    filter: "blur(20px)"
  },
  cardWrapper: {
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  padding: "40px",
  border: "1px solid rgba(255,255,255,0.08)",
  cursor:"pointer"
  },
  bgImage: {
    position: "absolute",
    inset: 0,
    backgroundImage:
    "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(0px) brightness(0.9)",
    transform: "scale(1.1)",
    zIndex: 0
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
    "linear-gradient(to bottom, rgba(2,6,23,0.5), rgba(2,6,23,0.7))",
    zIndex: 1
  },
  cardContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center"
  },
  cardWrapperSmall: {
    position: "relative",
    borderRadius: "18px",
    overflow: "hidden",
    padding: "25px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(15,23,42,0.6)",
    cursor:"pointer",
    minHeight:"180px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"
  },
  bgImageSmall: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(0px) brightness(0.9)",
    transform: "scale(1.1)",
    zIndex: 0
  },
  overlaySmall: {
    position: "absolute",
    inset: 0,
    background:
    "linear-gradient(to bottom, rgba(2,6,23,0.6), rgba(2,6,23,0.85))",
    zIndex: 1
  },
  footer: {
    background: "#0f172a",
    padding: "60px 10% 30px",
    borderTop: "1px solid #1e293b"
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "40px",
    marginBottom: "40px"
  },
  footerBottomBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #1e293b",
    paddingTop: "20px",
    marginTop: "20px"
  },
  footerControls: {
    display: "flex",
    gap: "15px"
  },
  select: {
    padding: "8px 14px",
    borderRadius: "6px",
    background: "#020617",
    color: "white",
    border: "1px solid #334155",
    cursor: "pointer"
  },
  copy: {
    textAlign: "center",
    marginTop: "20px",
    color: "#64748b",
    fontSize: "13px"
  }

};