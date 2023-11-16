import db from "../Database/index.js";

function PetRoutes(app) {
    app.get("/api/pets", (req, res) => {
        const { pid } = req.params;
        const pet = db.admin_selected_pets
            .filter((p) => p.id === pid);
        res.send(db.admin_selected_pets);
    });
    app.get("/api/pets/:pid", (req, res) => {
        const { pid } = req.params;
        const pet = db.admin_selected_pets
            .filter((p) => p.id === pid);
        res.send(pet);
    });
    app.get("/api/pets/:pid", (req, res) => {
        const { pid } = req.params;
        const pet = db.admin_selected_pets
            .filter((p) => p.id === pid);
        res.send(pet);
    });
}

export default PetRoutes;