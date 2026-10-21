import {  useState } from 'react'
import CanvasThumbnail from '../Thumbnails/CanvasThumbnail'
import { BIN_RUD_KEY, BIN_URL } from '../data/jsonBinConfig';


function SavedCanvas({canvasMap, setCanvasMap, selectedCanvasName, setSelectedCanvasName, loadTrigger, setLoadTrigger}) {
    const [buttonsEnabled, setButtonsEnabled] = useState(false);
    const [filter, setFilter] = useState('');

    const filteredCanvases = [...canvasMap.entries()].filter(
        ([name]) =>
            name.toLowerCase().includes(filter.toLowerCase())
    );

    function SelectCanvasHandler(name){
        setSelectedCanvasName(name);
        if(name === "") return;
        setButtonsEnabled(true);
    }




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


    function DeleteButtonHandler(){
        if(selectedCanvasName === "") return;
        const updated = new Map(canvasMap);
            
        updated.delete(selectedCanvasName);   
        setCanvasMap(updated);
        UpdateCanvasData(updated);
        setSelectedCanvasName('');
    }


    function LoadButtonHandler(){
        setLoadTrigger(loadTrigger + 1);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <input 
                style={{maxWidth: '95%', borderRadius: '4px', backgroundColor: 'white', marginBottom: '8px'}}
                placeholder='Search...'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >

                </input>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', flex: '1'}}>
                
                <div style={{
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    flexDirection: 'row', 
                    alignContent: 'stretch',
                    gap: '20px', 
                    overflowY: 'auto', 
                    maxHeight: '750px', 
                    paddingLeft: '4px',
                    paddingTop: '4px',
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none' // Older IE/Edge
                    
                }}>
                    {[...filteredCanvases].map(([name, colours]) => (
                        <CanvasThumbnail 
                        key={name}
                        name={name}
                        colours={colours}  
                        selectedCanvasName={selectedCanvasName}
                        SelectCanvasHandler={SelectCanvasHandler}                 
                        />               
                    ))}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <button 
                        disabled={!buttonsEnabled}
                        onClick={LoadButtonHandler}
                        className='load-delete-buttons'
                        >
                        Load
                    </button>
                        
                    <button 
                        disabled={!buttonsEnabled} 
                        onClick={DeleteButtonHandler}
                        className='load-delete-buttons'
                        >
                        Delete
                    </button>
                </div>
                
            </div>
        
        </div>
        
    )
}

export default SavedCanvas