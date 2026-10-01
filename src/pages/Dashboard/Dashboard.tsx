const Dashboard = () => {
    const user = JSON.parse(
        localStorage.getItem("user") || "{}"
    );

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.reload();
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <p>Welcome, {user.name}</p>
            <p>Email: {user.email}</p>

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;