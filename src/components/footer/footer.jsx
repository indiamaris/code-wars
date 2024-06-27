
import { useState } from 'react';
import './circularMenu.css';
export const Footer = () => {
      const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
    return (          
        <div className='fixed-bottom py-2 px-2'>
            {/* <div className='text-white text-end'>
         @indiamaris</div> */}
  
     
          </div>    );
}