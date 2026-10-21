import {useState} from 'react'
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

function NewColourPicker({setNewTile}) {

    const wheelSize = 174;
    const [colourChanged, setColourChanged] = useState(false);
    const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });

    function ColourPickerHandler(color){
        if(!colourChanged) setColourChanged(true);    
        setHsva({ ...hsva, ...color.hsva });
    }

    function AddButtonHandler(){
        setColourChanged(false);
        setNewTile(hsvaToHex(hsva));
    }

    return (
        <>
            <Wheel 
                
                width={wheelSize} 
                height={wheelSize} 
                color={hsva} 
                onChange={ColourPickerHandler} 
                
            />
            <div style={{ width: '100%', height: 34, marginTop: 20, backgroundColor: hsvaToHex(hsva) }}></div>
            <button 
               
                onClick={AddButtonHandler} 
                disabled={!colourChanged}
            >
                Add
            </button>
        </>
    );
}

export default NewColourPicker