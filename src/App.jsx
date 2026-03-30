
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Tools from './components/Tools'


const getTools = async () => {
  const res = await fetch("/tools.json")
  return res.json()
}

const toolsPromise = getTools();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Tools toolsPromise={toolsPromise}></Tools>
    </>
  )
}

export default App
