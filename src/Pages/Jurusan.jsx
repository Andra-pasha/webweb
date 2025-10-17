import React from "react";

// Import logo dari folder assets
import logoTKR from "../assets/logo-tkr.png";
import logoTKI from "../assets/logo-tki.png";
import logoTKJ from "../assets/logo-tkj.png";

function Jurusan() {
  return (
    <div style={styles.container}>
      {/* TKR */}
      <div style={styles.card}>
        <img src={logoTKR} alt="TKR" style={styles.circle} />
        <h3>Teknik Kendaraan Ringan (TKR)</h3>
        <p>
          Jurusan Teknik Kendaraan Ringan mempelajari tentang perawatan, perbaikan, dan rekayasa
          pada kendaraan bermotor khususnya mobil. Peserta didik dibekali keterampilan dalam sistem
          mesin, sistem kelistrikan, sasis (rangka), transmisi, hingga teknologi otomotif modern
          seperti injeksi dan sistem elektronik kendaraan. Lulusan jurusan ini mampu menjadi teknisi
          mobil profesional, mekanik bengkel resmi, teknisi perakitan di pabrik otomotif, maupun
          wirausaha di bidang servis kendaraan.
        </p>
      </div>

      {/* TKI */}
      <div style={styles.card}>
        <img src={logoTKI} alt="TKI" style={styles.circle} />
        <h3>Teknik Kimia Industri</h3>
        <p>
          Teknik Kimia Industri berfokus pada proses pengolahan bahan mentah menjadi produk jadi
          melalui reaksi kimia dan rekayasa proses. Siswa mempelajari cara mengoperasikan alat proses
          industri, mengontrol kualitas produk, menghitung kebutuhan bahan, serta menjaga keselamatan
          kerja (K3). Lulusan jurusan ini siap bekerja di industri pangan, farmasi, pupuk, kosmetik,
          pengolahan minyak, hingga laboratorium pengujian kualitas produk.
        </p>
      </div>

      {/* TKJ */}
      <div style={styles.card}>
        <img src={logoTKJ} alt="TKJ" style={styles.circle} />
        <h3>Teknik Komputer dan Jaringan</h3>
        <p>
          Jurusan Teknik Komputer dan Jaringan mempelajari perangkat keras komputer, instalasi sistem
          operasi, perakitan PC, konfigurasi jaringan (LAN/WAN), server, router, hingga keamanan
          jaringan dan internet. Lulusan TKJ dapat bekerja sebagai teknisi jaringan, admin server,
          IT support, teknisi komputer, maupun freelancer di bidang teknologi informasi, serta
          memiliki peluang besar untuk melanjutkan ke dunia programming dan cyber security.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "40px",
    textAlign: "center",
    flexWrap: "wrap", // agar responsif
  },
  card: {
    width: "250px",
    background: "#f8f8f8",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover", // gambar menyesuaikan
    margin: "0 auto 15px auto",
  },
};

export default Jurusan;
