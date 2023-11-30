import * as dao from "./dao.js";
import * as commentsDao from "../comments/dao.js";
import * as likesDao from "../likes/dao.js";

function UsersRoutes(app) {
    const findAllUsers = async (req, res) => {
        const allUsers = await dao.findAllUsers();
        res.json(allUsers);
    };
    const findUserByUsername = async (req, res) => {
        const user = await dao.findUserByUsername(req.params.username);
        res.json(user);
    };
    const deleteUser = async (req, res) => {
        const status = await dao.deleteUser(req.params.id);
        res.json(status);
    };
    const updateUserByUsername = async (req, res) => {
        const { username } = req.params;
        const status = await dao.updateUserByUsername(username, req.body);
        res.json(status);
    };
    const findUserById = async (req, res) => {
        const user = await dao.findUserById(req.params.id);
        res.json(user);
    };
    const updateUserById = async (req, res) => {
        const { id } = req.params;
        const status = await dao.updateUserById(id, req.body);
        res.json(status);
    };
    const registerUser = async (req, res) => {
        const { email, username, password, role } = req.body;
        try {
            const existingUser = await dao.findUserByUsername(username);
            if (existingUser) {
                return res.status(400).json({ message: "Username already exists" });
            }

            const existingEmail = await dao.findUserByEmail(email);
            if (existingEmail) {
                return res.status(400).json({ message: "Email already exists" });
            }

            const newUser = {
                ...req.body,
                description: "", // Assuming description is an optional field
            };

            // Store the new user in the database
            const createdUser = await dao.createUser(newUser);
            req.session['currentUser'] = createdUser;
            res.status(201).json({ message: "Signup successful", user: createdUser });
        } catch (error) {
            res.status(500).json({ message: "Signup failed", error: error.message });
        }
    };

    const loginUser = async (req, res) => {
        const { username, password } = req.body;

        const user = await dao.findUserByCredentials(username, password);

        if (!user) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        req.session['currentUser'] = user;
        res.json(user);

        console.log("LOGIN---", req.session['currentUser'])
    };

    const logout = (req, res) => {
        req.session.destroy();
        res.json(200);
    };

    const account = async (req, res) => {
        res.json(req.session['currentUser']);
        console.log("ACCOUNT---", req.session['currentUser'])
    };
    const getAccount = async (req, res) => {
        res.json(req.session['currentUser']);
        console.log("GETACCOUNT---", req.session['currentUser'])
    };



    //users
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:username", findUserByUsername);
    app.get("/api/users/id/:id", findUserById);
    app.put("/api/users/id/:id", updateUserById);
    app.delete("/api/users/id/:id", deleteUser);

    //user
    app.put("/api/user/:username", updateUserByUsername)
    app.post("/api/user/register", registerUser);
    app.post("/api/user/login", loginUser);
    app.post("/api/user/logout", logout);

    app.post("/api/user/account", account);
    app.get("/api/user/account", getAccount);
}

export default UsersRoutes;
