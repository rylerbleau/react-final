import React, { useEffect } from 'react'
import CanvasThumbnail from '../Thumbnails/CanvasThumbnail'

function SavedCanvas({canvasMap}) {

    useEffect(() => {
        console.log("map changed");

    }, [canvasMap])


    return (
        <>
            {[...canvasMap].map(([name, colours]) => (
                <CanvasThumbnail 
                    key={name}
                    name={name}
                    colours={colours}
                
                
                
                
                />
            
            
            
            ))}
        
        
        
        </>
        
    )
}

export default SavedCanvas