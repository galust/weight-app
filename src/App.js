import './App.css';

import ItemsList from "./components/items-list";
import ActionButtons from "./components/action-buttons";

function App() {
    return (
        <div className="App">
            <ActionButtons/>
            <ItemsList/>
        </div>
    );
}

export default App;
