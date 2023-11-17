import db from "../Database/index.js";

function UsersRoutes(app) {
    app.get("/api/users", (req, res) => {
        const users = db.users;
        res.send(users);
    });
    app.get("/api/users/:username", (req, res) => {
        const { username } = req.params;
        const user = db.users.find((user) => user.username === username);

        if (!user) {
            res.status(404).json({ message: "User not found" });
        }

        res.send(user);
    });

    app.put("/api/user/:username", (req, res) => {
        const { username } = req.params;
        const user = req.body;
        db.users = db.users.map((u) => u.username === username ? { ...u, ...user } : u);
        res.sendStatus(204);
    });

    // Get user by id
    app.get("/api/users/id/:id", (req, res) => {
        const { id } = req.params;
        const user = db.users.find((user) => user.id == Number(id));

        if (!user) {
            res.status(404).json({ message: "User not found!" });
        }

        res.send(user);
    });

    // Update user by id
    app.put("/api/users/id/:id", (req, res) => {
        const { id } = req.params;
        const updatedUserData = req.body; // New data for the user

        // Find the user by ID in the database
        const userIndex = db.users.findIndex((user) => user.id == Number(id));

        if (userIndex === -1) {
            // User not found
            res.status(404).json({ message: "User not found!" });
        } else {
            // Update the user data
            db.users[userIndex] = { ...db.users[userIndex], ...updatedUserData };

            res.status(200).json({ message: "User updated successfully", user: db.users[userIndex] });
        }
    });
}

export default UsersRoutes;
