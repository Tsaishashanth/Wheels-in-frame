import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="relative w-full ">
  {/* Hero Image */}
  <img
    src="public/heroimage2.png"
    alt="Wheels in Frame Hero"
    className="w-full h-full object-cover"
  />


  {/* Navbar */}
  <div className=" fixed absolute top-0 left-0 w-full flex justify-center items-center gap-[100px] p-6">
    {/* Logo Placeholder */}
    {/* <img src="public/logo.png" alt="Logo" className="h-10" /> */}

    {/* Nav Links */}
<div className="flex gap-12 font-bricolage font-light uppercase tracking-[2px] text-sm text-gray-400">
  <h1 className="hover:text-white transition-colors">Home</h1>
  <h1 className="hover:text-white transition-colors">About Us</h1>
  <h1 className="hover:text-white transition-colors">Products</h1>
  <h1 className="hover:text-white transition-colors">Contact</h1>
</div>
    


    {/* Auth Buttons */}
    <div className="flex gap-6 text-gray-200 font-light uppercase tracking-[2px] text-sm">
      <h1 className="hover:text-white transition-colors">Login</h1>
      <h1 className="hover:text-white transition-colors">Signup</h1>

      
    </div>
  </div>
</div>
{/* aboutus section */}
{/* outercontainer,inner- col,gap */}
<div className="flex w-full h-full justify-center items-center  bg-black">
  <div className="flex flex-col p-4 gap-6 text-center mt-8 mb-8">
    <div className="font-bricolage text-white text-4xl">
      Wheels In Frame
    </div>
    <div className="text-gray-400 font-light uppercase text-2xl">
      We’re not just another shopping site, we’re a smart comparison hub for bikers!
    </div>
    <div className ="text-gray-400 font-light text-xl">Wheels in Frame helps riders save time, save money, and focus on what truly matters.</div>
  </div>
</div>


{/* menu section */}
<div className="flex items-center justify-center  w-full h-auto gap-[20px] mt-8">
  <div className="flex flex-col items-center justify-center w-[30%] p-4 gap-[12px] transition duration-300 hover:shadow-[0_0] hover:scale-105">
    <img src="/helmet_image.png" className="w-[100%] rounded-[20px]"/>
    <h1 className="font-light uppercase tracking-[2px] text-sm text-gray-400">Helmets</h1>
  </div>
  <div className="flex flex-col items-center justify-center w-[30%] p-4 gap-[12px] tansition duration-300 hover:shadow-[0] hover:scale-105">
    <img src="/riddingjacket_image.png" className="w-[100%] rounded-[20px]"/>
    <h1 className="font-light uppercase tracking-[2px] text-sm text-gray-400"> jackets</h1>
  </div>
  <div className="flex flex-col items-center justify-center w-[30%] p-4 gap-[12px] transition duration-300 hover:shadow-[0] hover:scale-105">
    <img src="/riddinggloves_img.png" className="w-[100%] rounded-[20px]"/>
    <h1 className="font-light uppercase tracking-[2px] text-sm text-gray-400"> gloves</h1>
  </div>
  <div className="flex flex-col items-center justify-center w-[30%] p-4 gap-[12px] transition duration-300 hover:shadow-[0] hover:scale-105">
    <img src="/riddingshoes_img.png" className="w-[100%] rounded-[20px]"/>
    <h1 className="font-light uppercase tracking-[2px] text-sm text-gray-400"> shoes</h1>
  </div>
</div>


<footer className="bg-gray-900 text-gray-400 py-4 text-center mt-8  ">
  <p className="text-xl mt-1">
    © {new Date().getFullYear()} Wheels In Frame. All rights reserved.
  </p>
  <p className="text-l mt-1 mt-4 mb-2">
    Built for bikers by Tarigopula Sai Shashanth
  </p>
</footer>
    </>
  )
}

export default App
