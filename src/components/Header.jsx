import Image from 'next/image'

export default function Header({ title, subtitle, profileImage }) {
  return (
    <header style={{ textAlign: 'center', padding: '2rem' }}>
      {profileImage && (
        <Image
          src={profileImage}
          alt="Photo de profil"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
        />
      )}
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}
