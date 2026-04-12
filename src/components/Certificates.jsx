const certs = [
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan / Coursera',
    date: 'Nov 2023',
    id: 'F9ETJZXKPPMN',
    url: 'https://coursera.org/verify/F9ETJZXKPPMN',
    desc: 'Completed a foundational Python programming course — variables, conditionals, loops, and functions. Authorized by the University of Michigan and taught by Dr. Charles Severance.',
  },
  {
    title: 'Exploring C',
    issuer: 'University of Michigan / Coursera',
    date: 'Apr 2024',
    id: '3FNREJTVHZYH',
    url: 'https://coursera.org/verify/3FNREJTVHZYH',
    desc: 'Dug into C programming concepts including memory management, pointers, and structured problem-solving. Strengthened low-level understanding that complements higher-level web dev work.',
  },
  {
    title: 'Using MySQL Database with PHP',
    issuer: 'Coursera Project Network',
    date: 'Sep 2024',
    id: 'XHM7NIK6WOY5',
    url: 'https://coursera.org/verify/XHM7NIK6WOY5',
    desc: 'Hands-on project certificate covering MySQL database integration with PHP — querying, CRUD operations, and connecting a backend to a relational database in a real project environment.',
  },
]

export default function Certificates() {
  return (
    <section id="certificates">
      <p className="eyebrow fi">certificates</p>
      <h2 className="sec-title fi">Things I've <em>learned</em></h2>
      <div className="cert-list fi">
        {certs.map((c, i) => (
          <div
            key={i}
            className="cert-row"
            onClick={() => window.open(c.url, '_blank', 'noopener,noreferrer')}
            style={{ cursor: 'none' }}
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
              <p className="cert-desc">{c.desc}</p>
              <p className="cert-id">ID: {c.id}</p>
            </div>
            <span className="cert-arr">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}
