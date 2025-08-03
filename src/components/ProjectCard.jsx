import Image from 'next/image'

export default function ProjectCard({ title, description, imageSrc }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      maxWidth: '300px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <Image src={imageSrc} alt={title} width={300} height={200} style={{ borderRadius: '8px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
