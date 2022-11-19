import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='text-center py-5' > 
        <h2 className='fs-1 fa-solid  mt-3 '>C O N T A C T - M E</h2>
        <div className='lines'>
        <div className='horiz-line-right m-2' style={{background:'#2c3e50'}}></div>
        <div><i class="fa-solid fa-star fs-3 "></i></div>
        <div className='horiz-line-left m-2' style={{background:'#2c3e50'}}></div>
        </div>
       
    </div>
    <div className='text-center'>
        <form action="" >
            <input type="text" className='form-control w-50 border-0 m-auto p-3 fs-4' placeholder='Name' />
            <hr className='w-50 m-auto'/>
            <input type="text" className='form-control w-50 border-0 m-auto p-3 fs-4' placeholder='Email' />
            <hr className='w-50 m-auto'/>
            <input type="text" className='form-control w-50 border-0 m-auto p-3 fs-4' placeholder='Phone Number' />
            <hr className='w-50 m-auto'/>
            <textarea name="" id="" cols="10" rows="3" className='form-control w-50 border-0 m-auto p-3 fs-4' placeholder='Message'></textarea>
            <hr className='w-50 m-auto'/>
            <button className='btn btn-secondary fs-4 px-4 mt-3 mb-3'>Send</button>
        </form>
    </div>
    </>
  )
}
