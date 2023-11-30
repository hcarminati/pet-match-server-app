import * as dao from "./dao.js";

function AdoptedPetRoutes(app) {
    const findAllAdoptedPets = async (req, res) => {
        const allAdoptedPets = await dao.findAllAdoptedPets();
        res.json(allAdoptedPets);
    };

    const findAdoptedPetsByUserId = async (req, res) => {
        const adoptedPet = await dao.findAdoptedPetsByUserId(req.params.userId);
        res.json(adoptedPet);
    };

    const findAdoptedPetsByPetId = async (req, res) => {
        const adoptedPet = await dao.findAdoptedPetsByPetId(req.params.petId);
        res.json(adoptedPet);
    };

    const addAdoptedPet = async (req, res) => {
        try {
            const newAdoptedPet = await dao.addAdoptedPet(req.body);
            res.status(201).json({ message: "Pet adopted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Failed to adopted pet", error: error.message });
        }
    };

    const deleteAdoptedPet = async (req, res) => {
        const status = await dao.deleteAdoptedPet(req.params.petId);
        res.json(status);
    };

    app.get("/api/adoptedPets", findAllAdoptedPets);
    app.get("/api/adoptedPets/user/:userId", findAdoptedPetsByUserId);
    app.get("/api/adoptedPets/pet/:petId", findAdoptedPetsByPetId);
    app.post("/api/adoptedPets/pet/:petId", addAdoptedPet);
    app.delete("/api/adoptedPets/pet/:commentId", deleteAdoptedPet);
}

export default AdoptedPetRoutes;