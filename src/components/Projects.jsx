const projects = [
  {
    num: '01',
    name: 'Event Management System',
    desc: "A centralized platform I built for university event listings and bookings. Designed the full interface from scratch — event creation, listing, and booking flows all in one place. Focused on making it intuitive enough that anyone could use it without a manual.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/Shivani856',
  },
  {
    num: '02',
    name: 'Mentoring Management System',
    desc: "A platform to make mentor-mentee relationships in higher education actually work. Built with role-based access so mentors and students see different dashboards. Includes academic progress tracking and collaboration tools — the kind of thing universities genuinely need.",
    tags: ['HTML', 'CSS', 'JavaScript', 'Role-based Access'],
    url: 'https://github.com/Shivani856',
  },
  {
    num: '03',
    name: 'TaskFlow',
    desc: "A task manager I built to practice auth and CRUD — users can sign up, create tasks, mark them done, and delete them. Nothing fancy, but the whole thing works end-to-end with JWT-based authentication and a proper MongoDB backend.",
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    url: 'https://github.com/Shivani856',
  },
  {
    num: '04',
    name: 'Shop App',
    desc: "A small e-commerce store with product listings, cart state, and a checkout flow. Built the admin panel too so products can be added without touching the database directly. Good practice for state management and REST API design.",
    tags: ['React', 'Express', 'MongoDB', 'Tailwind'],
    url: 'https://github.com/Shivani856',
  },
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
