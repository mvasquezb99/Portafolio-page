import React from 'react'
import Navbar from './components/Navbar'
import PresCard from './components/PresCard'
import RoadMap from './components/RoadMap'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import './styles/App.css'
function App() {
  return (
    <>
      <Navbar />
      <main className="flex h-max w-full flex-col items-center">
        <section id="home" className='w-full h-screen flex flex-col justify-start items-center presContainer'>
          <PresCard />
        </section>
        <section id="experience" className='w-full h-screen flex flex-col justify-start roadMapContainer'>
          <RoadMap />
          <Projects />
        </section>
        <section id="aboutMe" className='w-full h-screen flex flex-col justify-start aboutMeContainer'>
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
