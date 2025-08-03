import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#0070f3' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, color: 'white' }}>
        <li><Link href="/"><a style={{ color: 'white', textDecoration: 'none' }}>Accueil</a></Link></li>
        <li><Link href="/about"><a style={{ color: 'white', textDecoration: 'none' }}>À propos</a></Link></li>
        <li><Link href="/projects"><a style={{ color: 'white', textDecoration: 'none' }}>Projets</a></Link></li>
        <li><Link href="/contact"><a style={{ color: 'white', textDecoration: 'none' }}>Contact</a></Link></li>
      </ul>
    </nav>
  )
}
// This is a simple Navbar component for a Next.js application.
// It uses Next.js's Link component for client-side navigation.

