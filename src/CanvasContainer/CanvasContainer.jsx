import React, { StrictMode } from 'react'
import Tilemap from '../Tilemap/Tilemap'

function CanvasContainer({activeTile}) {
  return (
    
        <Tilemap activeTile={activeTile}/>

  )
}

export default CanvasContainer