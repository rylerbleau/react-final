import React, { useState, useEffect, useRef } from 'react'
import Toolbar from './Toolbar/Toolbar'
import CanvasContainer from './CanvasContainer/CanvasContainer'
import ToolWindowContainer from './ToolWindow/ToolWindowContainer'
import Sidebar from './Sidebar/Sidebar'
import SaveAndExportContainer from './SaveAndExport/SaveAndExportContainer'


const MainContainer = () => {
    
    const [activeTile, setActiveTile] = useState('');
    const [activeSidebar, setActiveSidebar] = useState('Palette');    
    const [curCanvasName, setCurCanvasName] = useState('');
    const [canvasMap, setCanvasMap] = useState(new Map())
    const curCanvas = useRef(null);

    useEffect(() => {
        if(curCanvasName === '') return;
        // 

    }, [curCanvasName]);
   
    useEffect(() => {
        if(curCanvas === null) return;

    }, [curCanvas]);


    // user should be able to save canvas. when saved, generate SVG for thumbnail? JSON object
    // canvasName: { colours[#AA1100, etc...], tiles[0,1,2,1 etc...] }

    // for now, ToolwindowContainer needs saved canvas's for loading. SaveAndExportcontainer only needs current canvas.
    // there should be a useEffect that triggers on 'canvas saved'

    return (
        <div style={{backgroundColor: '#cb671a', display: 'flex', flexDirection: 'column', bottom: '0px'}}>

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
                    setActiveSidebar={setActiveSidebar}
                    canvasMap={canvasMap}
                    setCanvasMap={setCanvasMap}
                   
                />
                <CanvasContainer 
                    activeTile={activeTile}
                    curCanvas={curCanvas}
                    curCanvasName={curCanvasName}
                    canvasMap={canvasMap}
                    setCanvasMap={setCanvasMap}
                />
                <SaveAndExportContainer 
                    curCanvas={curCanvas}
                    canvasMap={canvasMap}   // needed to check for dupes before adding
                    setCurCanvasName={setCurCanvasName}
                />
            </div>
            



        </div>
    )
}

export default MainContainer