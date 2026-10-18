import React, { useState, useRef, useEffect } from 'react'

function CanvasContainer({activeTile, curCanvas, curCanvasName, canvasMap, setCanvasMap}) {
    const GRID_SIZE = 32;
      
    const TILE_TYPES = {
        EMPTY: 'blue',
        GRASS: 'green',
        WATER: 'blue',

    }
  
    const isMouseDown = useRef(false); // not a rendering var, so useRef
    //const [activeTileID, setActiveTileID] = useState('grey')

    useEffect(() =>{
        if(curCanvasName === '') return;
        console.log(curCanvasName);
        //TODO
        setCanvasMap(prev => {
            const updated = new Map(prev);
            
            updated.set(curCanvasName, grid);   // overwrites if already exists
            console.log(updated);
            return updated;
        });

    }, [curCanvasName])


    const [grid, setGrid] = useState(
        Array(GRID_SIZE * GRID_SIZE).fill('grey')

    );


    function UpdateTile(index){
        console.log(activeTile)
        setGrid((prevGrid) => {
            if(prevGrid[index] === activeTile) return prevGrid;

            const newGrid = [...prevGrid];
            newGrid[index] = activeTile;
            return newGrid;
        })
    }

    

    const handleTileMouseDown = (index) => {
        UpdateTile(index);
        isMouseDown.current = true;
        console.log("mouseDown");
    };

    function handleTileMouseEnter(index){
        if(isMouseDown.current) UpdateTile(index);
        console.log("mouseEnter" + isMouseDown.current);

    }

    function handleMouseUpGlobal(){
        console.log("mouseUP")
        isMouseDown.current = false;
    }



    return (


      <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`, 
          gap: '0px',
          width: '100%',
          height: '100%',
          aspectRatio: '1 / 1',       
          maxHeight: '94vh',         
          maxWidth: '94vh', 
          userSelect: 'none' 
          }}
          onMouseUp={handleMouseUpGlobal}
          onMouseLeave={handleMouseUpGlobal} 
          
          >
          {grid.map((tileKey, index) => {
              
              return <div
                      key={index}
                      onMouseDown={() => {
                          handleTileMouseDown(index);
                      }}
                      onMouseEnter={() => {
                          handleTileMouseEnter(index);
                      }}
                      style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: tileKey, 
                          
                      }}
                  />

          })}

          


      </div>
    )
}

export default CanvasContainer