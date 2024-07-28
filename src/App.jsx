import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyWallet from './Components/BaiTapStateProps/MyWallet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyWallet />
    </div>
  )
}

export default App
