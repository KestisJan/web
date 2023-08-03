import React from 'react'

function Projectitem({image, name}) {
  return (
    <div className='projectItem'> 
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1>{name}</h1>
    </div>
  )
}

export default Projectitem