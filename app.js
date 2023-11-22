import express from "express";
import "dotenv/config";
import PetRoutes from "./pets/routes.js";
import UsersRoutes from "./users/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import CommentRoutes from "./comments/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/pet-match");

const app = express();
app.use(express.json());
app.use(
    cors({
             credentials: true,
             origin: ["http://localhost:3000",
                      "https://prismatic-cactus-89735f.netlify.app",
                      ]
         })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.use(express.json());
PetRoutes(app);
CommentRoutes(app);
UsersRoutes(app);

app.listen(process.env.PORT || 4000);