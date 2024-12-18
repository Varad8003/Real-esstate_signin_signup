import { useEffect, useState } from "react"
import { assets } from "../assets/assets"
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
const Navbar = () => {
  const [showMobileMenu,setshowMobileMneu]=useState(false);
  const[Attop,setAttop]=useState(true);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  useEffect(()=>{
if(showMobileMenu){
  document.body.style.overflow = 'hidden';
}
else{
  document.body.style.overflow = 'auto';
}
return ()=>{
  document.body.style.overflow='auto'
};
},[showMobileMenu])

useEffect(()=>{
  const handleScroll=()=>{
    setAttop(window.scrollY==0);
  }
  window.addEventListener("scroll",handleScroll);

  return ()=>{
    window.removeEventListener("scroll",handleScroll);
  }
})
  return (
    <div className={`fixed top-4 left-0 w-full transition-all duration-300 ${
        Attop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
    <div className="container mx-auto flex justify-between items-start  px-6 md:px-20 lg:px-32 bg-transparent top-0">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
            <a onClick={()=>{
          setshowMobileMneu(false);
        }}  href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
            <a onClick={()=>{
          setshowMobileMneu(false);
        }} href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
            <a onClick={()=>{
          setshowMobileMneu(false);
        }} href="#About" className="cursor-pointer hover:text-gray-400">About</a>
            <a onClick={()=>{
          setshowMobileMneu(false);
        }} href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>
        <div className="flex gap-4">
        <button className="hidden md:block bg-white px-8 py-2 rounded-full ">Sign Up</button>
        <button className="hidden md:block bg-blue-500 px-8 py-2 rounded-full">Sign In</button>
        </div>
        <img onClick={()=>{
          setshowMobileMneu(true);
        }}  src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
    </div>
    {/* ---- mobile menu------*/}
    <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' :'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
      <div className="flex justify-end p-6 cursor-pointer">
        <img onClick={()=>{
          setshowMobileMneu(false);
        }} src={assets.cross_icon} className="w-6" alt="" />
      </div>
      <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
        <a href="#Home" className="px-4 py-2 rounded-full inline-block" >Home</a>
        <a href="#About" className="px-4 py-2 rounded-full inline-block" >About</a>
        <a href="#Project" className="px-4 py-2 rounded-full inline-block" >Projects</a>
        <a href="#Testimonials" className="px-4 py-2 rounded-full inline-block" >Testimonials</a>
      </ul>
    </div>
    </div>
  )
}

export default Navbar