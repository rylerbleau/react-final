import { useState, useRef, useEffect } from 'react'
import { BIN_URL, BIN_RUD_KEY } from '../data/jsonBinConfig';

function CanvasContainer({activeTile, curCanvas, curCanvasName, canvasMap, selectedCanvasName, setCanvasMap, saveTrigger, loadTrigger}) {
    const GRID_SIZE = 32;
      
    
    const [grid, setGrid] = useState(
        Array(GRID_SIZE * GRID_SIZE).fill('grey')

    );
  
    const isMouseDown = useRef(false); // not a rendering var, so useRef
    //const [activeTileID, setActiveTileID] = useState('grey')


    async function UpdateCanvasData(updatedCanvasMap) {

        const payload = {
            canvases: Object.fromEntries(updatedCanvasMap)
        };


        try {
            const response = await fetch(BIN_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Access-Key': BIN_RUD_KEY
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();


            if (!response.ok) {
                throw new Error(result.message);
            }

            console.log("Update suceeded");
        } catch (error) {
            console.error("Update failed: ", error);
        }
    }

    useEffect(() =>{
        if(curCanvasName === '') return;
        if (saveTrigger === 0) return;

        console.log(curCanvasName);
        //TODO
        
        const updated = new Map(canvasMap);
            
        updated.set(curCanvasName, grid);   // overwrites if already exists
        setCanvasMap(updated);
        UpdateCanvasData(updated);

    }, [curCanvasName, saveTrigger])


   

    useEffect(() =>{
        if(selectedCanvasName === '') return;
        if(loadTrigger === 0) return;

        setGrid(canvasMap.get(selectedCanvasName));
    }, [loadTrigger])
    


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
                      className='tile'
                      onMouseDown={() => {
                          handleTileMouseDown(index);
                      }}
                      onMouseEnter={() => {
                          handleTileMouseEnter(index);
                      }}
                      style={{
                          backgroundColor: tileKey, 
                          
                      }}
                  />

          })}

          


      </div>
    )
}

export default CanvasContainer