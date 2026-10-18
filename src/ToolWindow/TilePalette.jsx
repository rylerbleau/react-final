import React, { useState, useEffect } from 'react'
import TileBrush from '../Thumbnails/TileBrush'
import colorNameToHex from '@uiw/react-color-name';

function TilePalette({activeTile, setActiveTile, tiles}) {
    
    

    
    

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignContent: 'stretch'}}>
            <div>Palette</div>
            <input style={{maxWidth: '95%', borderRadius: '4px', backgroundColor: 'grey'}}></input>
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