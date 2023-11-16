import db from "../../Database/index.js";

function LoginRoutes(app) {
    // Login endpoint
    app.post("/api/user/login", (req, res) => {
        const { username, password } = req.body;

        // Find the user in the database
        const user = db.users.find(user => user.username === username);

        if (!user) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        // Compare the provided password with the stored password
        if (user.password !== password) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        // If username and password are correct, send a success message
        res.json({ message: "Login successful", user: { id: user.id, username: user.username } });
    });
}

export default LoginRoutes;
