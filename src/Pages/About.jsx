import React from "react";
import { motion } from "framer-motion";
import schoolImg from "../assets/sekolah.jpg"; // ganti sesuai lokasi gambar kamu

function About() {
  const teachers = [
    {
      name: "Bapak Ahmad Setiawan, S.Pd.",
      position: "Kepala Sekolah",
    },
    {
      name: "Ibu Rina Marlina, S.Pd.",
      position: "Guru Bahasa Indonesia",
    },
    {
      name: "Bapak Dedi Pratama, S.Kom.",
      position: "Guru TKJ",
    },
    {
      name: "Ibu Siti Rahmawati, S.Pd.",
      position: "Guru Akuntansi",
    },
    {
      name: "Bapak Arif Nugroho, S.Pd.",
      position: "Guru Otomotif",
    },
    {
      name: "Ibu Lestari Dewi, M.Pd.",
      position: "Guru Bahasa Inggris",
    },
    {
      name: "Bapak Joko Santoso, S.Pd.",
      position: "Guru PKN",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        padding: "50px 20px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f9fafc, #eef1f6)",
      }}
    >
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>SMKN 1 KUKUS</h2>
      <h3 style={{ textAlign: "center", marginBottom: "40px" }}>Sejarah Singkat</h3>

      {/* Bagian atas: gambar kiri - teks kanan */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto 60px",
        }}
      >
        {/* Gambar Sekolah */}
        <img
          src={schoolImg}
          alt="Sekolah SMKN 1 Kukus"
          style={{
            width: "400px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />

        {/* Teks Sejarah */}
        <p style={{ maxWidth: "500px", lineHeight: "1.8", textAlign: "justify" }}>
          SMKN 1 Kukus berdiri pada tahun 2005 sebagai salah satu sekolah kejuruan
          unggulan di daerah Kukus. Sekolah ini didirikan dengan tujuan untuk mencetak
          lulusan yang memiliki keterampilan teknis dan siap bersaing di dunia kerja.
          <br />
          <br />
          Seiring berjalannya waktu, SMKN 1 Kukus terus berkembang dengan menambah
          berbagai jurusan seperti Teknik Komputer dan Jaringan, Akuntansi, Administrasi
          Perkantoran, dan Teknik Otomotif.
          <br />
          <br />
          Dengan fasilitas yang memadai serta dukungan tenaga pendidik profesional,
          sekolah ini menjadi salah satu pilihan utama bagi siswa yang ingin melanjutkan
          pendidikan kejuruan berkualitas tinggi.
        </p>
      </div>

      {/* Daftar Guru */}
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
        Daftar Guru SMKN 1 KUKUS
      </h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "90%",
            maxWidth: "800px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead style={{ backgroundColor: "#6366f1", color: "white" }}>
            <tr>
              <th style={{ padding: "12px" }}>Nama</th>
              <th style={{ padding: "12px" }}>Jabatan</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr
                key={index}
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <td style={{ padding: "10px", fontWeight: "500" }}>{teacher.name}</td>
                <td style={{ padding: "10px" }}>{teacher.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default About;
