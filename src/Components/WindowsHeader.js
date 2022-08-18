import React from 'react'
import "./WindowsHeader.scss"

const WindowsHeader = ({componentName}) => {
  return (
    <div className="top">
        <h2>{componentName}</h2>
        <button className='btn'>X</button>
    </div>
  )
}

export default WindowsHeader