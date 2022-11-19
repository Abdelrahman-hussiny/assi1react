import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='p-1  text-center text-white ' style={{background:'#2c3e50'}}>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div>
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive
              <p>Clark, MO 65243</p>
              </p>
              
            </div>

          </div>
          <div className='col-md-4'>
            <div>
            <h3>AROUND THE WEB</h3>
            <div>
             <span className='m-2'><i class="border border-1 rounded-circle p-2 fa-brands fa-facebook"></i></span>
             <span className='m-2'><i class=" border border-1 rounded-circle p-2 fa-brands fa-twitter"></i></span>
             <span className='m-2'><i class="border border-1 rounded-circle p-2 fa-brands fa-linkedin-in"></i></span>
             <span className='m-2'><i class="border border-1 rounded-circle p-2 fa-brands fa-dribbble"></i></span>
             </div>
            </div>

          </div>
          <div className='col-md-4'>
            <div>
              <h3>ABOUT FREELANCER</h3>

              <p>Freelance is a free to use, MIT
                <p>licensed Bootstrap theme created by
                <p>Route</p>
                </p>
              </p>
           


            </div>

          </div>
        </div>

      </div>


     
      
    </div> 
    
    <div className='bg-dark text-center text-white p-1 '>
      
        <h6>Copyright © Your Website 2021</h6>
      
      </div>
    </>
  )
}
