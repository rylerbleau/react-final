import React from 'react'

function Tile({color}) {
    const thumbnailStyle = {
        width: '100%',
        height: '100%',
        backgroundColor: color  
    }

     
  return (
    <div style={thumbnailStyle}></div>
  )
}

export default Tile