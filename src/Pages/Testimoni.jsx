import React from "react";

// Import gambar dari folder assets
import foto1 from "../assets/cowok1.jpeg";   // contoh, ganti sesuai nama file kamu
import foto2 from "../assets/cewek.jpeg";
import foto3 from "../assets/cowok2.jpeg";

function Testimoni() {
  const testimonies = [
    {
      text: "Sekolah ini sangat membantu saya berkembang dan memahami dunia kerja dengan lebih baik.",
      name: "Andi Saputra",
      photo: foto1,
    },
    {
      text: "Guru-gurunya sangat mendukung dan fasilitasnya lengkap, membuat belajar jadi menyenangkan.",
      name: "Siti Rahma",
      photo: foto2,
    },
    {
      text: "Lingkungan sekolah yang positif dan banyak pengalaman berharga yang saya dapatkan.",
      name: "Budi Santoso",
      photo: foto3,
    },
  ];

  return (
    <div style={styles.container}>
      {testimonies.map((item, index) => (
        <div key={index} style={styles.card}>
          {/* Foto Lingkaran */}
          <img src={item.photo} alt={item.name} style={styles.circle} />

          {/* Konten */}
          <div style={styles.content}>
            <p style={styles.text}>"{item.text}"</p>
            <p style={styles.name}>
              <strong>{item.name}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "40px",
    alignItems: "center",
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    width: "70%",
    background: "#f8f8f8",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",   // gambar mengikuti lingkaran
    flexShrink: 0,
    marginRight: "20px",
  },
  content: {
    flex: 1,
  },
  text: {
    fontStyle: "italic",
    marginBottom: "10px",
  },
  name: {
    marginTop: "10px",
    textAlign: "right",
    color: "#000",
  },
};

export default Testimoni;
