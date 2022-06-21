import React from 'react'
import Dental from '../Dental/Dental'
import Navbar from '../Header/Navbar'
import Contact from '../Shared/About/Contact'

export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Contact></Contact>
        <Dental></Dental>
    </div>
  )
}
