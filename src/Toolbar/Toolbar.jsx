//import React, { useState } from 'react'
import ThemeToggle from '../ToolbarItems/ThemeToggle';
import ToolbarItem from '../ToolbarItems/ToolbarItem'

function Toolbar({paletteVisible, setPaletteVisible}) {

    function ToggleCanvasButtonHandler(){
        console.log("pressed button");
        setPaletteVisible(!paletteVisible);
    }
    
     
    return (
        <>
            <div style={{display: 'flex', alignItems:'center', gap: '20px', height:'40px', backgroundColor:'#29cf8c'}}>
                <button className='toolbar-button' onClick={ToggleCanvasButtonHandler}>Toggle</button>
                <ToolbarItem name="Option 1"></ToolbarItem>
                <ToolbarItem name='Option 2'></ToolbarItem>
                <ToolbarItem name='Option 3'></ToolbarItem>
                <ToolbarItem name='Option 4'></ToolbarItem>
                <ThemeToggle />

            </div>
        
        </>
    )
}

export default Toolbar