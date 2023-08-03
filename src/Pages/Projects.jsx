import React from 'react'
import Projectitem from '../Components/Projectitem'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        <Projectitem/>
        <Projectitem/>
      </div>
    </div>
  )
}

export default Projects