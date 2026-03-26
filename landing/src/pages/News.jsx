import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("technology");
  const [page, setPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");

 const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const url = `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=10&apikey=${API_KEY}`;

  // const getImage = (news) => {
  //   if (!news) return null;
  //   // const url = news.image_url || news.urlToImage;
  //   const url = news?.image;
  //  if (!url || typeof url !== "string" || url.trim() === "") return null;
  //   return url;
  // };
  
  const getImage = (news) => {
  const url = news?.image;
  if (!url || typeof url !== "string" || url.trim() === "") return null;
  return url;
};
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDebouncedSearch(search);
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, [search]);

  // 🔥 FETCH NEWS
  // useEffect(() => {
  //   setLoading(true);
  //   let url = "";
  //   if (debouncedSearch && debouncedSearch.trim().length > 2) {
  //     url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
  //       debouncedSearch
  //     )}&lang=en&max=10&apikey=${API_KEY}`;
  //   } else {
  //     url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=${API_KEY}`;
  //   }
  //   fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("SEARCH API:", data);
  //     if (data.articles) {
  //       setArticles(data.articles);
  //     } else {
  //       setArticles([]);
  //     }
  //     setLoading(false);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     setLoading(false);
  //   });
  // }, [debouncedSearch, category,page]);

  useEffect(() => {
  setLoading(true);
  let url = "";

  if (debouncedSearch && debouncedSearch.trim().length > 2) {
    url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
      debouncedSearch
    )}&lang=en&max=10&page=${page}&apikey=${API_KEY}`;
  } else {
    url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&page=${page}&apikey=${API_KEY}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("SEARCH API:", data);

      setArticles((prev) => [...prev, ...(data.articles || [])]); // ✅ infinite scroll fix

      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, [debouncedSearch, category, page]); 
  // 🔥 RESET ON SEARCH / CATEGORY CHANGE
  useEffect(() => {
    setArticles([]);
    setPage(1);
  }, [category, search]);

  // 🔥 INFINITE SCROLL (SAFE)
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div style={styles.container}>
      <div style={styles.decorativeOrb}></div>
      <div style={styles.content}>
      {/* HERO */}
      <motion.div 
        style={styles.hero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.title}>
          Stay Ahead with <span style={styles.gradient}>Tech Trends</span>
        </h1>
        <p style={styles.subtitle}>
          Discover the latest in AI, startups, cybersecurity & innovation 🚀
        </p>
      </motion.div>
      {/* SEARCH + FILTER */}
      <motion.div 
        style={styles.topBar}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
        placeholder="Search AI, Startups..."
        style={styles.search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        />

        <div style={styles.filters}>
          {["technology", "business", "science"].map((cat) => (
            <motion.button
              key={cat}
              style={{
                ...styles.filterBtn,
                background:
                  category === cat
                    ? "linear-gradient(135deg,#3b82f6,#6366f1)"
                    : "transparent"
              }}
              onClick={() => setCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* NEWS */}
      {loading && articles.length === 0 ? (
        <div style={styles.grid}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={styles.skeleton}></div>
          ))}
        </div>
      ) : (
        <div style={styles.grid}>
          {(Array.isArray(articles) ? articles : []).map((news, i) => (
            <motion.div
            key={i}
            style={styles.card}
            className="news-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ 
              scale: 1.04,
              y: -8,
              boxShadow: "0 20px 50px rgba(37,99,235,0.15)"
            }}
            >
              {/* IMAGE */}
              <div style={styles.imageWrapper}>
                {/* {getImage(news) ? (
                  <img
                  src={getImage(news)}
                  alt="news"
                  style={styles.image}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none"; // hide broken image
                  }}
                  />
                ) : (
                <div style={styles.imageFallback}>
                  📰
                </div>
                )} */}
                <img
  src={getImage(news) || "https://via.placeholder.com/400x200?text=No+Image"}
  alt="news"
  style={styles.image}
  loading="lazy"
/>
                {/* 🔥 OVERLAY */}
                <div style={styles.overlay}></div>
                {/* 🔖 BOOKMARK */}
                <div style={styles.bookmark}>🔖</div>
              </div>
              {/* CONTENT */}
              <div style={styles.cardContent}>
                <h3 style={styles.headline}>
                  {news.title?.slice(0, 65)}...
                </h3>
                <p style={styles.desc}>
                  {news.description?.slice(0, 90) || "No description available"}
                </p>
              </div>
              {/* BUTTON */}
              <div style={styles.buttonWrapper}>
                <motion.a 
                  href={news.url || "#"} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={styles.readBtn}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(37,99,235,0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default News;

const styles = {
  container: {
    minHeight: "100vh",
    padding: "120px 8% 60px",
    background: "linear-gradient(135deg, #f0f9ff 0%, #f8fafc 50%, #e0f2fe 100%)",
    color: "#1f2937",
    position: "relative",
    overflow: "hidden"
  },
  decorativeOrb: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(59,130,246,0.1), transparent)",
    filter: "blur(100px)",
    top: "-20%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0
  },
  content: {
    position: "relative",
    zIndex: 1
  },
  hero: {
    textAlign: "center",
    marginBottom: "50px",
    position: "relative"
  },

  title: {
    fontSize: "46px",
    fontWeight: "800",
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
    marginTop: "12px",
    fontSize: "18px"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "40px",
    gap: "20px",
    alignItems: "center",
    position: "relative",
    zIndex: 1
  },

  search: {
    padding: "16px 24px",
    borderRadius: "14px",
    border: "1.5px solid #dbeafe",
    background: "rgba(255,255,255,0.9)",
    color: "#1f2937",
    fontSize: "15px",
    width: "320px",
    boxShadow: "0 4px 20px rgba(37,99,235,0.1), 0 0 0 1px rgba(37,99,235,0.05)",
    outline: "none"
  },

  filters: {
    display: "flex",
    gap: "12px"
  },

  filterBtn: {
    padding: "12px 22px",
    borderRadius: "24px",
    border: "1.5px solid #dbeafe",
    color: "#4b5563",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "14px",
    background: "rgba(255,255,255,0.9)",
    transition: "0.3s",
    boxShadow: "0 2px 10px rgba(37,99,235,0.05)"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1
  },

  card: {
    background: "rgba(255,255,255,0.95)",
    borderRadius: "22px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #dbeafe",
    transition: "0.3s",
    position: "relative",
    boxShadow: "0 8px 30px rgba(37,99,235,0.08), 0 2px 8px rgba(0,0,0,0.04)"
  },

  imageWrapper: {
    position: "relative",
    overflow: "hidden",
    height: "200px"
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.4s"
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    background: "linear-gradient(to top, rgba(255,255,255,0.98), transparent)"
  },
  bookmark: {
    position: "absolute",
    top: "14px",
    right: "14px",
    background: "rgba(255,255,255,0.95)",
    padding: "10px 12px",
    borderRadius: "12px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 2px 10px rgba(37,99,235,0.1)",
    border: "1px solid #dbeafe"
  },

  cardContent: {
    padding: "22px",
    flex: 1
  },

  headline: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#111827",
    lineHeight: "1.4"
  },

  desc: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.5"
  },

  source: {
    fontSize: "12px",
    color: "#2563eb",
    fontWeight: "500"
  },

  buttonWrapper: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "22px"
  },

  readBtn: {
    padding: "12px 26px",
    borderRadius: "24px",
    background: "linear-gradient(135deg,#2563eb,#3b82f6)",
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    display: "inline-block",
    textAlign: "center",
    fontWeight: "600",
    boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
    transition: "0.3s"
  },

  skeleton: {
    height: "320px",
    borderRadius: "22px",
    background: "linear-gradient(90deg, #e0f2fe, #dbeafe, #e0f2fe)",
    backgroundSize: "200% 100%",
    animation: "skeleton 1.5s infinite"
  },
  imageFallback: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "52px",
    background: "linear-gradient(135deg,#e0f2fe,#dbeafe)"
  }
};