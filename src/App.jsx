import { useState } from "react";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        Boolean(localStorage.getItem("token"))
    );

    if (!isAuthenticated) {
        return (
            <Login
                onLoginSuccess={() => setIsAuthenticated(true)}
            />
        );
    }

    return <Dashboard />;
}

export default App;