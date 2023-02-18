import Home from "./components/home";
import Topics from "./components/topics";
import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <h1><Link to='/'>Home</Link></h1>
                        </li>
                        <li>
                            <h1><Link to='/topics'>topics</Link></h1>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/topics/*" element={<Topics />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
