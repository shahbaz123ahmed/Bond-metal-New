import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Videos from '../components/Videos'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Videos />
    </main>
  )
}