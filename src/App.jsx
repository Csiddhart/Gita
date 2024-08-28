import { useContext, useEffect, useState } from 'react'
import Input from './components/Input'
import { GitaContext } from './context/GitaContext'

function App() {
  const [count, setCount] = useState(0)
  const {gita}=useContext(GitaContext)

  useEffect(()=>{
    gita()
  },[])

  return (
    <>
    <Input/>
    </>
  )
}

export default App
