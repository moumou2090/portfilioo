import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

// This is the main application component for a Next.js application.
// It imports global styles and a Navbar component.
// The Navbar is rendered above the main content of the page.
// The Component prop represents the current page being rendered.
// The pageProps prop contains any initial props that were preloaded for the page.
// This setup allows for a consistent navigation bar across all pages in the application.
// The Navbar component is imported from the components directory and used to render a navigation bar at the  top of the page.
// The global styles are imported from the styles directory, ensuring consistent styling across the application.