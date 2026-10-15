import React, { useState } from 'react'
import TileBrush from '../TileBrush/TileBrush'

function TilePalette({activeTile, setActiveTile}) {
    const colours = ['grey', 'blue', 'green', 'purple', 'orange', 'yellow']

    

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignContent: 'stretch'}}>
            {colours.map((colour, index) => (
                
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