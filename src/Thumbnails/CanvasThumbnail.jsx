import { useEffect, useRef } from 'react'

function CanvasThumbnail({name, colours, selectedCanvasName, SelectCanvasHandler}) {
    const canvasRef = useRef(null);
    const size = 72;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !colours) return;

        const ctx = canvas.getContext("2d");
        const gridSize = 32;

        canvas.width = gridSize;
        canvas.height = gridSize;

        ctx.clearRect(0, 0, gridSize, gridSize);

        colours.forEach((color, index) => {
            const x = index % gridSize;
            const y = Math.floor(index / gridSize);

            if (!color) return;

            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
        });

    }, [colours])



    return (
        <div className='canvas-thumbnail-container'>
            <canvas
                ref={canvasRef}
                style={{
                    width: size,
                    height: size,
                    imageRendering: "pixelated",
                    display: "block"
                }}
                className={`canvas-thumbnail ${selectedCanvasName === name ? 'active' : ''}`}
                onMouseDown={() => SelectCanvasHandler(name)}
            />
            <div 
                style={{display: 'flex', justifyContent: 'center'}}
                
            >
                {name}
            </div>
            
            

        </div>
    )
}

export default CanvasThumbnail