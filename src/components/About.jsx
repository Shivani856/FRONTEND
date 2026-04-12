export default function About() {
  return (
    <section id="about">
      <p className="eyebrow fi">about me</p>
      <h2 className="sec-title fi">A bit about <em>who I am</em></h2>
      <div className="about-grid">
        <div className="about-copy fi">
          <p>I grew up curious about how things work — pulled apart gadgets as a kid, now I pull apart codebases. I picked up web dev in my second year and haven't stopped since. <strong>MERN is my comfort zone</strong>, but I'll pick up whatever a project needs.</p>
          <p>I care about writing code that's easy to read and maintain, not just code that runs. I've built a few full-stack projects from scratch and know how to take something from a blank file to a working deployment.</p>
          <p>Outside of code — anime, long walks, and way too many browser tabs. Looking for my first proper role where I can learn from people smarter than me.</p>
          <div className="open-badge"><span className="avail-dot" /> <strong>available</strong> — fresher, full-time</div>
        </div>
        <div className="fi">
         <div className="info-block">
  {[
    ['name', 'SHIVANI RATHORE'],
    ['studying', 'B.Tech CS, 3rd Year'],
    ['based in', 'Jaipur, India'],
    ['email', <a href="mailto:rathoreshivani237@gmail.com">rathoreshivani237@gmail.com</a>],
    ['github', <a href="https://github.com/Shivani856" target="_blank">github.com/Shivani856</a>],
    ['linkedin', <a href="https://www.linkedin.com/in/shivani-rathore-0b8282353/" target="_blank">linkedin.com/in/yourusername</a>]
  ].map(([k, v]) => (
    <div className="info-row" key={k}>
      <span className="ik">{k}</span>
      <span className="iv">{v}</span>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  )
}
