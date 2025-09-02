import { useState } from 'react'
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
  <div className=" fixed absolute top-0 left-0 z-50  w-full flex justify-center items-center gap-[100px] p-6">
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
<div className="relative w-full h-screen bg-gradient-to-b from-black via-[#0f172a] to-black flex justify-center items-center overflow-hidden">
  {/* Container for rotating particles */}
  {/* <div className="absolute w-full h-full">
    {[...Array(40)].map((_, i) => (
      <span
        key={i}
        className="absolute w-1 h-1 bg-blue-500 rounded-full animate-particle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 3}s`,
          animationDelay: `${Math.random() * 10}s`,
        }}
      ></span>
    ))}
  </div> */}

  {/* About Us Content */}
  <div className="text-center max-w-5xl p-1 relative z-10">
    <h2 className="text-white font-bricolage text-6xl font-bold mb-4">About Us</h2>
    <p className="text-gray-300 font-light uppercase tracking-[2px] text-xl mt-10">
      We’re not just another shopping site. Wheels In Frame is a smart
      comparison hub for bikers — helping riders save time, save money,
      and focus on what truly matters.
    </p>
    <p className="text-xl uppercase mt-4">
  for queries{" "}
  <span className="inline-block bg-green-400 text-black  px-1 py-1 rounded-[10px] ml-1 ">
    contact us
  </span>
</p>
<section className=" py-10 mt-40">
  <h2 className="text-4xl font-bricolage text-white text-center ">
    Featured Brands
  </h2>

  {/* Scrolling container */}
  <div className="overflow-hidden whitespace-nowrap relative rounded-[50px]">
    <div className=" flex justify-center items-center animate-scroll flex gap-16 mt-8">
      <img src="/brandlogo/alpinestars-seeklogo.png" alt="Studds" className="h-16" />
      {/* <img src="/brandlogo/axor-helmets-seeklogo.png" alt="Vega" className="h-16" /> */}
      {/* <img src="/brandlogo/ls2-helmets-seeklogo.png" alt="Axor" className="h-16" /> */}
      <img src="/brandlogo/kyt-helmet-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/airoh-helmet-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/arai-helmet-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/nhk-helmet-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/mt-helmets-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/studds-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/shoei-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/hjc-seeklogo.png" alt="Steelbird" className="h-16" />

      {/* Set 2 (duplicate for infinite loop) */}
      <img src="/brandlogo/alpinestars-seeklogo.png" alt="Studds" className="h-16" />
      {/* <img src="/brandlogo/axor-helmets-seeklogo.png" alt="Vega" className="h-16" /> */}
      {/* <img src="/brandlogo/ls2-helmets-seeklogo.png" alt="Axor" className="h-16" /> */}
      <img src="/brandlogo/kyt-helmet-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/airoh-helmet-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/arai-helmet-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/nhk-helmet-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/mt-helmets-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/studds-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/shoei-seeklogo.png" alt="Steelbird" className="h-16" />
      <img src="/brandlogo/hjc-seeklogo.png" alt="Steelbird" className="h-16" />

    </div>
  <div className="absolute top-0 left-0 h-full w-32 
                  bg-gradient-to-r from-black via-transparent to-transparent 
                  pointer-events-none rounded-r-full"></div>

  {/* Gradient overlay right */}
  <div className="absolute top-0 right-0 h-full w-32 
                  bg-gradient-to-l from-black via-transparent to-transparent 
                  pointer-events-none rounded-l-full"></div>
  </div>
</section>
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

{/* footer section */}
<footer className="flex justify-center items-center flex-col bg-gray-900 text-gray-400 py-4 text-center mt-8 border-t border-b">
  {/* two divs rows 1-> winf location mail 2-> name email pass */}
  {/* 1st row */}
  <div className ="flex relative w-full h-auto mt-8 flex-row justify-center items-center gap-20 mb-15 border-b">
<div className="w-[45%]  flex flex-col items-center gap-4">
  <div className="flex text-4xl font-bricolage text-grey-white-400 items-center justify-center">Wheels In Frame</div>
  <div className="mt-6 text-gray-300 font-light uppercase tracking-[2px] text-xl">
    Contact us for any queries, feedback, or support.
  </div>

  {/* Contact Info */}
  <div className="flex items-start gap-2 text-xl text-gray-400">
    <i className="fas fa-map-marker-alt"></i>
    Bangalore
  </div>
  <div className="flex items-start gap-2 text-xl text-gray-400">
    <i className="fas fa-envelope"></i>
    wheelsinframesupport@example.com
  </div>

  {/* Social Icons */}
<div className="flex flex-col items-start gap-3 mt-5">
  <div className="text-gray-300 uppercase tracking-[2px]">Follow us on</div>
  <div className="flex items-start gap-8 text-gray-400 text-2xl">
    <i className="fab fa-facebook-f"></i>
    <i className="fab fa-instagram"></i>
    <i className="fab fa-twitter"></i>
  </div>
</div>

</div>

    {/* 2nd row -> send a msg */}
  <div className="w-[45%] mt-4 flex flex-col items-start gap-4">
    <div className="text-3xl font-bricolage text-gray-400">Send Message</div>
    <input 
      type="text" 
      placeholder="Username" 
      className="w-[80%] p-3 rounded-md border border-gray-600 bg-black text-gray-300 focus:outline-none"
    />
    <textarea 
      placeholder="Send a message..." 
      className="w-[80%] p-3 rounded-md border border-gray-600 bg-black text-gray-300 focus:outline-none h-32 resize-none"
    ></textarea>
<button className="flex items-center justify-center bg-green-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md">
  Submit
</button>
<div className="h-[1px] bg-gray-700 mt-10"></div>


  </div>
  </div>
  <p className="text-xl ">
    © {new Date().getFullYear()} Wheels In Frame. All rights reserved.
  </p>
  <p className="text-l   mt-4 mb-2">
    Built for bikers by Tarigopula Sai Shashanth
  </p>
</footer>
    </>
  )
}

export default App
