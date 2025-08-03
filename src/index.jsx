import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <>
      <Header
        title="Mon Portfolio"
        subtitle="Bienvenue sur mon portfolio"
        profileImage="/profile.jpg"
      />
      
      <main style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ProjectCard
          title="Mon Projet"
          description="Description de mon projet"
          imageSrc="/project-image.jpg"
        />
      </main>
    </>
  )
}
