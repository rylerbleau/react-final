import React, { useState } from 'react'
import Toolbar from './Toolbar/Toolbar'
import CanvasContainer from './CanvasContainer/CanvasContainer'
import ToolWindowContainer from './ToolWindow/ToolWindowContainer'
import Sidebar from './Sidebar/Sidebar'


const MainContainer = () => {
    
    const [activeTile, setActiveTile] = useState('');
    const [activeSidebar, setActiveSidebar] = useState('Palette');    

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
                   
                />
                <CanvasContainer activeTile={activeTile}/>
            </div>
            



        </div>
    )
}

export default MainContainer