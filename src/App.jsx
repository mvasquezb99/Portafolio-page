import React from 'react'
import Navbar from './components/Navbar'
import PresCard from './components/PresCard'
import RoadMap from './components/RoadMap'
function App() {
  return (
    <>
      <main className="flex h-max w-full flex-col">
        <Navbar />
        <PresCard />
        <RoadMap/>
      </main>
    </>
  )
}

export default App
