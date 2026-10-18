import React from 'react'
import SidebarButton from './SidebarButton'
import { FaPalette } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdColorize } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa6";

function Sidebar({activeSidebar, setActiveSidebar}) {
    


  return (
    <div className='sidebar'>
        <SidebarButton 
            id={'Palette'}
            IconComponent={FaPalette}
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
        />
        <SidebarButton
            id={'New Color'}
            IconComponent={MdColorize}
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
        />
        <SidebarButton
            id={'New Tile'}
            IconComponent={FaCirclePlus}
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
        />
        <SidebarButton
            id={'Load'}
            IconComponent={FaRegFolderOpen }
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
        />
        <div className='sidebar-fill'></div>
    </div>
  )
}

export default Sidebar