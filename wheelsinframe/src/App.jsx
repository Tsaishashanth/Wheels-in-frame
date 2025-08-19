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
  <div className="absolute top-0 left-0 w-full flex justify-center items-center gap-[100px] p-6">
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
{/* menu section */}
<div className="flex items-center justify-center  w-full h-auto gap-[20px] mt-8">
  <div className="flex flex-row items-center justify-center w-[30%] p-4 ">
    <img src="/helmet_image.png" className="w-[100%] rounded-[20px]"/>
  </div>
  <div className="flex flex-row items-center justify-center w-[30%] p-4 ">
    <img src="/riddingjacket_image.png" className="w-[100%] rounded-[20px]"/>
  </div>
  <div className="flex flex-row items-center justify-center w-[30%] p-4 ">
    <img src="/riddinggloves_img.png" className="w-[100%] rounded-[20px]"/>
  </div>
  <div className="flex flex-row items-center justify-center w-[30%] p-4 ">
    <img src="/riddingshoes_img.png" className="w-[100%] rounded-[20px]"/>
  </div>
</div>

    </>
  )
}

export default App
