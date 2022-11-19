import React from 'react'


export default function Nav() {
  return (
<div>
<nav class="navbar navbar-expand-lg py-1 fixed-top " style={{background:"#2c3e50"}}>
  <div class="container d-flex justify-content-around">
    <a class="navbar-brand text-white fs-4 fw-bolder  ms-5 " href="/" >START REACT</a>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='text-white fa-solid'> M e n u  <i class="fa-solid fa-bars-staggered text-white  " > </i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 ">
      {/* <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="/">Home</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link  " aria-current="page" href="Portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="About">About</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link " href="Contact">Contact</a>
        </li> 
      </ul>
    </div>
  </div>
</nav>
</div>
    
  )
}
