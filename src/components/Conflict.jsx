import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import ConflictImage from "../assets/mine4.png";

// Load translations
import en from "../data/en.json";
import ar from "../data/Ar.json";

export default function Conflict({ lang }) {
  // Choose correct language file
  const t = lang === "en" ? en : ar;
  const project = t.projects.project_4;

  if (!project) return null;

  return (
    <div className={`project-page-wrapper ${lang === "ar" ? "rtl" : ""}`}>
      <section className="section project-detail">
        <div className="container">
          <Link to="/" className="see-more-btn" style={{ marginBottom: "20px", display: "inline-block", textDecoration: "none" }}>
            {lang === "en" ? "← Back to Home" : "← العودة للرئيسية"}
          </Link>
          <img src={ConflictImage} alt={project.header} className="project-image" style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }} />
          <h2 style={{ marginTop: "20px" }}>{project.header}</h2>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginTop: "15px" }}>{project.body}</p>
        </div>
      </section>

      <Footer text={t.footer} lang={lang} />
    </div>
  );
}