import React from 'react'

function Userinfo(props) {
    
  return (
    <div>
        
         <h1 className="text-black">Name:{props.data.name}</h1>
        <h1 className="text-black">ID: {props.data.city}</h1>
       
    </div>
  )
}

export default Userinfo