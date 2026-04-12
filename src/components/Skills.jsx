const cols = [
  { head: 'frontend', items: ['React.js','JavaScript ES6+','HTML5 & CSS3','Tailwind CSS','Vite','Responsive design'] },
  { head: 'backend',  items: ['Node.js','Express.js','REST APIs','MongoDB','Mongoose','JWT auth'] },
  { head: 'tools',    items: ['Git & GitHub','VS Code','Postman','MongoDB Atlas','Vercel / Render','npm / yarn'] },
]
export default function Skills() {
  return (
    <section id="skills">
      <p className="eyebrow fi">skills</p>
      <h2 className="sec-title fi">What I <em>work with</em></h2>
      <div className="skills-cols fi">
        {cols.map(c => (
          <div className="sk-col" key={c.head}>
            <p className="sk-head">{c.head}</p>
            <div className="sk-list">
              {c.items.map(i => <div className="sk-item" key={i}>{i}</div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
