import { useState, useEffect } from 'react'
import Toolbar from './Toolbar/Toolbar'
import CanvasContainer from './CanvasContainer/CanvasContainer'
import ToolWindowContainer from './ToolWindow/ToolWindowContainer'
import Sidebar from './Sidebar/Sidebar'
import SaveAndExportContainer from './SaveAndExport/SaveAndExportContainer'
import { BIN_URL, BIN_RUD_KEY } from './data/jsonBinConfig'



const MainContainer = () => {
    
    const [activeTile, setActiveTile] = useState('blue');
    const [activeSidebar, setActiveSidebar] = useState('Palette');    
    const [curCanvasName, setCurCanvasName] = useState('');
    const [selectedCanvasName, setSelectedCanvasName] = useState('');
    const [canvasMap, setCanvasMap] = useState(new Map());
    const [saveTrigger, setSaveTrigger] = useState(0);          // TODO make this a callback
    const [loadTrigger, setLoadTrigger] = useState(0);


    const GRID_SIZE = 32;

    const [grid, setGrid] = useState(
        Array(GRID_SIZE * GRID_SIZE).fill('grey')

    );



    

    useEffect(() => {                                       // Initial Get
        const FetchCanvasData = async function() {
            try{
                const binUrl = BIN_URL;

                const response = await fetch(binUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                
                        'X-Access-Key': BIN_RUD_KEY
                    }
                });

                const data = await response.json();
                console.log("Response status:", response.status);
                console.log("Response data:", data);


                setCanvasMap(new Map(Object.entries(data.record.canvases)));
            }
            catch (error) {
                console.error('Error fetching canvas data:', error);
            }
            
        }

        FetchCanvasData();

    }, []);

    useEffect(() =>{



    }, [canvasMap]);

    // user should be able to save canvas. when saved, generate SVG for thumbnail? JSON object
    // canvasName: { colours[#AA1100, etc...], tiles[0,1,2,1 etc...] }

    // for now, ToolwindowContainer needs saved canvas's for loading. SaveAndExportcontainer only needs current canvas.
    // there should be a useEffect that triggers on 'canvas saved'

    return (
        <div style={{ display: 'flex', flexDirection: 'column', bottom: '0px'}} className='main-container'>

            <Toolbar/>
            
            <div style={{display: 'flex', flexGrow: '1'}}>
                <Sidebar
                    activeSidebar={activeSidebar}
                    setActiveSidebar={setActiveSidebar}
                
                />
                <ToolWindowContainer
                    activeTile={activeTile}
                    setActiveTile={setActiveTile}
                    activeSidebar={activeSidebar}
                    canvasMap={canvasMap}
                    setCanvasMap={setCanvasMap}
                    selectedCanvasName={selectedCanvasName}
                    setSelectedCanvasName={setSelectedCanvasName}
                    loadTrigger={loadTrigger}
                    setLoadTrigger={setLoadTrigger}
                   
                />
                <CanvasContainer 
                    activeTile={activeTile}
                    curCanvasName={curCanvasName}
                    canvasMap={canvasMap}
                    setCanvasMap={setCanvasMap}
                    selectedCanvasName={selectedCanvasName}
                    saveTrigger={saveTrigger}
                    loadTrigger={loadTrigger}
                    grid={grid}
                    setGrid={setGrid}
                />
                <SaveAndExportContainer 
                   
                    canvasMap={canvasMap}   // needed to check for dupes before adding
                    
                    setCurCanvasName={setCurCanvasName}
                    saveTrigger={saveTrigger}
                    setSaveTrigger={setSaveTrigger}
                    grid={grid}
                />
            </div>
            



        </div>
    )
}

export default MainContainer