import React from 'react'

export default function About() {
  return (
    <>
    <div style={{background:"#1abc9c"}} className='py-5 mt-3 text-white'>
    <div className='text-center  ' > 
        <h2 className='fs-2 fa-solid'>A B O U T</h2>
        <div className='lines'>
            <div className='horiz-line-right bg-white m-2'></div>
             <i class="fa-solid fa-star fs-3 "></i>
             <div className='horiz-line-left bg-white m-2'></div>
        </div>
         
    </div>
    <div className='container'>
        <div className="row ">
            <div className="col-md-6 d-flex justify-content-end py-5">
                <div>
                    <p>Freelancer is a free bootstrap theme <br />
                    created by Route. The download <br />
                    includes the complete source files <br />
                    including HTML, CSS, and JavaScript <br />
                    as well as optional SASS stylesheets <br />
                    for easy customization.</p>
                </div>
            </div>
            <div className="col-md-6 py-5">
                <div>
                    <p>You can create your own custom <br />
                    avatar for the masthead, change the <br />
                    icon in the dividers, and add your <br />
                    email address to the contact form to <br />
                    make it fully functional!.</p>
                </div>
            </div>
        </div>
        

    </div>
    </div>
    
    </>
  )
}
