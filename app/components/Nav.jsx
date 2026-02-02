"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaBars,FaTimes} from 'react-icons/fa'


function Nav() {
    const [toggle, setToggle] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle=((prev)=>{
        setToggle((prev)=>!prev)
        setIsOpen((prev)=>!prev)
    })
    return (
       <>
           {/*desktop nav*/}
      <nav className="hidden h-20 md:flex  md:justify-between md:items-center pl-20 pr-20">
         <div>
             <Image src="/logo.svg" alt="logo" width={100} height={100} />
         </div>
          <div className="flex items-center">
              <Link className="mr-4 text-grey200 linkHover" href="#">Contact</Link>
              <Link className="mr-4 text-grey200 linkHover" href="#">Events</Link>
              <Link className="mr-4 text-grey200 linkHover" href="#">Careers</Link>
              <Link className="mr-4 text-grey200 linkHover" href="#">Support</Link>
          </div>
      </nav>
           <div onClick={handleToggle} className="text-4xl p-5 cursor-pointer md:hidden text-white">
               {toggle ? <FaTimes/> : <FaBars/>}
           </div>

           {/*mobile nav*/}
           {
               isOpen && <nav className="md:hidden bg-red-500 h-[180px] flex flex-col justify-between items-center p-5">

                   <div className="mb-4">
                       <Image src="/logo.svg" alt="logo" width={100} height={100} />
                   </div>
                   <div className="flex flex-col pr-3 text-2xl">
                       <Link className="mr-4 linkHover" href="#">Contact</Link>
                       <Link className="mr-4 linkHover" href="#">Events</Link>
                       <Link className="mr-4 linkHover" href="#">Careers</Link>
                       <Link className="mr-4 linkHover" href="#">Support</Link>
                   </div>
               </nav>
           }

       </>
    )
}

export default Nav
