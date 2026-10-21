import { useRef, useState } from 'react'

function SaveWindow({canvasMap, setCurCanvasName, saveTrigger, setSaveTrigger}) {
    const [buttonText, setButtonText] = useState("Save (New)");
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const curName = useRef('');
    const nameInput = useRef(null);

    function NameChangeHandler(text){
        curName.current = text;
        if(text.length <= 0){
            setButtonEnabled(false);
            setButtonText("Save (New)");
            return;
        } 
        setButtonEnabled(true);
        if(canvasMap.has(text)){
            setButtonText("Overwrite");
        }
        else{
            setButtonText("Save (New)");
        }
    }


    function SaveButtonHandler(){
        console.log(curName.current); 
        setCurCanvasName(curName.current);
        nameInput.current.value = "";
        NameChangeHandler("");
        setSaveTrigger(prev => prev + 1);
     

    }

    return (
        <div className="save-export-window">
            <input
                ref={nameInput}
                type="text"
                id="nameInput"
                onChange={(e) => NameChangeHandler(e.target.value)}
                style={{ height: '25px', fontSize: '20px' }}
            />
            <button disabled={!buttonEnabled} style={{width: '150px'}} onClick={SaveButtonHandler}>
                {buttonText}
            </button>
        </div>
    )
}

export default SaveWindow