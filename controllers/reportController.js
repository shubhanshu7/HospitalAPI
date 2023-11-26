const Report = require('../models/reportModel');

// Create Report
exports.createReport = async (req, res) => {
  try {
    // Extract required data from request body
    const { doctorId, status } = req.body;
    const patientId = req.params.id;

    const newReport = new Report({ createdBy: doctorId, patient: patientId, status });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List all reports of a patient
exports.getAllReports = async (req, res) => {
  try {
    const patientId = req.params.id;
    const reports = await Report.find({ patient: patientId }).sort({ date: 'asc' });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List all reports filtered by status
exports.getAllReportsByStatus = async (req, res) => {
  try {
    const status = req.params.status;
    const reports = await Report.find({ status }).sort({ date: 'asc' });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
