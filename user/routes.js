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
}

export default UsersRoutes;
