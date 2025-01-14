import './App.css';
import { CreateStore } from './components/context/store';
import { Myprovider } from './components/context/context';
import { BrowserRouter } from 'react-router-dom';
import MyApp from './components/MyApp';

function App() {
    
    const store=CreateStore();

    return <>

 <Myprovider value={store}>
    
            <BrowserRouter>
                <MyApp/>
            </BrowserRouter>
        </Myprovider>

    </>

}
export default App;
