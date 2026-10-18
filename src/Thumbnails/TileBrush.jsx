import React from 'react'

function TileBrush({colour, setActiveTile, isActiveTile}) {
    

    function brushSelectHandler(){
 
      setActiveTile(colour)
    }
     
  return (
    <div 
      className={`tile-brush ${isActiveTile ? 'active' : ''}`}
      style={{backgroundColor: colour}}
      onMouseDown={brushSelectHandler}
    
    />
  )
}

export default TileBrush