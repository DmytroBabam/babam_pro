import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homepage";
import NewPage from "./Pages/newpage";

function App() {
    return (
        <div>
            <header>
                <h2><link rel="stylesheet" href="/newpage" />NewPage</h2>
            </header>
            <Routes>
                <Route path="/newpage" element={<NewPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
