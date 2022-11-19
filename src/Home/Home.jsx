import React from 'react'
import asset from '../Image/asset 0.svg'



export default function Home() {
  return (
    <div className='text-center'>
      <div className='' style={{background:"#1abc9c" ,height:"100vh" }} >
        
        <img src={asset} alt="" width={'200px'} style={{'margin-top':'80px'}} />
        <h2 className='fw-bolder text-white' style={{'font-size':'55px' ,'margin-top':'45px'}}>START REACT </h2>
        <div className='text-white'>
        <div className='lines'>
            <div className='horiz-line-right bg-white'></div>
             <i class="fa-solid fa-star fs-3 p-4"></i>
             <div className='horiz-line-left bg-white'></div>
             
        </div>
        </div>
        <div >
        <h3 className='fw-4 fs-5 text-white '>Graphic Artist - Web Designer - Illustrator</h3>
        </div>
       

      </div>
     
    </div>
  )
}
