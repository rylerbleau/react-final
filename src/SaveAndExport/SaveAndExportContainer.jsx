import { useState } from 'react'
import SaveWindow from './SaveWindow';
import ExportWindow from './ExportWindow';

function SaveAndExportContainer({canvasMap, setCurCanvasName, saveTrigger, setSaveTrigger, grid}) {
    const [activeTab, setActiveTab] = useState('save');


    function RenderActiveTab(){
        switch(activeTab){
            case 'save':
                return <SaveWindow 
                    canvasMap={canvasMap} 
                    setCurCanvasName={setCurCanvasName}
                    saveTrigger={saveTrigger}
                    setSaveTrigger={setSaveTrigger}
                    
                />
            case 'export':
                return <ExportWindow grid={grid}/>

           
        }
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow:'1'}} className='save-export-panel'>
        
            

            <div className="save-export-container">
                <div className="save-export-tabs">
                    
                        <input type="radio" id="save" name="save-or-export"  checked={activeTab === 'save'} onChange={() => setActiveTab('save')}/>
                        <label htmlFor="save">Save</label>
                    
                    
                        <input type="radio" id="export" name="save-or-export"   checked={activeTab === 'export'} onChange={() => setActiveTab('export')} />
                        <label htmlFor="export">Export</label>
                    

                </div>

                
                {RenderActiveTab()} 


            </div>
        </div>
    )
}

export default SaveAndExportContainer