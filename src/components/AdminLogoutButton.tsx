'use client'

import { useRouter } from 'next/navigation'

export default function AdminLogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        background: 'none',
        border: '1px solid #e5e5e5',
        borderRadius: '9999px',
        padding: '0.6rem 1.2rem',
        fontSize: '0.85rem',
        color: '#6b6b6b',
        cursor: 'pointer',
        fontFamily: 'Satoshi, sans-serif',
        fontWeight: 600,
      }}
    >
      Log out
    </button>
  )
}
