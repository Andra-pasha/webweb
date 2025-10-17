import React from "react";

function Contact() {
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#000000", padding: "40px 20px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap", // agar tetap rapi di layar kecil
        }}
      >
        {/* EMAIL */}
        <div style={{ display: "flex", alignItems: "flex-start", width: "250px" }}>
          <span style={{ fontSize: "28px", color: "#2dd4bf", marginRight: "15px" }}>📧</span>
          <div>
            <h4 style={{ margin: 0, color: "#555", letterSpacing: "1px", fontSize: "14px" }}>EMAIL US</h4>
            <p style={{ marginTop: "5px", fontSize: "16px" }}>
              SMKN1KUKUS@gmail.com
            </p>
          </div>
        </div>

        {/* CALL */}
        <div style={{ display: "flex", alignItems: "flex-start", width: "250px" }}>
          <span style={{ fontSize: "28px", color: "#2dd4bf", marginRight: "15px" }}>📞</span>
          <div>
            <h4 style={{ margin: 0, color: "#555", letterSpacing: "1px", fontSize: "14px" }}>CALL US</h4>
            <p style={{ marginTop: "5px", fontSize: "16px" }}>
              +1 876-2345-1234
            </p>
          </div>
        </div>

        {/* VISIT */}
        <div style={{ display: "flex", alignItems: "flex-start", width: "250px" }}>
          <span style={{ fontSize: "28px", color: "#2dd4bf", marginRight: "15px" }}>📍</span>
          <div>
            <h4 style={{ margin: 0, color: "#555", letterSpacing: "1px", fontSize: "14px" }}>VISIT US</h4>
            <p style={{ marginTop: "5px", fontSize: "16px" }}>
              Joglo Street, Surya City,
              <br />
              West Java
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
