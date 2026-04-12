import { useRef, useState } from "react";
import heroImg from "../HERO.png";

const DRIVE_FILE_ID = "1trRxaz1pJrpEKUBZwhF867R07oJnYXtq";

export default function Hero() {
  const circleRef = useRef(null);
  const wrapRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleMove = (e) => {
    const r = wrapRef.current.getBoundingClientRect();
    const cx = r.left + r.width / 2,
      cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / (r.width / 2);
    const dy = (e.clientY - cy) / (r.height / 2);
    circleRef.current.style.transform = `scale(1.06) translateY(-4px) rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg)`;
  };

  const handleLeave = () => {
    circleRef.current.style.transform = "";
  };

  const handleDownload = (type) => {
    const url =
      type === "pdf"
        ? `https://docs.google.com/document/d/${DRIVE_FILE_ID}/export?format=pdf`
        : `https://docs.google.com/document/d/${DRIVE_FILE_ID}/export?format=docx`;

    window.open(url, "_blank");
    setShowModal(false);
  };

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-inner">

          {/* Photo circle */}
          <div
            className="photo-ring-wrap"
            ref={wrapRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div className="photo-circle" ref={circleRef}>
              <img
                src={heroImg}
                alt="Shivani Rathore"
                onLoad={(e) => {
                  const placeholder = e.target.nextSibling;
                  if (placeholder) placeholder.style.display = "none";
                }}
              />
              <div className="photo-placeholder">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span>SHIVANI</span>
              </div>
            </div>
          </div>

          <div className="avail">
            <span className="avail-dot" /> open to work
          </div>

          <h1 className="hero-name">
            Hi, I'm SHIVANI RATHORE.
            <br />
            <em>I build things for the web.</em>
          </h1>

          <p className="hero-role">MERN STACK DEVELOPER</p>

          <p className="hero-sub">
            I'm a 3rd-year CS student who loves{" "}
            <strong>full-stack development</strong> — mostly React on the front,
            Node and MongoDB on the back. Still learning, always building.
          </p>

          <div className="hero-btns">
            <button
              className="btn btn-solid"
              onClick={() => setShowModal(true)}
              style={{ border: "none", cursor: "pointer" }}
            >
              Download CV
            </button>
            <a href="#projects" className="btn btn-outline">
              See my work
            </a>
          </div>

          <div className="scroll-cue">
            <span>scroll</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

        </div>
      </section>

      {/* ── CV Download Modal ── */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--surface, #111)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "20px",
              padding: "2.5rem 2rem",
              width: "min(92vw, 380px)",
              textAlign: "center",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Icon */}
            <div style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem",
              fontSize: "1.5rem",
            }}>
              📄
            </div>

            <p style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.4rem" }}>
              Download CV
            </p>
            <p style={{ opacity: 0.5, fontSize: "0.85rem", marginBottom: "2rem", lineHeight: 1.5 }}>
              Choose the format you'd like to download
            </p>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                onClick={() => handleDownload("pdf")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "inherit",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  width: "100%",
                  textAlign: "left",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              >
                <span style={{ fontSize: "1.4rem" }}>📕</span>
                <div>
                  <div>PDF</div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.45, fontWeight: 400 }}>Best for sharing & printing</div>
                </div>
              </button>

              <button
                onClick={() => handleDownload("word")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "inherit",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  width: "100%",
                  textAlign: "left",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              >
                <span style={{ fontSize: "1.4rem" }}>📘</span>
                <div>
                  <div>Word Document</div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.45, fontWeight: 400 }}>Best for editing</div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: "1.25rem",
                background: "none",
                border: "none",
                opacity: 0.35,
                cursor: "pointer",
                fontSize: "0.82rem",
                color: "inherit",
                letterSpacing: "0.05em",
              }}
            >
              cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
