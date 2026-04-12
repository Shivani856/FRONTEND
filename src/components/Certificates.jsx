const certs = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Coursera / Meta',
    date: 'Aug 2024',
    id: 'CERT-123456',
    url: '#',
  },
  {
    title: 'MongoDB for JavaScript Developers',
    issuer: 'MongoDB University',
    date: 'Jun 2024',
    id: 'CERT-MDB-789',
    url: '#',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Mar 2024',
    id: 'CERT-FCC-456',
    url: '#',
  },
  {
    title: 'React — The Complete Guide',
    issuer: 'Udemy',
    date: 'Jan 2024',
    id: 'UC-abc-12345',
    url: '#',
  },
]

export default function Certificates() {
  return (
    <section id="certificates">
      <p className="eyebrow fi">certificates</p>
      <h2 className="sec-title fi">Things I've <em>learned</em></h2>
      <div className="cert-list fi">
        {certs.map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-row"
          >
            <div className="cert-icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="1.25"/>
                <path d="M6 13.5c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                <path d="M7 16l-1.5 2.5L10 17l4.5 1.5L13 16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="cert-body">
              <p className="cert-title">{c.title}</p>
              <p className="cert-meta">{c.issuer} &nbsp;·&nbsp; {c.date}</p>
              <p className="cert-id">{c.id}</p>
            </div>
            <span className="cert-arr">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
