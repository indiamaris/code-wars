export const AppContainer = ({children}) => {
    return ( 
        <div className="container-fluid">

  <div className="d-flex justify-content-end p-3 ">
      <div className="text-end img-container spinOnHover">  
            <img  className='img-icon  'src="src/assets/india-head.png" alt="" />
      </div>
          </div>
        <div className='container  p-3   justify-content-between '>
            {children}
           </div>        </div>
     );
}