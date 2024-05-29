import React from 'react'
import Navbar from './components/Navbar'
import PresCard from './components/PresCard'
import RoadMap from './components/RoadMap'
import Projects from './components/Projects'
function App() {
  return (
    <>
      <main className="flex h-max w-full flex-col">
        <Navbar />
        <PresCard />
        <section className='w-full h-screen pl-4 pr-4'>
          <RoadMap />
          <Projects/>
        </section>
      </main>
    </>
  )
}

export default App
