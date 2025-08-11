import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="flex flex-row justify-center items-center gap-[30px] h-auto w-auto ">
  {/* <div className="h-8 max-w-[5%] bg-black ">
    <img src="public/57006.jpg" alt="Logo" />
  </div> */}

  <div className="flex justify-center items-center h-12 w-[40%] gap-[100px] bg-black text-white rounded-[20px]">
    <h1>Home</h1>
    <h1>About Us</h1>
    <h1>Products</h1>
    <h1>Contact</h1>
  </div>

  <div className="flex justify-center items-center h-12 w-[10%] bg-black text-white gap-[20px] rounded-[20px]">
    <h1>Login</h1>
    <h1>Signup</h1>
  </div>
</div>

<section className=" ">
  <img src="public/heroimage2.png" alt="Wheels in Frame Hero" className=" " />
</section>

    </>
  )
}

export default App
