import { useRef, useEffect } from 'react'
import { BIN_URL, BIN_RUD_KEY } from '../data/jsonBinConfig';

function CanvasContainer({
        activeTile, 
        curCanvasName, 
        canvasMap, 
        selectedCanvasName, 
        setCanvasMap, 
        saveTrigger, 
        loadTrigger,
        grid,
        setGrid
    }) {
      
    
    
  
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

    function EraseTile(index){
        setGrid((prevGrid) => {
            

            const newGrid = [...prevGrid];
            newGrid[index] = 'grey';
            return newGrid;
        })
    }

    

    const handleTileMouseDown = (index, e) => {
        if(e.button === 0){

            UpdateTile(index, e.button);
            isMouseDown.current = true;
        }
        else if(e.button === 2){
            EraseTile(index);
            isMouseDown.current = true;

        }
    };

    function handleTileMouseEnter(index, e){
        if (!isMouseDown.current) return;

        if (e.buttons === 1) {
            UpdateTile(index); 
        } else if (e.buttons === 2) {
            EraseTile(index); 
        }
    }

    function handleMouseUpGlobal(){
        isMouseDown.current = false;
    }



    return (


      <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${32}, minmax(0, 1fr))`, 
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
                      onMouseDown={(e) => {
                          handleTileMouseDown(index, e);
                      }}
                      onMouseEnter={(e) => {
                          handleTileMouseEnter(index, e);
                      }}
                      onContextMenu={(e) => e.preventDefault()}
                      style={{
                          backgroundColor: tileKey, 
                          
                      }}
                  />

          })}

          


      </div>
    )
}

export default CanvasContainer