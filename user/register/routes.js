import db from "../../Database/index.js";

function RegisterRoutes(app) {
    app.post("/api/user/register", async (req, res) => {
        const { email, username, password, userType, referralCode } = req.body;

        try {
            // Check if the user already exists in the database
            const existingUser =  db.users.find((user) => user.username === username);
            if (existingUser) {
                return res.status(400).json({ message: "Username already exists" });
            }

            const existingEmail =  db.users.find((user) => user.email === email);
            if (existingEmail) {
                return res.status(400).json({ message: "Email already exists" });
            }

            // Create a new user based on the provided information
            const newUser = {
                "id": db.users.length + 1,
                email,
                username,
                password,
                userType,
                "description": "",
            };

            // Store the new user in the database
            db.users.push(newUser);

            res.status(201).json({ message: "Signup successful", user: newUser });
        } catch (error) {
            res.status(500).json({ message: "Signup failed", error: error.message });
        }
    });
}

export default RegisterRoutes;
