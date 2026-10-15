import React, { useState, useEffect } from 'react'

import TilePalette from './TilePalette';
import NewColourPicker from './NewColourPicker';

function ToolWindowContainer({activeTile, setActiveTile, activeSidebar, setActiveSidebar}) {
    const [newTile, setNewTile] = useState(null)
    const [tiles, setTiles] = useState(() => new Set());


    useEffect(() => {
        if (newTile === null) return;

        setTiles(prevTiles => {
            const updatedTiles = new Set(prevTiles);
            updatedTiles.add(newTile);
            return updatedTiles;
        });
    }, [newTile]);


    function RenderActiveToolWindow(){
        switch(activeSidebar){
            case 'Palette':
                return <TilePalette activeTile={activeTile} setActiveTile={setActiveTile} tiles={tiles}/>
            case 'New Color':
                return <NewColourPicker setNewTile={setNewTile}/>

            case 'New Tile':
                return <div/>
        }
    }

    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            width: '174px', 
            backgroundColor: '#b35d99',
            padding: '8px'
        }}>
            {RenderActiveToolWindow()}
            
            
    
        </div>   
        
     
    )
}

export default ToolWindowContainer