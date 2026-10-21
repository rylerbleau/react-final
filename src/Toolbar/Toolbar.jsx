import ThemeToggle from '../ToolbarItems/ThemeToggle';

function Toolbar() {


     
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height:'40px', marginLeft: '10px'}}className='toolbar'>
                Pixel Art and Tilemap Draw Tool
                
                <ThemeToggle />

            </div>
        
        </>
    )
}

export default Toolbar