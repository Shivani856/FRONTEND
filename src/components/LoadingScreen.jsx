import { useState, useEffect } from 'react'

const steps = [
  { pct: 20, label: 'setting up...' },
  { pct: 50, label: 'loading projects...' },
  { pct: 80, label: 'almost there...' },
  { pct: 100, label: 'done.' },
]

export default function LoadingScreen({ hidden }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (hidden) return
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 750),
      setTimeout(() => setStep(3), 1200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [hidden])

  const pct = steps[step]?.pct ?? 0
  const label = steps[step]?.label ?? ''

  return (
    <div className={`loading-screen${hidden ? ' hidden' : ''}`}>
      <div className="ls-inner">
        <p className="ls-name">SHIVANI</p>
        <p className="ls-label">{label}</p>
        <div className="ls-bar-wrap">
          <div className="ls-bar" style={{ width: `${pct}%` }} />
        </div>
        <p className="ls-pct">{pct}%</p>
      </div>
    </div>
  )
}
