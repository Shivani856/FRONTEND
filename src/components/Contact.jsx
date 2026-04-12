import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState(null)
  const [msg, setMsg] = useState('')

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://portfolio-m55f.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setMsg("Got it — I'll get back to you soon.")
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setMsg(data.error || 'Something went wrong.')
      }

    } catch (err) {
      setStatus('error')
      setMsg("Couldn't send — server not reachable.")
    }
  }

  return (
    <section id="contact">
      <p className="eyebrow fi">contact</p>
      <h2 className="sec-title fi">Let's <em>talk</em></h2>

      <div className="contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-copy fi">
          <p>
            I'm actively looking for my first developer role. If you're hiring,
            working on something interesting, or just want to say hi — drop me a message.
          </p>

          <div className="contact-meta">
            <div className="cm-row">✉ rathoreshivani237@gmail.com</div>
            <div className="cm-row">⌂ Jaipur, India</div>
            <div className="cm-row">◈ Open to full-time roles</div>
          </div>
        </div>

        {/* FORM */}
        <form className="contact-form fi" onSubmit={submit}>

          {/* Name */}
          <div className="form-field">
            <label className="form-label">Name</label>
            <input
              name="name"
              type="text"
              className="form-input"
              placeholder="Your name"
              value={form.name}
              onChange={change}
              required
            />
          </div>

          {/* Email */}
          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-input"
              placeholder="your@email.com"
              value={form.email}
              onChange={change}
              required
            />
          </div>

          {/* Message */}
          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="What's on your mind?"
              value={form.message}
              onChange={change}
              required
            />
          </div>

          {/* Status Message */}
          {status && status !== 'loading' && (
            <div className={`form-msg ${status}`}>
              {msg}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="btn btn-solid"
            disabled={status === 'loading'}
            style={{
              alignSelf: 'flex-start',
              border: 'none',
              cursor: status === 'loading' ? 'wait' : 'pointer'
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>

        </form>
      </div>
    </section>
  )
}