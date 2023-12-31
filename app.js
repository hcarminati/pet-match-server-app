import express from "express";
import "dotenv/config";
import PetRoutes from "./pets/routes.js";
import UsersRoutes from "./users/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import CommentRoutes from "./comments/routes.js";
import LikeRoutes from "./likes/routes.js";
import AdoptedPetRoutes from "./adoptedPets/routes.js";
import AdoptionCenterRoutes from "./adoptionCenter/routes.js";
import MedicalRecordRoutes from "./medicalRecord/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/pet-match';

mongoose.connect(CONNECTION_STRING);

const app = express();
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
AdoptionCenterRoutes(app);
MedicalRecordRoutes(app);
AdoptedPetRoutes(app);
CommentRoutes(app);
LikeRoutes(app);
UsersRoutes(app);

app.listen(process.env.PORT || 4000);