const Doctor = require('../models/doctorModel');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Doctor Registration
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = new Doctor({ username, password });
    await doctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Doctor Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username });
    if (!doctor || password !== doctor.password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ doctorId: doctor._id }, config.secretKey, { expiresIn: '24h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
