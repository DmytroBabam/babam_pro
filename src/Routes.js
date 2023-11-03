import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import NewPage from "./pages/newpage";
import NotFoundPage from "./pages/notfoundpage";

function App() {
    return (
        <Routes>
            <Route path="/newpage" element={<NewPage />} />
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
