import React from 'react'

function Userinfo(props) {
    console.log(props.register)
  return (
    <div>
        
         <h1 className="text-black">Name:{props.data.name}</h1>
        <h1 className="text-black">City: {props.data.city}</h1>
       
    </div>
  )
}

export default Userinfo