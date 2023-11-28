import * as dao from "./dao.js";
import {clearEntireDatabase} from "./dao.js";

function LikeRoutes(app) {
    const findAllLikes = async (req, res) => {
        const allLikes = await dao.findAllLikes();
        res.json(allLikes);
    };

    const findLikesByUserId = async (req, res) => {
        const likes = await dao.findLikesByUserId(req.params.userId);
        res.json(likes);
    };

    const findLikesByPetId = async (req, res) => {
        const comment = await dao.findLikesByPetId(req.params.petId);
        res.json(comment);
    };

    const addLike = async (req, res) => {
        try {
            const newLike = await dao.addLike(req.body);
            res.status(201).json({ message: "Like added successfully" });
        } catch (error) {
            res.status(500).json({ message: "Failed to add Like", error: error.message });
        }
    };

    const deleteLike = async (req, res) => {
        const status = await dao.deleteLike(req.params.likeId);
        res.json(status);
    };

    const clear = async () => {
        const status = await dao.clearEntireDatabase();
    };


    app.get("/api/likes", findAllLikes);
    app.get("/api/likes/user/:userId", findLikesByUserId);
    app.get("/api/likes/pet/:petId", findLikesByPetId);
    app.post("/api/likes/pet/:petId", addLike);
    app.delete("/api/likes/:likeId", deleteLike);

    // app.get("/api/clear", clear);
}

export default LikeRoutes;