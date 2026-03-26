const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

let profiles = [];

app.get("/", (req, res) => {
  res.send("Welcome to the Landing Server!");
});

// CREATE PROFILE
app.post("/profiles", (req, res) => {
  const { name, domain, skills } = req.body;

  profiles.push({ name, domain, skills });

  res.json({ message: "Profile created successfully" });
});

// GET PROFILES
app.get("/profiles", (req, res) => {
  res.json(profiles);
});

// SEARCH PROFILES
app.get("/profiles/search/:domain", (req, res) => {
  const domain = req.params.domain.toLowerCase();

  const result = profiles.filter(p =>
    p.domain.toLowerCase().includes(domain)
  );

  res.json(result);
});

app.listen(5001, () => {
  console.log("Landing server running on http://localhost:5001");
});