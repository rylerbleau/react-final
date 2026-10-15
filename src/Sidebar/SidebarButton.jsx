import React from 'react'

function SidebarButton({id, IconComponent, activeSidebar, setActiveSidebar}) {

    function SideBarButtonHandler(){
        console.log(`clicked: ${id}`)
        setActiveSidebar(id);
    }

  return (
    <div 
        className={`sidebar-button ${activeSidebar === id ? 'active' : ''}`}
        onMouseDown={SideBarButtonHandler}
    >   
        <IconComponent size={30}/>
        
    </div>
  )
}

export default SidebarButton