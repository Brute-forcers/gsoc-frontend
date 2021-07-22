import './App.css';
import Organisations from './pages/organisations';
import {Store} from "./Store";
function App() {
    return (
        <div className="App">
            <Store>
                <Organisations/>
            </Store>
        </div>
    );
}

export default App;
