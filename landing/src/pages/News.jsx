import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("technology");
  const [page, setPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const API_KEY = "fe8376ba8ad5a99645b5dbc3999fad05";
  const url = `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=10&apikey=${API_KEY}`;

  const getImage = (news) => {
    if (!news) return null;
    const url = news.image_url || news.urlToImage;
    if (!url) return null;
    if (typeof url !== "string") return null;
    if (url.includes("null")) return null;
    return url;
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  // 🔥 FETCH NEWS
  useEffect(() => {
    setLoading(true);
    let url = "";
    if (debouncedSearch && debouncedSearch.trim().length > 2) {
      url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
        debouncedSearch
      )}&lang=en&max=10&apikey=${API_KEY}`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=${API_KEY}`;
    }
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("SEARCH API:", data);
      if (data.articles) {
        setArticles(data.articles);
      } else {
        setArticles([]);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, [debouncedSearch, category]);

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
      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>
          Stay Ahead with <span style={styles.gradient}>Tech Trends</span>
        </h1>
        <p style={styles.subtitle}>
          Discover the latest in AI, startups, cybersecurity & innovation 🚀
        </p>
      </div>
      {/* SEARCH + FILTER */}
      <div style={styles.topBar}>
        <input
        placeholder="Search AI, Startups..."
        style={styles.search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        />

        <div style={styles.filters}>
          {["technology", "business", "science"].map((cat) => (
            <button
              key={cat}
              style={{
                ...styles.filterBtn,
                background:
                  category === cat
                    ? "linear-gradient(135deg,#3b82f6,#6366f1)"
                    : "transparent"
              }}
              onClick={() => setCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

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
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            >
              {/* IMAGE */}
              <div style={styles.imageWrapper}>
                {getImage(news) ? (
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
                )}
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
                <a href={news.url || "#"} target="_blank" rel="noreferrer" style={styles.readBtn}>
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default News;

const styles = {
  container: {
    minHeight: "100vh",
    padding: "120px 8%",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "white"
  },

  hero: {
    textAlign: "center",
    marginBottom: "40px"
  },

  title: {
    fontSize: "42px",
    fontWeight: "800"
  },

  gradient: {
    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  subtitle: {
    color: "#94a3b8",
    marginTop: "10px"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "40px",
    gap: "20px"
  },

  search: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "white"
  },

  filters: {
    display: "flex",
    gap: "10px"
  },

  filterBtn: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "1px solid #334155",
    color: "white",
    cursor: "pointer"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px"
  },

  card: {
    background: "rgba(15,23,42,0.6)",
    backdropFilter: "blur(20px)",
    borderRadius: "18px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "0.3s",
    position: "relative"
  },

  imageWrapper: {
    position:"relative",
    overflow:"hidden",
    height: "180px"
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition:"0.4s"
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    background: "linear-gradient(to top, rgba(2,6,23,0.9), transparent)"
  },
  bookmark: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "rgba(0,0,0,0.5)",
    padding: "6px 8px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer"
  },

  cardContent: {
    padding: "16px",
    flex: 1
  },

  headline: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom:"10px"
  },

  desc: {
    fontSize: "13px",
    color: "#94a3b8"
  },

  source: {
    fontSize: "12px",
    color: "#60a5fa"
  },

  buttonWrapper: {
    marginTop:"auto",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "15px"
  },

  readBtn: {
    padding: "8px 18px",
    borderRadius: "20px",
    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
    color: "white",
    textDecoration: "none",
    fontSize:"13px",
    display:"inline-block",
    textAlign:"center",
    transition:"o.3s",
    boxshadow:"0 5px 15px rgba(99,102,241,0.4)"
  },

  skeleton: {
    height: "280px",
    borderRadius: "18px",
    background: "#1e293b"
  },
  imageFallback: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    background: "linear-gradient(135deg,#020617,#0f172a)"
  }
};