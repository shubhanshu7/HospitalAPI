const Patient = require('../models/patientModel');

// Patient Registration
exports.register = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const patient = await Patient.findOne({ phoneNumber });
    if (patient) {
      return res.status(200).json(patient);
    }
    const newPatient = new Patient({ phoneNumber });
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
