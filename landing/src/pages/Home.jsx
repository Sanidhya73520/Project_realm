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
  FiLayers,
  FiCheckCircle,
  FiStar
} from "react-icons/fi";

export default function Home() {
  const newsHighlights = [
    {
      title: "AI is transforming dev workflows",
      desc: "AI tools are reshaping how developers build apps faster.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80"
    },
    {
      title: "React ecosystem evolving fast",
      desc: "New frameworks & tools are pushing React forward.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80"
    },
    {
      title: "Startups shifting to AI-first",
      desc: "AI-first startups are dominating innovation space.",
      image: "https://images.unsplash.com/photo-1674027392884-751cb1f0cb6b?w=1200&q=80"
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
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
        },
        {
          icon: <FiUser />,
          title: "Profiles",
          desc: "Build your identity",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
        },
        {
          icon: <FiUsers />,
          title: "Networking",
          desc: "Find developers",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
        },
        {
          icon: <FiMessageSquare />,
          title: "Chat",
          desc: "Real-time messaging",
          image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80"
        },
        {
          icon: <FiGrid />,
          title: "Projects",
          desc: "Manage workflows",
          image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80"
        },
        {
          icon: <FiCalendar />,
          title: "Productivity",
          desc: "Tasks & reminders",
          image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
        },
        {
          icon: <FiFileText />,
          title: "Resume Builder",
          desc: "Create resumes",
          image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
        },
        {
          icon: <FiZap />,
          title: "AI Assistant",
          desc: "Smart suggestions",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.h1 
            style={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Manage Projects <br />
            <motion.span 
              style={styles.gradientText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Without Chaos
            </motion.span> 
          </motion.h1>

          <motion.p 
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            A modern platform to manage projects, connect with developers,
            stay updated with tech news, and build resumes - all in one place.
          </motion.p>

          <motion.div 
            style={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button 
              style={styles.primary}
              onClick={() =>window.location.href = "https://project-management-kiit.vercel.app"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* RIGHT IMAGE */}
        <motion.div 
          style={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
              alt="developer workspace"
              style={{ ...styles.image, width: "700px" }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
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
        <motion.h2 
          style={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >Everything You Need. One Platform.</motion.h2>
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
              <div style={{ marginTop: "100px" }}>
              <h2>All-in-One Developer Platform</h2>
              <p>
                Manage projects, connect with developers, chat, build resumes,
                and boost productivity - all in one ecosystem.
              </p>
              </div>
            </div>
          </motion.div>
          {/* 🔹 SMALL CARDS */}
          {features.map((item, i) => (
            <motion.div
            key={i}
            style={styles.cardWrapperSmall}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.08,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 60px rgba(99,102,241,0.4)",
              transition: { duration: 0.3 }
            }}
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
                <motion.div 
                  style={styles.icon}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

  {/* STATS SECTION */}
      <motion.section 
        style={styles.statsSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={styles.statsGrid}>
          {[
            { number: "10K+", label: "Active Developers", icon: <FiUsers /> },
            { number: "50K+", label: "Projects Managed", icon: <FiGrid /> },
            { number: "99%", label: "Task Completion", icon: <FiCheckCircle /> },
            { number: "4.9", label: "User Rating", icon: <FiStar /> }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              style={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div style={styles.statIcon}>{stat.icon}</div>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
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
            <input placeholder="Enter Your Name" style={styles.input} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
            <input placeholder="Domain (eg - Web Dev)" style={styles.input} onChange={(e) => setFormData({ ...formData, domain: e.target.value })  }/>
            <input placeholder="Skills (React, AI,...)" style={styles.input} onChange={(e) => setFormData({ ...formData, skills: e.target.value })}/>
            <input placeholder="Email" style={styles.input} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            <input placeholder="Phone" style={styles.input} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
            <textarea placeholder="Short Bio (2 lines About You)" style={styles.textarea} rows={3} onChange={(e) => setFormData({ ...formData, bio: e.target.value })}/>
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
            style={{...styles.connectVisual, height: '620px'}}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03,rotateY:6,rotateX:-4 }}
            transition={{ type: "spring", stiffness: 120 }}
            >
              {/* BACKGROUND IMAGE */}
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="team collaboration" style={styles.connectImage}/>
              {/* GRADIENT OVERLAY */}
              <div style={styles.overlay}></div>
              {/* LIGHT SWEEP EFFECT */}
              <div style={styles.lightSweep}></div>
              {/* MAIN TEXT */}
              <div style={styles.visualContent}>
                <h1 style={styles.visualTitle}>Build Your Developer Identity</h1>
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{
              scale: 1.05,
              background:
              "linear-gradient(145deg, rgba(99,102,241,0.25), rgba(59,130,246,0.15))",
              boxShadow: "0 10px 40px rgba(37,99,235,0.15)"
            }}
            >
              <h3>{f.title}</h3>
              <p style={{ color: "#64748b" }}>{f.desc}</p>
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
          <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80" alt="professional resume" style={{...styles.resumeImage, width: '650px'}}/>
        </motion.div>
      </motion.section>
      <section style={styles.newsSection}>
        <motion.h2
        style={styles.dynamicTitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
          🚀 <span style={styles.gradientText}>Trending Tech</span> - Right Now
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

    
      {/* TRUST LOGOS */}
      <motion.section 
        style={styles.trustSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p style={styles.trustTitle}>Trusted by teams at leading companies</p>
        <div style={styles.logoGrid}>
          {["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Spotify"].map((logo, i) => (
            <motion.div 
              key={i}
              style={styles.logoItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section 
        style={styles.howItWorksSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.sectionTitle}>How It <span style={styles.gradient}>Works</span></h2>
        <div style={styles.stepsGrid}>
          {[
            { step: "01", title: "Create Your Profile", desc: "Set up your developer profile with skills, domain expertise, and portfolio in minutes." },
            { step: "02", title: "Connect with Teams", desc: "Find and connect with like-minded developers or invite your existing team members." },
            { step: "03", title: "Manage Projects", desc: "Create projects, assign tasks, track progress, and collaborate in real-time." },
            { step: "04", title: "Ship Faster", desc: "Streamlined workflows help you deliver projects on time with better quality." }
          ].map((step, i) => (
            <motion.div 
              key={i}
              style={styles.stepCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div style={styles.stepNumber}>{step.step}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section 
        style={styles.testimonialsSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.sectionTitle}>Loved by <span style={styles.gradient}>Developers</span></h2>
        <div style={styles.testimonialsGrid}>
          {[
            { quote: "Realm transformed how our team manages projects. The interface is intuitive and the features are exactly what we needed.", author: "Sanidhya Kamthan", role: "Engineering Lead at TechCorp", avatar: "SC" },
            { quote: "Finally a project management tool that developers actually enjoy using. Clean, fast, and developer-friendly!", author: "Sanjana Singh", role: "Senior Developer at StartupXYZ", avatar: "AR" },
            { quote: "The collaboration features are game-changing. Our remote team productivity increased by 40% since we started using Realm.", author: "Priyanshu Chakraborty", role: "Product Manager at InnovateTech", avatar: "PS" }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              style={styles.testimonialCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div style={styles.stars}>★★★★★</div>
              <p style={styles.quote}>{testimonial.quote}</p>
              <div style={styles.authorInfo}>
                <div style={styles.avatar}>{testimonial.avatar}</div>
                <div>
                  <div style={styles.authorName}>{testimonial.author}</div>
                  <div style={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* NEWSLETTER */}
      <motion.section 
        style={styles.newsletterSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={styles.newsletterCard}>
          <h2 style={styles.newsletterTitle}>Stay in the Loop</h2>
          <p style={styles.newsletterDesc}>Get the latest updates, tips, and developer resources delivered to your inbox.</p>
          <div style={styles.newsletterForm}>
            <div style={styles.inputWrapper}>
              <input type="email" placeholder="Enter your email" style={styles.newsletterInput} />
            </div>
            <motion.button 
              style={styles.newsletterBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
          <p style={styles.privacyText}>No spam, unsubscribe anytime.</p>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section 
        style={styles.ctaSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.ctaTitle}>Ready to Transform Your Workflow?</h2>
        <p style={styles.ctaSubtitle}>Join thousands of developers who ship faster with Realm.</p>
        <motion.button 
          style={styles.ctaBtn}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(37,99,235,0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "https://project-management-kiit.vercel.app"}
        >
          Get Started for Free →
        </motion.button>
      </motion.section>

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
        <p style={styles.copy}> 2026 Realm. All rights reserved.</p>
      </footer>

    </div>
    );
}

const styles = {
  newsSection: {
    padding: "100px 0",
    textAlign: "center",
    maxWidth: "850px",
    margin: "0 auto",
    position: "relative"
  },
  page: {
    paddingTop: "100px",
    minHeight: "100vh",
    fontFamily: "Inter, -apple-system, sans-serif",
    color: "#1f2937",
    background: "linear-gradient(180deg, #f0f9ff 0%, #f8fafc 30%, #f0f4f8 100%)"
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 10% 80px",
    minHeight: "75vh",
    gap: "60px",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, rgba(240,249,255,0.8) 0%, rgba(248,250,252,0.6) 50%, rgba(224,242,254,0.4) 100%)"
  },
  orb: {
    position: "absolute",
    width: "700px",
    height: "700px",
    background: "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)",
    top: "5%",
    right: "5%",
    filter: "blur(80px)",
    zIndex: 0,
    animation: "pulse 8s ease-in-out infinite"
  },

  glow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(96,165,250,0.15), transparent)",
    filter: "blur(100px)",
    top: "60px",
    left: "3%",
    animation: "float 10s ease-in-out infinite"
  },

  light: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(147,197,253,0.12), transparent)",
    filter: "blur(120px)",
    bottom: "5%",
    right: "15%",
    animation: "float 12s ease-in-out infinite reverse"
  },

  left: {
    flex: 1,
    maxWidth: "520px",
    zIndex: 2
  },

  title: {
    fontSize: "56px",
    fontWeight: "800",
    marginBottom: "20px",
    lineHeight: "1.15",
    color: "#111827",
    letterSpacing: "-0.02em"
  },

  gradientTextAnimated: {
    background: "linear-gradient(90deg, #2563eb, #3b82f6, #6366f1, #2563eb)",
    backgroundSize: "300% 100%",
    WebkitBackgroundClip: "text",
    color: "transparent",
    animation: "gradientShift 4s ease infinite",
    fontSize: "18px",
    lineHeight: "1.7"
  },

  actions: {
    display: "flex",
    gap: "16px"
  },

  primary: {
    padding: "14px 32px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    borderRadius: "12px",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
    transition: "all 0.3s ease"
  },

  secondary: {
    padding: "14px 32px",
    border: "2px solid #e5e7eb",
    background: "white",
    borderRadius: "12px",
    color: "#374151",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },

  right: {
    flex: 1.2,
    display: "flex",
    justifyContent: "center",
    zIndex: 2
  },

  image: {
    width: "550px",
    borderRadius: "24px",
    background: "white",
    border: "1px solid #e5e7eb",
    boxShadow: `
      0 25px 80px rgba(0,0,0,0.1),
      0 0 40px rgba(59,130,246,0.1)
    `,
    transition: "0.4s"
  },
  imageGlow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent)",
    filter: "blur(100px)",
    top: "50%",
    right: "10%",
    transform: "translateY(-50%)",
    zIndex: 0
  },

  features: {
    padding: "100px 10%",
    textAlign: "center",
    background: "linear-gradient(180deg, transparent, rgba(248,250,252,0.5), transparent)"
  },

  sectionTitle: {
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "50px",
    textAlign: "center",
    color: "#111827",
    letterSpacing: "-0.01em"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "24px",
    alignItems: "stretch",
    gridAutoFlow: "dense",
    maxWidth: "1200px",
    margin: "0 auto"
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
    background: "white",
    padding: "28px",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: `
      0 4px 20px rgba(0,0,0,0.05),
      0 0 20px rgba(59,130,246,0.05)
    `,
    transform: "scale(1)",
    transition: "0.3s",
    cursor: "pointer"
  },
  iconBox: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    marginBottom: "20px",
    boxShadow: "0 10px 30px rgba(37,99,235,0.3)",
    color: "white"
  },
  iconDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#2563eb",
    marginBottom: "15px"
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "8px",
    textAlign: "center",
    color: "#111827"
  },
  cardDesc: {
    color: "#6b7280",
    fontSize: "14px",
    textAlign: "center",
    lineHeight: "1.6"
  },

  icon: {
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
    fontSize: "22px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    boxShadow: "0 8px 25px rgba(37,99,235,0.3)",
    color: "white"
  },

  connect: {
    padding: "120px 10%",
    background: "white"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "400px",
    margin: "30px auto"
  },

  input: {
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    background: "white",
    color: "#1f2937",
    fontSize: "15px",
    transition: "0.3s",
    outline: "none"
  },

  news: {
    padding: "120px 10%",
    background: "#f8fafc"
  },

  resume: {
    padding: "120px 10%",
    background: "white"
  },

  footer: {
    background: "#f8fafc",
    padding: "60px 10% 30px",
    borderTop: "1px solid #e5e7eb"
  },
  connect: {
    padding: "120px 10%",
    background: "linear-gradient(180deg, white, #f8fafc)"
  },
  connectWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "40px",
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "0 auto"
  },
  formCard: {
    flex: 1,
    minWidth: "320px",
    maxWidth: "420px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "32px",
    justifyContent: "center",
    borderRadius: "24px",
    background: "white",
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 40px rgba(0,0,0,0.06)"
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "8px",
    textAlign: "center",
    color: "#111827"
  },
  input: {
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    background: "#fafafa",
    color: "#1f2937",
    outline: "none",
    transition: "0.3s",
    fontSize: "15px"
  },
  connectText: {
    flex: 1,
    minWidth: "280px",
    maxWidth: "460px",
    position: "relative"
  },
  connectHeading: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "16px",
    lineHeight: "1.2",
    color: "#111827"
  },
  connectDesc: {
    color: "#6b7280",
    marginBottom: "18px",
    lineHeight: "1.6",
    fontSize: "16px"
  },
  connectList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },
  connectItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "15px",
    color: "#4b5563"
  },

  bullet: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#2563eb,#3b82f6)",
    boxShadow: "0 0 10px rgba(37,99,235,0.4)"
  },
  connector: {
    width: "2px",
    height: "180px",
    background: "linear-gradient(to bottom, transparent, #3b82f6, transparent)",
    opacity: 0.3
  },
  glowBg: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent)",
    filter: "blur(100px)",
    top: "-50px",
    right: "-50px",
    zIndex: 0
  },
  connectHeading: {
    fontSize: "34px",
    fontWeight: "800",
    marginBottom: "16px",
    color: "#111827"
  },
  previewCard: {
    marginTop: "25px",
    padding: "20px",
    borderRadius: "16px",
    background: "white",
    border: "1px solid #e5e7eb",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  avatarPreview: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#2563eb,#3b82f6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "white"
  },
  tagPreview: {
    marginTop: "10px",
    padding: "6px 14px",
    borderRadius: "20px",
    background: "#eff6ff",
    display: "inline-block",
    fontSize: "13px",
    color: "#2563eb",
    fontWeight: "500"
  },
  connectVisual: {
    flex: 1,
    position: "relative",
    borderRadius: "24px",
    overflow: "hidden",
    height: "480px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
    transition: "0.4s",
    border: "1px solid #e5e7eb"
  },
  connectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.95)"
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(255,255,255,0.85), rgba(255,255,255,0.4))",
    color: "#1f2937",
    textAlign: "left"
  },
  lightSweep: {
    position: "absolute",
    top: 0,
    left: "-50%",
    width: "50%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
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
    fontSize: "28px",
    fontWeight: "800",
    marginBottom: "10px",
    letterSpacing: "-0.01em",
    color: "#111827"
  },
  visualDesc: {
    color: "#6b7280",
    maxWidth: "320px",
    fontSize: "15px",
    lineHeight: "1.5"
  },
  floatingCards: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 2
  },
  miniCard: {
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(10px)",
    padding: "12px 18px",
    borderRadius: "12px",
    fontSize: "14px",
    color: "#374151",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    fontWeight: "500"
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#2563eb",
    marginRight: "8px",
    display: "inline-block"
  },
  textarea: {
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    background: "#fafafa",
    color: "#1f2937",
    outline: "none",
    resize: "none",
    minHeight: "80px",
    fontFamily: "inherit",
    transition: "0.3s",
    fontSize: "15px"
  },
  resumeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    marginTop: "40px"
  },
  resumeCard: {
    padding: "25px",
    borderRadius: "18px",
    background: "white",
    border: "1px solid #e5e7eb",
    transition: "0.3s",
    textAlign: "left",
    boxShadow: "0 4px 15px rgba(0,0,0,0.04)"
  },
  resumeWrapper: {
    display: "flex",
    gap: "60px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "100px 10%",
    flexWrap: "wrap",
    position: "relative",
    background: "linear-gradient(180deg, #f8fafc, white)"
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
    marginBottom: "16px",
    color: "#111827",
    letterSpacing: "-0.01em"
  },
  gradient: {
    background: "linear-gradient(135deg,#2563eb,#3b82f6)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  },
  resumeDesc: {
    color: "#6b7280",
    marginBottom: "30px",
    maxWidth: "500px",
    fontSize: "17px",
    lineHeight: "1.7"
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "16px",
    marginBottom: "30px"
  },
  featureCard: {
    padding: "20px",
    borderRadius: "16px",
    background: "white",
    border: "1px solid #e5e7eb",
    transition: "0.3s",
    boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
  },

  resumeImage: {
    width: "400px",
    borderRadius: "20px",
    boxShadow: `
      0 30px 80px rgba(0,0,0,0.12),
      0 0 40px rgba(59,130,246,0.1)
    `,
    animation: "float 6s ease-in-out infinite"
  },
  resumeRightGlow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(59,130,246,0.12), transparent)",
    filter: "blur(120px)",
    zIndex: 0
  },
  newsSection: {
    padding: "100px 8%",
    textAlign: "center",
    background: "#f8fafc"
  },
  newsCard: {
    position: "relative",
    borderRadius: "24px",
    overflow: "hidden",
    height: "450px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb"
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
    padding: "40px",
    background: "linear-gradient(to top, rgba(255,255,255,0.98), rgba(255,255,255,0.7))",
    color: "#1f2937",
    textAlign: "left"
  },
  dynamicTitle: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "40px",
    color: "#111827"
  },
  gradientText: {
    background: "linear-gradient(90deg, #2563eb, #3b82f6)",
    WebkitBackgroundClip: "text",
    color: "transparent"
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
    borderRadius: "24px",
    overflow: "hidden",
    padding: "40px",
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    background: "white",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  bgImage: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(0px) brightness(0.95)",
    transform: "scale(1.1)",
    zIndex: 0
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0.90))",
    zIndex: 1
  },
  cardContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center"
  },
  cardWrapperSmall: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    padding: "28px",
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
    transition: "0.3s"
  },
  bgImageSmall: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(1px) brightness(0.95)",
    transform: "scale(1.1)",
    zIndex: 0
  },
  overlaySmall: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(255,255,255,0.78), rgba(248,250,252,0.92))",
    zIndex: 1
  },
  footer: {
    background: "#f8fafc",
    padding: "60px 10% 30px",
    borderTop: "1px solid #e5e7eb"
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
    borderTop: "1px solid #e5e7eb",
    paddingTop: "24px",
    marginTop: "24px"
  },
  footerControls: {
    display: "flex",
    gap: "15px"
  },
  select: {
    padding: "10px 16px",
    borderRadius: "10px",
    background: "white",
    color: "#374151",
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500"
  },
  copy: {
    textAlign: "center",
    marginTop: "20px",
    color: "#9ca3af",
    fontSize: "14px"
  },

  // Stats Section
  statsSection: {
    padding: "80px 20px",
    maxWidth: "1000px",
    margin: "0 auto"
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px"
  },
  statCard: {
    background: "rgba(255,255,255,0.95)",
    padding: "28px",
    borderRadius: "16px",
    textAlign: "center",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    transition: "0.3s",
    cursor: "pointer"
  },
  statIcon: {
    fontSize: "28px",
    color: "#2563eb",
    marginBottom: "12px"
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#111827",
    marginBottom: "4px"
  },
  statLabel: {
    fontSize: "14px",
    color: "#6b7280",
    fontWeight: "500"
  },

  // Trust Logos
  trustSection: {
    padding: "60px 20px",
    textAlign: "center",
    background: "linear-gradient(180deg, transparent, rgba(248,250,252,0.5), transparent)"
  },
  trustTitle: {
    fontSize: "14px",
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "24px"
  },
  logoGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "48px",
    flexWrap: "wrap",
    opacity: "0.6"
  },
  logoItem: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#6b7280",
    cursor: "pointer",
    transition: "0.3s"
  },

  // How It Works
  howItWorksSection: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "32px"
  },
  stepCard: {
    textAlign: "center",
    padding: "32px",
    background: "rgba(255,255,255,0.6)",
    borderRadius: "20px",
    border: "1px solid #e5e7eb"
  },
  stepNumber: {
    fontSize: "48px",
    fontWeight: "800",
    color: "rgba(37,99,235,0.2)",
    marginBottom: "16px"
  },
  stepTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "12px"
  },
  stepDesc: {
    fontSize: "15px",
    color: "#6b7280",
    lineHeight: "1.6"
  },

  // Testimonials
  testimonialsSection: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    background: "linear-gradient(180deg, transparent, rgba(248,250,252,0.5), transparent)"
  },
  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "24px"
  },
  testimonialCard: {
    background: "rgba(255,255,255,0.95)",
    padding: "32px",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    transition: "0.3s"
  },
  stars: {
    color: "#fbbf24",
    fontSize: "18px",
    marginBottom: "16px",
    letterSpacing: "2px"
  },
  quote: {
    fontSize: "16px",
    color: "#4b5563",
    lineHeight: "1.7",
    marginBottom: "24px",
    fontStyle: "italic"
  },
  authorInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },
  avatar: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "700",
    fontSize: "14px"
  },
  authorName: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#111827"
  },
  authorRole: {
    fontSize: "13px",
    color: "#6b7280"
  },

  // Newsletter
  newsletterSection: {
    padding: "60px 20px",
    maxWidth: "800px",
    margin: "0 auto"
  },
  newsletterCard: {
    background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
    padding: "48px",
    borderRadius: "24px",
    textAlign: "center",
    color: "white"
  },
  newsletterTitle: {
    fontSize: "28px",
    fontWeight: "800",
    marginBottom: "12px"
  },
  newsletterDesc: {
    fontSize: "16px",
    opacity: "0.9",
    marginBottom: "28px"
  },
  newsletterForm: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "16px"
  },
  inputWrapper: {
    position: "relative",
    flex: "1",
    maxWidth: "320px"
  },
  newsletterInput: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "none",
    fontSize: "15px",
    outline: "none",
    background: "white"
  },
  newsletterBtn: {
    padding: "14px 28px",
    background: "rgba(255,255,255,0.2)",
    border: "2px solid white",
    borderRadius: "12px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s"
  },
  privacyText: {
    fontSize: "13px",
    opacity: "0.8"
  },

  // CTA Section
  ctaSection: {
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(180deg, transparent, rgba(248,250,252,0.8), transparent)"
  },
  ctaTitle: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#111827",
    marginBottom: "16px"
  },
  ctaSubtitle: {
    fontSize: "18px",
    color: "#6b7280",
    marginBottom: "32px"
  },
  ctaBtn: {
    padding: "18px 40px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    border: "none",
    borderRadius: "14px",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(37,99,235,0.4)",
    transition: "0.3s"
  }
};