import React from 'react'
import Navbar from './components/Navbar'
import PresCard from './components/PresCard'
import RoadMap from './components/RoadMap'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <main className="flex h-max w-full flex-col items-center">
        <section id="home" className='w-full h-screen flex flex-col justify-start items-center bg-blueWaves bg-cover aspect-square bg-no-repeat bg-center'>
          <PresCard />
        </section>
        <section id="experience" className='w-full h-[1000px] flex flex-col justify-start bg-blueWaves-up bg-cover aspect-square bg-no-repeat bg-center'>
          <RoadMap />
          <Projects />
        </section>
        <section id="aboutMe" className='w-full h-screen flex flex-col justify-start bg-blob-center bg-cover aspect-square bg-no-repeat bg-center'>
          <AboutMe />
        </section>
        <section className=' w-3/5 h-64'>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
