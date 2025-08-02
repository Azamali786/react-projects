import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeCard from './components/WelcomCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeCard />
    </>
  )
}

export default App
