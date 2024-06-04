import React from 'react'
import Navbar from './components/Navbar'
import PresCard from './components/PresCard'
import RoadMap from './components/RoadMap'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
function App() {
  return (
    <>
      <main className="flex h-max w-full flex-col items-center">
        <Navbar />
        <section className='w-full h-screen flex flex-col justify-start items-center bg-blueWaves bg-cover aspect-square bg-no-repeat bg-center'>
          <PresCard />
        </section>
        <section className='w-full h-[1000px] flex flex-col justify-start bg-blueWaves-up bg-cover aspect-square bg-no-repeat bg-center'>
          <RoadMap />
          <Projects />
        </section>
        <section className='w-full h-screen flex flex-col justify-start bg-blob-center bg-cover aspect-square bg-no-repeat bg-center'>
          <AboutMe/>
        </section>
      </main>
    </>
  )
}

export default App
