import { useRef } from "react";
import heroImg from "../HERO.png";

export default function Hero() {
  const circleRef = useRef(null);
  const wrapRef = useRef(null);

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

  return (
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
            
            {/* Image */}
            <img
              src={heroImg}
              alt="Shivani Rathore"
              onLoad={(e) => {
                const placeholder = e.target.nextSibling;
                if (placeholder) placeholder.style.display = "none";
              }}
            />

            {/* Placeholder */}
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

        {/* Content */}
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
          <a href="/cv.pdf" download className="btn btn-solid">
            Download CV
          </a>
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
  );
}