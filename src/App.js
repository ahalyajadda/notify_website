import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import CreatePage from "./pages/CreatePage";
import DashboardPage from "./pages/DashboardPage";
import DeletePage from "./pages/DeletePage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";

function App() {
    
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SigninPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/register" element={<LoginPage/>} />
                    <Route path="/deletetask/:id" element={<DeletePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
