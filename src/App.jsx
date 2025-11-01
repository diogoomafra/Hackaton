import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  const [activeSection, setActiveSection] = useState('location')

  return (
    <div className="dashboard">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <MainContent activeSection={activeSection} />
    </div>
  )
}

export default App