import * as dao from "./dao.js";

function CommentRoutes(app) {
    const findAllComments = async (req, res) => {
        const allComments = await dao.findAllComments();
        res.json(allComments);
    };

    const findCommentsByUserId = async (req, res) => {
        const comment = await dao.findCommentsByUserId(req.params.userId);
        res.json(comment);
    };

    const findCommentsByPetId = async (req, res) => {
        const comment = await dao.findCommentsByPetId(req.params.petId);
        res.json(comment);
    };

    const addComment = async (req, res) => {
        try {
            const newComment = await dao.addComment(req.body);
            res.status(201).json({ message: "Comment poster successfully" });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Failed to post comment", error: error.message });
        }
    };

    const deleteComment = async (req, res) => {
        const status = await dao.deleteComment(req.params.commentId);
        res.json(status);
    };

    app.get("/api/comments", findAllComments);
    app.get("/api/comments/user/:userId", findCommentsByUserId);
    app.get("/api/comments/pet/:petId", findCommentsByPetId);
    app.post("/api/comments/pet/:petId", addComment);
    app.delete("/api/comments/pet/:commentId", deleteComment);
}

export default CommentRoutes;