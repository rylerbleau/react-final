import React, { useEffect, useRef } from 'react'

function CanvasThumbnail({name, colours}) {
    const canvasRef = useRef(null);
    const size = 40;

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
        <canvas
            ref={canvasRef}
            style={{
                width: size,
                height: size,
                imageRendering: "pixelated",
                display: "block"
            }}
        />
    )
}

export default CanvasThumbnail