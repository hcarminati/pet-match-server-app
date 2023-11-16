import express from "express";
import "dotenv/config";
import PetRoutes from "./pets/routes.js";
import UsersRoutes from "./user/routes.js";
import LoginRoutes from "./user/login/routes.js";
import cors from "cors";
import RegisterRoutes from "./user/register/routes.js";

const app = express();
app.use(express.json());
app.use(
    cors({
             credentials: true,
             origin: "*",
         })
);
PetRoutes(app);

UsersRoutes(app);
LoginRoutes(app);
RegisterRoutes(app);
app.listen(process.env.PORT || 4000);