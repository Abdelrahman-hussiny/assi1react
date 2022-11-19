import React from 'react'
import { Link }from 'react-router-dom'


export default function Nav() {
  return (
<div>
<nav class="navbar navbar-expand-lg py-1 fixed-top " style={{background:"#2c3e50"}}>
  <div class="container d-flex justify-content-around">
    <Link class="navbar-brand text-white fs-4 fw-bolder  ms-5 " to="/" >START REACT</Link>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='text-white fa-solid'> M e n u  <i class="fa-solid fa-bars-staggered text-white  " > </i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 ">
      {/* <li class="nav-item">
          <Link class="nav-link active " aria-current="page" to="/">Home</Link>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link  " aria-current="page" to="Portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  " to="About">About</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link " to="Contact">Contact</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
</div>
    
  )
}
