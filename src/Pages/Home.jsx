import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        background: "linear-gradient(to bottom right, #f8f9fc, #eef1f6)",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}
      >
        SELAMAT DATANG DI WEBSITE SMKN 1 KUKUS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{ fontSize: "1.3rem", color: "#333", marginBottom: "30px" }}
      >
        Ini adalah Website Resmi milik SMKN 1 KUKUS
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        onClick={() => navigate("/about")}
        style={{
          padding: "12px 25px",
          fontSize: "1rem",
          borderRadius: "8px",
          backgroundColor: "#6366f1",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#4f46e5")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#6366f1")}
      >
        Selengkapnya
      </motion.button>
    </div>
  );
}

export default Home;
