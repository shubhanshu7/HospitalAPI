/**
 * @swagger
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       properties:
 *         phoneNumber:
 *           type: string
 *           description: Patient's phone number
 */

/**
 * @swagger
 * /patients/register:
 *   post:
 *     summary: Register a new patient
 *     tags:
 *       - Patients
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       201:
 *         description: Patient registered successfully
 *       500:
 *         description: Internal server error
 */

const express = require('express');
const patientController = require('../controllers/patientController');

const router = express.Router();

// Patient Registration
router.post('/register', patientController.register);

module.exports = router;
