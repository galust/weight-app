import './App.css';

import ItemsList from "./components/items-list";
import ActionButtons from "./components/action-buttons";

function App() {
    return (
        <div className="App">
            <h1>Shop items appearance probability based on theirs weights</h1>
            <ActionButtons/>
            <ItemsList/>
        </div>
    );
}

export default App;
