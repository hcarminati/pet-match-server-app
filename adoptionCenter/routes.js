import * as dao from "./dao.js";

function AdoptionCenterRoutes(app) {
    const findAllAdoptionCenters = async (req, res) => {
        const allAdoptionCenters = await dao.findAllAdoptionCenters();
        res.json(allAdoptionCenters);
    };

    const findAdoptionCenterById = async (req, res) => {
        const user = await dao.findAdoptionCenterById(req.params.adoptionCenterId);
        res.json(user);
    };

    const addAdoptionCenter = async (req, res) => {
        try {
            const newPet = await dao.addAdoptionCenter(req.body); // Assuming req.body contains the new pet data
            res.status(201).json({ message: "Adoption center created successfully", pet: newPet });
        } catch (error) {
            res.status(500).json({ message: "Failed to create Adoption center", error: error.message });
        }
    };

    const deleteAdoptionCenter = async (req, res) => {
        const status = await dao.deleteAdoptionCenter(req.params.petId);
        res.json(status);
    };

    const updateAdoptionCenterById = async (req, res) => {
        const { adoptionCenterId } = req.params;
        const status = await dao.updateAdoptionCenterById(adoptionCenterId, req.body);
        res.json(status);
    };

    app.get("/api/adoptionCenters", findAllAdoptionCenters);
    app.get("/api/adoptionCenters/id/:adoptionCenterId", findAdoptionCenterById);
    app.post("/api/adoptionCenters", addAdoptionCenter);
    app.delete("/api/adoptionCenters/:adoptionCenterId", deleteAdoptionCenter);
    app.put("/api/adoptionCenters/:adoptionCenterId", updateAdoptionCenterById)
}

export default AdoptionCenterRoutes;