import React from 'react'
import Navbar from './components/Navbar'
import PresCard from './components/PresCard'
import RoadMap from './components/RoadMap'
import Projects from './components/Projects'
function App() {
  return (
    <>
      <main className="flex h-max w-full flex-col items-center">
        <section className='w-full h-screen pl-4 pr-4 flex flex-col justify-start items-center bg-blueWaves bg-cover aspect-square bg-no-repeat bg-center'>
          <Navbar />
          <PresCard />
        </section>
        <section className='w-full h-[1000px] pl-4 pr-4 flex flex-col justify-start bg-blueWaves-up bg-cover aspect-square bg-no-repeat bg-center'>
          <RoadMap />
          <Projects />
        </section>
      </main>
    </>
  )
}

export default App
