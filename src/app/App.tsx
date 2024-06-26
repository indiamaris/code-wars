import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/material-symbols-outlined';
import './App.css'
import { RoundUpToFiveUI } from '../challenge/round-up-to-next-multiple-of-five/round-up-to-next-multiple-of-five.UI';
import { Link } from 'react-router-dom';

function App() {
 

  return (
    <>
      <div className='container-fluid px-3 pt-5  mb-1 justify-content-between '>
      
          <div className='d-flex flex-column align-content-around justify-content-center
           side-panel pb-4  pb-lg-1  '>
          
                     <h3 className='text-white full'>think and&nbsp;practice</h3>
          <p className='title-bigger'> CODE <br />
            CHALLENGES </p>
            <p className='ps-1'> and, obviously, the <span className='text-color-highligth'>solutions</span > </p>  
       
        </div>
<div className="row gx-4 gy-5 card-levels pt-5  justify-content-center ">
              <div className="col-4 col-lg-7 ">

                <div className="p-4  card-easy ">
                  {/* <span className='text-white'>relax & chilli  while solve</span> <br /><br /> */}
                  
    
      <div className='text-center'><img src="src/assets/water_drop_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />  </div>  <br /><div className='text-center'>  Easy</div>
    </div>
          </div>
          <br />
  <div className="col-4 col-lg-7">
          <div className="p-4  card-medium ">
                    {/* <span className='text-white'>get curious while solve </span> <br /><br /> */}

                  <div className='text-center'><img src="src/assets/local_fire_department_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></div> <br />
                    <div className="text-center">Medium</div> 
                  
    </div>
  </div>
  <div className="col-4 col-lg-7  ">
   <div className="p-4  card-hard  ">
                   
     
                  <div className='text-center'> <img src="src/assets/emergency_heat_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></div><br />
                  <div className="text-center"> Hard</div>
    </div>
  </div>
</div>
                
        <div className='fixed-bottom py-2 px-2'>
      <div className='text-end '>
          <img  className='img-icon'src="src/assets/icon-mind.svg" alt="" />
          </div></div>
        
                </div>
    </>
  )
}

export default App
