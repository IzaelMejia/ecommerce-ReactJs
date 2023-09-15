// Mostar en todas
import React from 'react'
                //recibir el hijo que viene de Home 
const  Layout = ({children}) => {
  return (
    <div className='flex flex-col mt-20 items-center'>
        {/* Sirve como un encapsulador, para recibir cualquier elemento  */}
        {children}   
    </div>
  )
}

export default Layout