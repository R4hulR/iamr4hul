import './Nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { IoMdBookmarks } from "react-icons/io";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useState } from 'react';
const Nav = () => {
  const[activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}><IoHomeOutline /></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><FaUserAstronaut /></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experinece'?'active':''}><IoMdBookmarks /></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'?'active':''}><MdOutlineMonitorHeart /></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><AiFillMessage /></a>
    </nav>
  )
}

export default Nav