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

  return (
    <div style={{ padding: "50px" }}>
      <h2>Enter Your Details</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        /><br /><br />

        <input
          name="tech"
          placeholder="Tech Stack"
          onChange={handleChange}
        /><br /><br />

        <input
          name="domain"
          placeholder="Domain"
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}