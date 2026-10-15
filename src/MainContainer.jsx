import React, { useState } from 'react'
import Toolbar from './Toolbar/Toolbar'
import CanvasContainer from './CanvasContainer/CanvasContainer'
import PaletteContainer from './PaletteContainer/PaletteContainer'
import Sidebar from './Sidebar/Sidebar'

const MainContainer = () => {
    const [paletteVisible, setPaletteVisible] = useState(true);
    const [activeTile, setActiveTile] = useState('grey');
    const [activeSidebar, setActiveSidebar] = useState('Palette');    

    return (
        <div style={{backgroundColor: '#cb671a', display: 'flex', flexDirection: 'column', bottom: '0px'}}>

            <Toolbar 
                paletteVisible={paletteVisible}
                setPaletteVisible={setPaletteVisible}
            />
            
            <div style={{display: 'flex', flexGrow: '1'}}>
                <Sidebar
                    activeSidebar={activeSidebar}
                    setActiveSidebar={setActiveSidebar}
                
                />
                <PaletteContainer
                    paletteVisible={paletteVisible}
                    activeTile={activeTile}
                    setActiveTile={setActiveTile}
                   
                />
                <CanvasContainer activeTile={activeTile}/>
            </div>
            



        </div>
    )
}

export default MainContainer