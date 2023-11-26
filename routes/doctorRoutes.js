/**
 * @swagger
 * components:
 *   schemas:
 *     Doctor:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Doctor's username
 *         password:
 *           type: string
 *           description: Doctor's password
 */

/**
 * @swagger
 * /doctors/register:
 *   post:
 *     summary: Register a new doctor
 *     tags:
 *       - Doctors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Doctor'
 *     responses:
 *       201:
 *         description: Doctor registered successfully
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /doctors/login:
 *   post:
 *     summary: Login as a doctor
 *     tags:
 *       - Doctors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Doctor logged in successfully
 *       401:
 *         description: Invalid username or password
 *       500:
 *         description: Internal server error
 */

const express = require('express');
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Doctor Registration
router.post('/register', doctorController.register);

// Doctor Login
router.post('/login', doctorController.login);

module.exports = router;
