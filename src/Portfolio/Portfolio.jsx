import React from 'react'
import asset1 from '../Image/asset 1.png'
import asset2 from '../Image/asset 2.png'
import asset3 from '../Image/asset 3.png'
import asset4 from '../Image/asset 4.png'
import asset5 from '../Image/asset 5.png'
import asset6 from '../Image/asset 6.png'

export default function Portfolio() {
  return (
    <>
    
    <div className='text-center py-5 mt-3  ' style={{color:'#2c3e50'}}> 
        <h2 className='fs-1 fa-solid '>P O R T F O L I O</h2>
        <div className='lines'>
        <div className='horiz-line-right m-2' style={{background:'#2c3e50'}}></div>
        <div><i class="fa-solid fa-star fs-3 "></i></div>
        <div className='horiz-line-left m-2' style={{background:'#2c3e50'}}></div>
        </div>
    </div>
    <div className='container '>
        <div className="row g-4 mb-5 ">
          <div className='col-md-4 position-relative'>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img src={asset1} alt="" className='w-100 h-100 rounded-5 ' />
                <div className='layer text-center position-absolute rounded-5 ' >
                  <div className='layer-content '>
                  <i class="fa-solid fa-plus"></i>
                  </div>
                
                </div>
                <div class="modal fade " id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      
      <div className='text-center py-2'> 
          <h2 class="modal-title fs-2 fa-solid" id="exampleModalLabel1">Wooden Cabin</h2>
        </div>
      <div className='lines'>
        <div className='horiz-line-right m-2' style={{background:'#2c3e50'}}></div>
        <div><i class="fa-solid fa-star fs-3 "></i></div>
        <div className='horiz-line-left m-2' style={{background:'#2c3e50'}}></div>
        </div>
      <div class="modal-body border-0 d-flex justify-content-center">
        <img src={asset1} alt="" className='w-50 h-50 rounded-5'  />
      </div>
      <div className='text-center text-dark'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptates autem veniam repellat. Reiciendis, dolorum? Impedit voluptate iusto consequatur quod? Unde quam minus molestias dolorem aspernatur expedita, hic officia perspiciatis?</p>

      </div>
      <div className='w-25 m-auto mb-2'>
        <button className='btn btn-secondary px-3  fw-3' data-bs-dismiss="modal"><span>x</span> Close Window</button>
      </div>
      
    </div>
  </div>
</div>
            </div>
          </div>
          <div className='col-md-4 position-relative'>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img src={asset2} alt="" className='w-100 h-100 rounded-5' />
                <div className='layer text-center position-absolute rounded-5 ' >
                  <div className='layer-content '>
                  <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div class="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      
      <div className='text-center py-2'> 
          <h2 class="modal-title fs-2 fa-solid" id="exampleModalLabel2">Cake</h2>
        </div>
      <div className='lines'>
        <div className='horiz-line-right m-2' style={{background:'#2c3e50'}}></div>
        <div><i class="fa-solid fa-star fs-3 "></i></div>
        <div className='horiz-line-left m-2' style={{background:'#2c3e50'}}></div>
        </div>
      <div class="modal-body border-0 d-flex justify-content-center">
        <img src={asset2} alt="" className='w-50 h-50 rounded-5'  />
      </div>
      <div className='text-center text-dark'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptates autem veniam repellat. Reiciendis, dolorum? Impedit voluptate iusto consequatur quod? Unde quam minus molestias dolorem aspernatur expedita, hic officia perspiciatis?</p>

      </div>
      <div className='w-25 m-auto mb-2'>
        <button className='btn btn-secondary px-3  fw-3' data-bs-dismiss="modal"><span>x</span> Close Window</button>
      </div>
      
    </div>
  </div>
</div>
            </div>

          </div>
          <div className='col-md-4 position-relative'>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <img src={asset3} alt="" className='w-100 h-100 rounded-5' />
                <div className='layer text-center position-absolute rounded-5 ' >
                  <div className='layer-content '>
                  <i class="fa-solid fa-plus"></i>
                  </div>
                
                </div>
                <div class="modal fade " id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      
      <div className='text-center py-2'> 
          <h2 class="modal-title fs-2 fa-solid" id="exampleModalLabel3">Tent</h2>
        </div>
      <div className='lines'>
        <div className='horiz-line-right m-2' style={{background:'#2c3e50'}}></div>
        <div><i class="fa-solid fa-star fs-3 "></i></div>
        <div className='horiz-line-left m-2' style={{background:'#2c3e50'}}></div>
        </div>
      <div class="modal-body border-0 d-flex justify-content-center">
        <img src={asset3} alt="" className='w-50 h-50 rounded-5'  />
      </div>
      <div className='text-center text-dark'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptates autem veniam repellat. Reiciendis, dolorum? Impedit voluptate iusto consequatur quod? Unde quam minus molestias dolorem aspernatur expedita, hic officia perspiciatis?</p>

      </div>
      <div className='w-25 m-auto mb-2'>
        <button className='btn btn-secondary px-3  fw-3' data-bs-dismiss="modal"><span>x</span> Close Window</button>
      </div>
      
    </div>
  </div>
</div>
            </div>

          </div>
          <div className='col-md-4 position-relative'>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal4">
                <img src={asset4} alt="" className='w-100 h-100 rounded-5' />
                <div className='layer text-center position-absolute rounded-5 ' >
                  <div className='layer-content '>
                  <i class="fa-solid fa-plus"></i>
                  </div>
                
                </div>
                <div class="modal fade " id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      
      <div className='text-center py-2'> 
          <h2 class="modal-title fs-2 fa-solid" id="exampleModalLabel4">video Games</h2>
        </div>
      <div className='lines'>
        <div className='horiz-line-right m-2' style={{background:'#2c3e50'}}></div>
        <div><i class="fa-solid fa-star fs-3 "></i></div>
        <div className='horiz-line-left m-2' style={{background:'#2c3e50'}}></div>
        </div>
      <div class="modal-body border-0 d-flex justify-content-center">
        <img src={asset4} alt="" className='w-50 h-50 rounded-5'  />
      </div>
      <div className='text-center text-dark'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptates autem veniam repellat. Reiciendis, dolorum? Impedit voluptate iusto consequatur quod? Unde quam minus molestias dolorem aspernatur expedita, hic officia perspiciatis?</p>

      </div>
      <div className='w-25 m-auto mb-2'>
        <button className='btn btn-secondary px-3  fw-3' data-bs-dismiss="modal"><span>x</span> Close Window</button>
      </div>
      
    </div>
  </div>
</div>
            </div>

          </div>
          <div className='col-md-4 position-relative'>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal5">
                <img src={asset5} alt="" className='w-100 h-100 rounded-5' />
                <div className='layer text-center position-absolute rounded-5 ' >
                  <div className='layer-content '>
                  <i class="fa-solid fa-plus"></i>
                  </div>
                
                </div>
            </div>
            <div class="modal fade " id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      
      <div className='text-center py-2'> 
          <h2 class="modal-title fs-2 fa-solid" id="exampleModalLabel5">Save</h2>
        </div>
      <div className='lines'>
        <div className='horiz-line-right m-2' style={{background:'#2c3e50'}}></div>
        <div><i class="fa-solid fa-star fs-3 "></i></div>
        <div className='horiz-line-left m-2' style={{background:'#2c3e50'}}></div>
        </div>
      <div class="modal-body border-0 d-flex justify-content-center">
        <img src={asset5} alt="" className='w-50 h-50 rounded-5'  />
      </div>
      <div className='text-center text-dark'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptates autem veniam repellat. Reiciendis, dolorum? Impedit voluptate iusto consequatur quod? Unde quam minus molestias dolorem aspernatur expedita, hic officia perspiciatis?</p>

      </div>
      <div className='w-25 m-auto mb-2'>
        <button className='btn btn-secondary px-3  fw-3' data-bs-dismiss="modal"><span>x</span> Close Window</button>
      </div>
      
    </div>
  </div>
</div>

          </div>
          <div className='col-md-4 position-relative'> 
   

<div class="modal fade " id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      
      <div className='text-center py-2'> 
          <h2 class="modal-title fs-2 fa-solid" id="exampleModalLabel6">submarine</h2>
        </div>
      <div className='lines'>
        <div className='horiz-line-right m-2' style={{background:'#2c3e50'}}></div>
        <div><i class="fa-solid fa-star fs-3 "></i></div>
        <div className='horiz-line-left m-2' style={{background:'#2c3e50'}}></div>
        </div>
      <div class="modal-body border-0 d-flex justify-content-center">
        <img src={asset6} alt="" className='w-50 h-50 rounded-5'  />
      </div>
      <div className='text-center text-dark'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptates autem veniam repellat. Reiciendis, dolorum? Impedit voluptate iusto consequatur quod? Unde quam minus molestias dolorem aspernatur expedita, hic officia perspiciatis?</p>

      </div>
      <div className='w-25 m-auto mb-2'>
        <button className='btn btn-secondary px-3  fw-3' data-bs-dismiss="modal"><span>x</span> Close Window</button>
      </div>
      
    </div>
  </div>
</div>
            
            <div data-bs-toggle="modal" data-bs-target="#exampleModal6">
                <img src={asset6} alt="" className='w-100 h-100 rounded-5'  />
                <div className='layer text-center position-absolute rounded-5 ' >
                  <div className='layer-content '>
                  <i class="fa-solid fa-plus"></i>
                  </div>
                
                </div>
            </div>

          </div>

          
          
        </div>

    </div>
    </>
  )
}
