//import React, { useState, useEffect } from 'react'
import TileBrush from '../Thumbnails/TileBrush'

function TilePalette({activeTile, setActiveTile, tiles}) {
    
    

    
    

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignContent: 'stretch'}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}} className='tile-palette'>Palette</div>
            {[...tiles].map((colour, index) => (
                
                <TileBrush 
                    key={index} 
                    colour={colour} 
                    setActiveTile={setActiveTile} 
                    isActiveTile={activeTile === colour}/>
            ))}


        </div>
    )
}

export default TilePalette