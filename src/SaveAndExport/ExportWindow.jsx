import { useRef, useState } from "react";

const ExportWindow = ({grid}) => {
        const [exportMode, setExportMode] = useState("PNG");
        const nameInput = useRef(null);

        function ExportJSON() {
        if (!grid) {
           
            return;
        }

        const canvasData = {
            name: nameInput.current?.value || "untitled",
            width: 32,
            height: 32,
            grid: grid
        };

        const json = JSON.stringify(canvasData, null, 4);

        const blob = new Blob([json], {
            type: "application/json"
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${canvasData.name}.json`;
        link.click();

        URL.revokeObjectURL(url);
    }

    function ExportPNG(){
        const canvas = document.createElement("canvas");
        if (!canvas || !grid) {
            console.log("none")
            return;
        };

        const ctx = canvas.getContext("2d");
        const gridSize = 32;

        canvas.width = gridSize;
        canvas.height = gridSize;

        ctx.clearRect(0, 0, gridSize, gridSize);

        grid.forEach((color, index) => {
            const x = index % gridSize;
            const y = Math.floor(index / gridSize);

            if (!color) return;

            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);


        });

        canvas.toBlob((blob) => {
            if (!blob) return;

            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');

            link.href = url;
            link.download = nameInput.current.length > 0 ? `${nameInput.current}.png` : 'untitled.png';
            link.click();

            URL.revokeObjectURL(url);
        }, 'image/png');
    }


    function ExportButtonHandler(){
        switch(exportMode){
            case 'PNG':
                ExportPNG();
                break;
            case 'JSON':
                ExportJSON();
                break;
            default:
                break;
        }
            
    }

    function NameChangeHandler(text){
        console.log(text);
        nameInput.current = text;
    }
    
    return (
        <div className='save-export-window' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input
                    ref={nameInput}
                    type="text"
                    id="nameInput"
                    placeholder="Name..."
                    onChange={(e) => NameChangeHandler(e.target.value)}
                    style={{ height: '25px', fontSize: '20px', marginLeft: '20px', marginRight: '20px',  marginBottom: '10px' }}
                    
                />
                
                <select
                    value={exportMode}
                    onChange={(e) => setExportMode(e.target.value)}
                    style={{height: '30px'}}
                    className="load-delete-buttons"
                    >
                    <option value="PNG">PNG</option>
                    <option value="JSON">JSON</option>
                    
                </select>
            </div>
            <button onClick={ExportButtonHandler} className='load-delete-buttons'>Export</button>
        </div>
    )
}

export default ExportWindow