import  { useState } from 'react'

import TilePalette from './TilePalette';
import NewColourPicker from './NewColourPicker';
import SavedCanvas from './SavedCanvas';

function ToolWindowContainer({
        activeTile, 
        setActiveTile, 
        activeSidebar, 
        canvasMap,
        setCanvasMap,
        selectedCanvasName,
        setSelectedCanvasName,
        loadTrigger,
        setLoadTrigger,
        
    }) {


    const [tiles, setTiles] = useState(() => new Set());


    


    function HandleNewTile(tile) {

    setTiles(prevTiles => {
        const updatedTiles = new Set(prevTiles);
        updatedTiles.add(tile);
        return updatedTiles;
    });
}


    function RenderActiveToolWindow(){
        switch(activeSidebar){
            case 'Palette':
                return <TilePalette activeTile={activeTile} setActiveTile={setActiveTile} tiles={tiles}/>
            case 'New Color':
                return <NewColourPicker setNewTile={HandleNewTile}/>
            case 'New Tile':
                return <div/>
            case 'Load':
                return <SavedCanvas
                            canvasMap={canvasMap} 
                            setCanvasMap={setCanvasMap}
                            selectedCanvasName={selectedCanvasName} 
                            setSelectedCanvasName={setSelectedCanvasName}
                            loadTrigger={loadTrigger}
                            setLoadTrigger={setLoadTrigger}
                        />
        }
    }

    return (
        <div 
            style={{
                display: 'flex', 
                flexDirection: 'column', 
                width: '174px', 
                minWidth: '174px',
                padding: '8px'
            }}
            className='tool-window-container'
        
        
        >
            {RenderActiveToolWindow()}
            
            
    
        </div>   
        
     
    )
}

export default ToolWindowContainer