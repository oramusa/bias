
import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
    <p>Welcome to the Home Page!</p>
      <Link to="/login">Login</Link>
   <br></br>
      <Link to="/register">Register</Link>
      <br></br>
      <Link to="/dashboard">dashboard</Link>
 

    </div>
  

  )
}

export default Home
