import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import qus from "../public/lovequs.gif";
import accpect from "../public/accpect_love.gif";
import final from "../public/simple crying.gif";
import firstcry from "../public/emotinal.gif";

function App() {
  const [count, setCount] = useState(0)
  const [message, setmessage] = useState("Tumi ki amke valobasho ??");
  const [image, setimage] = useState(qus);

  // let top = 100
  // let left = 500

  const handleYES = () => {
    setmessage("hehe, jantam tmi amke valobasho...")
    document.getElementById("NO").style.display = "none"
    setimage(accpect)

  }

  const handleNO = () => {
    if (message == 'Tumi ki amke valobasho ??') {
      setmessage("vebe bolteso to...")
      setimage(firstcry)
    }
    if (message == "vebe bolteso to...") {
      setmessage("R ekbar valo moto vebe nao..")
      setimage(final)
    }
    if (message == "R ekbar valo moto vebe nao..") {
      const randomTop = parseInt(Math.random() * 500)
      const randomLeft = parseInt(Math.random() * 1000)

      document.getElementById("NO").style.position = "absolute"
      document.getElementById("NO").style.top = `${randomTop}px`
      document.getElementById("NO").style.left = `${randomLeft}px`
    }


  }

  const handletopleft = () => {
    const randomTop = parseInt(Math.random() * 500)
    const randomLeft = parseInt(Math.random() * 1000)
    // console.log(randomTop);
    // top = 300
    // left = 900
    // settop(randomTop)
    // setleft(randomLeft)


  }


  // console.log(top, left);

  return (
    <section className='h-screen relative items-center flex border-2 border-white'>
      <div className='space-y-5  border-2 w-1/3 mx-auto p-5 rounded-2xl text-center'>
        <img src={image} className='border-2 mx-auto rounded-xl w-96' alt="" />
        <h1 className='text-3xl'>{message}</h1>
        <div className='flex justify-center  gap-5'>
          <button onClick={handleYES} className='btn btn-lg btn-primary'>Yes</button>
          <button id='NO' onClick={handleNO} className={`btn btn-lg btn-primary`}>No</button>
          {/* <button className='btn' onClick={handletopleft}>handle</button> */}
        </div>
      </div>
    </section>
  )
}

export default App
