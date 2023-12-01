import * as dao from "./dao.js";

function PetRoutes(app) {
    const findAllPets = async (req, res) => {
        const allPets = await dao.findAllPets();
        res.json(allPets);
    };

    const findPetById = async (req, res) => {
        const user = await dao.findPetById(req.params.pid);
        res.json(user);
    };

    const findPetByOriginalId = async (req, res) => {
        const user = await dao.findPetByOriginalId(req.params.pid);
        res.json(user);
    };

    const addPet = async (req, res) => {
        try {
            const newPet = await dao.addPet(req.body); // Assuming req.body contains the new pet data
            res.status(201).json({ message: "Pet created successfully", pet: newPet });
        } catch (error) {
            res.status(500).json({ message: "Failed to create pet", error: error.message });
        }
    };

    const deletePet = async (req, res) => {
        const status = await dao.deletePet(req.params.petId);
        res.json(status);
    };

    const updatePetById = async (req, res) => {
        const { petId } = req.params;
        const status = await dao.updatePetById(petId, req.body);
        res.json(status);
    };

    app.get("/api/pets", findAllPets);
    app.get("/api/pets/id/:pid", findPetById);
    app.get("/api/pets/original/:pid", findPetByOriginalId);
    app.post("/api/pets", addPet);
    app.delete("/api/pets/:petId", deletePet);
    app.put("/api/pets/:petId", updatePetById)
}

export default PetRoutes;