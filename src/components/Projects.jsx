const projects = [
  { num:'01', name:'TaskFlow', desc:"A task manager I built to practice auth and CRUD — users can sign up, create tasks, mark them done, and delete them. Nothing fancy, but the whole thing works end-to-end.", tags:['React','Node.js','MongoDB','JWT'], url:'https://github.com/yourusername/taskflow' },
  { num:'02', name:'Shop App', desc:"A small e-commerce store with product listings, cart state, and a checkout flow. Built the admin panel too so products can be added without touching the database directly.", tags:['React','Express','MongoDB','Tailwind'], url:'https://github.com/yourusername/ecommerce' },
  { num:'03', name:'Dev Blog', desc:"A simple blogging platform where posts are written in Markdown. Wanted to build something I'd actually use — has syntax highlighting, tag filtering, and a clean reading experience.", tags:['React','Node.js','MongoDB','Markdown'], url:'https://github.com/yourusername/devblog' },
]
export default function Projects() {
  return (
    <section id="projects">
      <p className="eyebrow fi">projects</p>
      <h2 className="sec-title fi">Things I've <em>built</em></h2>
      <div className="proj-list fi">
        {projects.map(p => (
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="proj-row" key={p.num}>
            <span className="proj-num">{p.num}</span>
            <div>
              <p className="proj-name">{p.name}</p>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">{p.tags.map(t => <span className="ptag" key={t}>{t}</span>)}</div>
            </div>
            <span className="proj-arr">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
