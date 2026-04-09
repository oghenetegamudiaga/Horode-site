'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    setLoading(false)
    if (res.ok) {
      router.push('/admin')
    } else {
      setError('Incorrect password. Try again.')
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '380px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Admin login</h1>
        <p style={{ color: '#6b6b6b', marginBottom: '2rem', fontSize: '0.9rem' }}>Horode Design Studio — Blog Admin</p>

        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            placeholder="Enter your admin password"
            className="form-input"
          />
        </div>

        {error && <p style={{ color: '#e24b4a', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="tega-btn"
          style={{ padding: '0.85rem 2rem', fontSize: '0.95rem', width: '100%' }}
        >
          {loading ? 'Logging in...' : 'Log in'}
          <span className="tega-fill">{loading ? 'Logging in...' : 'Log in'}</span>
        </button>
      </div>
    </div>
  )
}
