import React from 'react'

import TilePalette from '../TilePalette/TilePalette';

function PaletteContainer({paletteVisible, activeTile, setActiveTile}) {



    return (
        
        <>
            
            {paletteVisible 
            ?
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                width: '174px', 
                backgroundColor: '#b35d99',
                padding: '4px'
                
                }}>
                <div>Palette</div>
                <TilePalette 
                    activeTile={activeTile}
                    setActiveTile={setActiveTile}/>
        
            </div>   
            :
            <div></div>
        
            }


        </>
        
    
    )
}

export default PaletteContainer