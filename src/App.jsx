import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  return (
    <>
      <Header />
      <Navbar activeSection={activeSection} />
      <MainContent onActiveSectionChange={setActiveSection} />
      <Footer />
    </>
  )
}

export default App
