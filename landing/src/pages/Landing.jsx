import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUsers, FiLayers, FiCheckCircle, FiTrendingUp, FiStar, FiArrowRight, FiMail, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Landing() {
  const stats = [
    { number: "10K+", label: "Active Developers", icon: <FiUsers /> },
    { number: "50K+", label: "Projects Managed", icon: <FiLayers /> },
    { number: "99%", label: "Task Completion", icon: <FiCheckCircle /> },
    { number: "4.9", label: "User Rating", icon: <FiStar /> }
  ];

  const trustLogos = ["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Spotify"];

  const testimonials = [
    {
      quote: "Vajra transformed how our team manages projects. The interface is intuitive and the features are exactly what we needed.",
      author: "Sarah Chen",
      role: "Engineering Lead at TechCorp",
      avatar: "SC"
    },
    {
      quote: "Finally a project management tool that developers actually enjoy using. Clean, fast, and developer-friendly!",
      author: "Alex Rivera",
      role: "Senior Developer at StartupXYZ",
      avatar: "AR"
    },
    {
      quote: "The collaboration features are game-changing. Our remote team productivity increased by 40% since we started using Vajra.",
      author: "Priya Sharma",
      role: "Product Manager at InnovateTech",
      avatar: "PS"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create Your Profile",
      desc: "Set up your developer profile with skills, domain expertise, and portfolio in minutes."
    },
    {
      step: "02",
      title: "Connect with Teams",
      desc: "Find and connect with like-minded developers or invite your existing team members."
    },
    {
      step: "03",
      title: "Manage Projects",
      desc: "Create projects, assign tasks, track progress, and collaborate in real-time."
    },
    {
      step: "04",
      title: "Ship Faster",
      desc: "Streamlined workflows help you deliver projects on time with better quality."
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.decorativeOrb}></div>
      <div style={styles.decorativeOrb2}></div>
      <div style={styles.decorativeOrb3}></div>
      
      <div style={styles.content}>
        {/* NAV */}
        <nav style={styles.nav}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            ⚡Vajra
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button style={styles.navBtn}>Login</button>
            <button style={styles.navBtnOutline}>Sign Up</button>
          </motion.div>
        </nav>

        {/* HERO */}
        <motion.div 
          style={styles.hero}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={styles.badge}
          >
            🚀 Now with AI-Powered Insights
          </motion.div>

          <h1 style={styles.title}>
            Manage Projects <br />
            <span style={styles.gradient}>Like a Pro</span>
          </h1>

          <p style={styles.subtitle}>
            Organize teams, track tasks, and collaborate efficiently — all in one place.
            Built by developers, for developers.
          </p>

          <div style={styles.cta}>
            <Link to="/tech-form">
              <motion.button 
                style={styles.primaryBtn}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(37,99,235,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free <FiArrowRight style={{ marginLeft: "8px" }} />
              </motion.button>
            </Link>

            <Link to="/profiles">
              <motion.button 
                style={styles.secondaryBtn}
                whileHover={{ scale: 1.05, background: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Developers
              </motion.button>
            </Link>
          </div>

          {/* Trust indicators */}
          <motion.div 
            style={styles.trustBadge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span style={styles.trustText}>✓ No credit card required</span>
            <span style={styles.trustText}>✓ Free forever plan</span>
            <span style={styles.trustText}>✓ Setup in 2 minutes</span>
          </motion.div>
        </motion.div>

        {/* STATS SECTION */}
        <motion.section 
          style={styles.statsSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={styles.statsGrid}>
            {stats.map((stat, i) => (
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
            {trustLogos.map((logo, i) => (
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

        {/* FEATURES */}
        <motion.section 
          style={styles.featuresSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.sectionTitle}>Everything You Need to <span style={styles.gradient}>Ship Faster</span></h2>
          <div style={styles.features}>
            {[
              { icon: "📊", title: "Task Management", desc: "Create, assign, and track tasks with ease. Visual boards and lists keep everyone aligned." },
              { icon: "👥", title: "Team Collaboration", desc: "Work together in real-time. Comments, mentions, and notifications keep the flow going." },
              { icon: "⚡", title: "Fast & Scalable", desc: "Built with modern tech stack. Handles teams of any size without slowing down." },
              { icon: "🔒", title: "Enterprise Security", desc: "Bank-grade encryption, SSO, and compliance certifications included." },
              { icon: "📈", title: "Analytics & Insights", desc: "Track velocity, burndown charts, and team performance with beautiful dashboards." },
              { icon: "🔗", title: "Integrations", desc: "Connect with GitHub, Slack, Jira, and 50+ tools you already use." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                style={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -8, boxShadow: "0 20px 50px rgba(37,99,235,0.15)" }}
              >
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDesc}>{feature.desc}</p>
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
            {howItWorks.map((step, i) => (
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
            {testimonials.map((testimonial, i) => (
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
                <FiMail style={styles.inputIcon} />
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
            <p style={styles.privacyText}>No spam, unsubscribe anytime. Read our privacy policy.</p>
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
          <p style={styles.ctaSubtitle}>Join thousands of developers who ship faster with Vajra.</p>
          <Link to="/tech-form">
            <motion.button 
              style={styles.ctaBtn}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(37,99,235,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started for Free →
            </motion.button>
          </Link>
        </motion.section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <div style={styles.footerGrid}>
            <div style={styles.footerBrand}>
              <h3 style={styles.footerLogo}>⚡Vajra</h3>
              <p style={styles.footerDesc}>Modern project management for developer teams. Ship faster, collaborate better.</p>
              <div style={styles.socialLinks}>
                <FiGithub style={styles.socialIcon} />
                <FiTwitter style={styles.socialIcon} />
                <FiLinkedin style={styles.socialIcon} />
              </div>
            </div>
            
            <div style={styles.footerLinks}>
              <h4 style={styles.footerLinksH4}>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Integrations</a>
              <a href="#">Changelog</a>
            </div>
            
            <div style={styles.footerLinks}>
              <h4 style={styles.footerLinksH4}>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
            
            <div style={styles.footerLinks}>
              <h4 style={styles.footerLinksH4}>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">Help Center</a>
              <a href="#">Community</a>
              <a href="#">Contact</a>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p>© 2026 Vajra. All rights reserved.</p>
            <div style={styles.footerLegal}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f0f9ff 0%, #f8fafc 50%, #e0f2fe 100%)",
    color: "#1f2937",
    fontFamily: "Inter, -apple-system, sans-serif",
    position: "relative",
    overflow: "hidden"
  },
  decorativeOrb: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent)",
    filter: "blur(80px)",
    top: "10%",
    right: "-10%",
    zIndex: 0,
    animation: "pulse 8s ease-in-out infinite"
  },
  decorativeOrb2: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(96,165,250,0.12), transparent)",
    filter: "blur(100px)",
    bottom: "20%",
    left: "-5%",
    zIndex: 0,
    animation: "float 10s ease-in-out infinite"
  },
  decorativeOrb3: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(147,197,253,0.1), transparent)",
    filter: "blur(80px)",
    top: "50%",
    right: "20%",
    zIndex: 0,
    animation: "float 12s ease-in-out infinite reverse"
  },
  content: {
    position: "relative",
    zIndex: 1
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "24px 48px",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto"
  },

  navBtn: {
    marginRight: "14px",
    padding: "12px 24px",
    background: "#2563eb",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    boxShadow: "0 4px 15px rgba(37,99,235,0.35)",
    transition: "0.3s"
  },

  navBtnOutline: {
    padding: "12px 24px",
    border: "2px solid #dbeafe",
    background: "rgba(255,255,255,0.9)",
    borderRadius: "10px",
    color: "#475569",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "0.3s"
  },

  hero: {
    textAlign: "center",
    marginTop: "40px",
    padding: "0 20px 60px",
    position: "relative"
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    background: "rgba(37,99,235,0.1)",
    border: "1px solid rgba(37,99,235,0.2)",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#2563eb",
    marginBottom: "24px"
  },

  title: {
    fontSize: "56px",
    fontWeight: "800",
    color: "#1e40af",
    letterSpacing: "-0.02em",
    lineHeight: "1.15",
    textShadow: "0 2px 10px rgba(37,99,235,0.1)"
  },

  gradient: {
    background: "linear-gradient(135deg,#2563eb,#3b82f6)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  },

  subtitle: {
    marginTop: "24px",
    fontSize: "20px",
    color: "#6b7280",
    maxWidth: "600px",
    margin: "24px auto 0",
    lineHeight: "1.7"
  },

  cta: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap"
  },

  primaryBtn: {
    padding: "16px 32px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    border: "none",
    borderRadius: "12px",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "17px",
    boxShadow: "0 10px 30px rgba(37,99,235,0.4), 0 0 0 1px rgba(37,99,235,0.1)",
    transition: "0.3s",
    display: "flex",
    alignItems: "center"
  },

  secondaryBtn: {
    padding: "16px 32px",
    border: "2px solid #dbeafe",
    background: "rgba(255,255,255,0.9)",
    borderRadius: "12px",
    color: "#475569",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "17px",
    transition: "0.3s"
  },

  trustBadge: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    marginTop: "32px",
    flexWrap: "wrap"
  },

  trustText: {
    fontSize: "14px",
    color: "#6b7280",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  },

  statsSection: {
    padding: "60px 20px",
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
    border: "1px solid #dbeafe",
    boxShadow: "0 4px 20px rgba(37,99,235,0.08)",
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
    color: "#1e40af",
    marginBottom: "4px"
  },

  statLabel: {
    fontSize: "14px",
    color: "#6b7280",
    fontWeight: "500"
  },

  trustSection: {
    padding: "40px 20px",
    textAlign: "center"
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

  featuresSection: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
  },

  sectionTitle: {
    fontSize: "36px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "50px",
    color: "#1e40af"
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px"
  },

  featureCard: {
    background: "rgba(255,255,255,0.95)",
    padding: "32px",
    borderRadius: "20px",
    border: "1px solid #dbeafe",
    boxShadow: "0 4px 20px rgba(37,99,235,0.08)",
    transition: "0.3s",
    cursor: "pointer"
  },

  featureIcon: {
    fontSize: "40px",
    marginBottom: "16px"
  },

  featureTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1e40af",
    marginBottom: "12px"
  },

  featureDesc: {
    fontSize: "15px",
    color: "#6b7280",
    lineHeight: "1.6"
  },

  howItWorksSection: {
    padding: "80px 20px",
    background: "linear-gradient(180deg, transparent, rgba(248,250,252,0.5), transparent)",
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
    padding: "32px"
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
    color: "#1e40af",
    marginBottom: "12px"
  },

  stepDesc: {
    fontSize: "15px",
    color: "#6b7280",
    lineHeight: "1.6"
  },

  testimonialsSection: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
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
    border: "1px solid #dbeafe",
    boxShadow: "0 4px 20px rgba(37,99,235,0.08)",
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
    color: "#1e40af"
  },

  authorRole: {
    fontSize: "13px",
    color: "#6b7280"
  },

  newsletterSection: {
    padding: "60px 20px",
    maxWidth: "800px",
    margin: "0 auto"
  },

  newsletterCard: {
    background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
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

  inputIcon: {
    position: "absolute",
    left: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9ca3af",
    fontSize: "18px"
  },

  newsletterInput: {
    width: "100%",
    padding: "14px 16px 14px 48px",
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

  ctaSection: {
    padding: "80px 20px",
    textAlign: "center"
  },

  ctaTitle: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#1e40af",
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
  },

  footer: {
    background: "#f8fafc",
    padding: "60px 48px 30px",
    borderTop: "1px solid #e5e7eb"
  },

  footerGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "48px",
    maxWidth: "1200px",
    margin: "0 auto",
    marginBottom: "40px"
  },

  footerBrand: {
    maxWidth: "300px"
  },

  footerLogo: {
    fontSize: "24px",
    marginBottom: "16px",
    color: "#1e40af"
  },

  footerDesc: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.6",
    marginBottom: "20px"
  },

  socialLinks: {
    display: "flex",
    gap: "16px"
  },

  socialIcon: {
    fontSize: "20px",
    color: "#6b7280",
    cursor: "pointer",
    transition: "0.3s"
  },

  footerLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  footerLinksH4: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#1e40af",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  },

  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "24px",
    borderTop: "1px solid #e5e7eb",
    fontSize: "14px",
    color: "#6b7280",
    flexWrap: "wrap",
    gap: "16px"
  },

  footerLegal: {
    display: "flex",
    gap: "24px"
  }
};