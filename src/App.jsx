import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  )
}

export default App
