import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setmessage] = useState("Tumi ki amke valobasho ??");
  const [postion, setpostion] = useState("relative");
  const [unique, setunique] = useState("");
  // const [top, settop] = useState(100);
  // const [left, setleft] = useState(500);

  let top = 100
  let left = 500

  const handleYES = () => {
    setmessage("hehe, jantam tmi amke valobasho...")

  }

  const handleNO = () => {
    if (message == 'Tumi ki amke valobasho ??') {
      setmessage("vebe bolteso to...")
    }
    if (message == "vebe bolteso to...") {
      setmessage("R ekbar valo moto vebe nao..")
    }
    if (message == "R ekbar valo moto vebe nao..") {

      setunique("absolute")
      console.log(typeof (top, left));
      // settop(randomTop)
      // setleft(randomLeft)
      if (top == 100 && left == 500) {
        // settop(randomTop)
        settop(200)
        setleft(700)
        // setleft(randomLeft)
        console.log("nai");
        return
      }
      else {
        settop(Math.random() * 1000)
        setleft(Math.random() * 1000)
        console.log("change hocche");
      }
    }

    if (message == "bujse mair khaba") {
      // setmessage("")
    }

  }

  const handletopleft = () => {
    const randomTop = parseInt(Math.random() * 1000)
    const randomLeft = parseInt(Math.random() * 100)
    // top = 300
    // left = 900
    setunique("absolute")
  }


  console.log(top, left);

  return (
    <section className='h-screen items-center flex '>
      <div className='space-y-10 border-2 w-1/3 mx-auto p-5 rounded-2xl text-center'>
        <h1 className='text-3xl'>{message}</h1>
        <div className='flex justify-center  gap-5'>
          <button onClick={handleYES} className='btn'>Yes</button>
          <button onClick={handleNO} className={`btn ${unique} top-[${top}px] left-[${left}px]`}>No</button>
          <button className='btn' onClick={handletopleft}>handle</button>
        </div>
      </div>
    </section>
  )
}

export default App
