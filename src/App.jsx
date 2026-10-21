import { UseTheme } from './global/ThemeContext.jsx';
import MainContainer from './MainContainer.jsx';

function App() {
   const {theme} = UseTheme();

    return (
        <div className='app' data-theme={theme}>
            
            <MainContainer />
        </div>
       
    );
}

export default App;