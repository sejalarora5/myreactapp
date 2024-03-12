import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div >
        <Navbar/>
        <Link to={'/login'}>Login
        </Link>
    </div>
  )
}
