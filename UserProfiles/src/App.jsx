import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileList from './components/ProfileList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ProfileList/>
      </div>
    </>
  )
}

export default App
