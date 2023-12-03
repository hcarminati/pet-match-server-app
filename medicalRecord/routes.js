import * as dao from "./dao.js";

function MedicalRecordRoutes(app) {
    const findAllMedicalRecords = async (req, res) => {
        const allMedicalRecords = await dao.findAllMedicalRecords();
        res.json(allMedicalRecords);
    };

    const findMedicalRecordById = async (req, res) => {
        const user = await dao.findMedicalRecordById(req.params.medicalRecordId);
        res.json(user);
    };

    const addMedicalRecord = async (req, res) => {
        try {
            const newMedicalRecord = await dao.addMedicalRecord(req.body); // Assuming req.body contains the new pet data
            res.status(201).json({ message: "Medical record created successfully", medicalRecord: newMedicalRecord });
        } catch (error) {
            res.status(500).json({ message: "Failed to create medical record", error: error.message });
        }
    };

    const deleteMedicalRecord = async (req, res) => {
        const status = await dao.deleteMedicalRecord(req.params.medicalRecord);
        res.json(status);
    };

    const updateMedicalRecordById = async (req, res) => {
        const { medicalRecordId } = req.params;
        const status = await dao.updateMedicalRecordById(medicalRecordId, req.body);
        res.json(status);
    };

    app.get("/api/medicalRecords", findAllMedicalRecords);
    app.get("/api/medicalRecords/id/:medicalRecordId", findMedicalRecordById);
    app.post("/api/medicalRecords", addMedicalRecord);
    app.delete("/api/medicalRecords/:medicalRecordId", deleteMedicalRecord);
    app.put("/api/medicalRecords/:medicalRecordId", updateMedicalRecordById)
}

export default MedicalRecordRoutes;