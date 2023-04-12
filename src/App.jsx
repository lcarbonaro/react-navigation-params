import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Details from "./components/Details";

import "./App.css";

// see example: https://www.kindacode.com/article/programmatically-navigate-using-react-router/
// see example: https://plainenglish.io/blog/how-to-pass-data-between-pages-in-react-router-dom-v6

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
