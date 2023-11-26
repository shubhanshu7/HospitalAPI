/**
 * @swagger
 * components:
 *   schemas:
 *     Report:
 *       type: object
 *       properties:
 *         doctorId:
 *           type: string
 *           description: ID of the doctor creating the report
 *         status:
 *           type: string
 *           enum: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
 *           description: Report status
 */

/**
 * @swagger
 * /reports/{id}/create_report:
 *   post:
 *     summary: Create a new report for a patient
 *     tags:
 *       - Reports
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the patient
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Report'
 *     responses:
 *       201:
 *         description: Report created successfully
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /reports/{id}/all_reports:
 *   get:
 *     summary: Get all reports of a patient
 *     tags:
 *       - Reports
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the patient
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reports for the specified patient
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /reports/status/{status}:
 *   get:
 *     summary: Get all reports filtered by status
 *     tags:
 *       - Reports
 *     parameters:
 *       - in: path
 *         name: status
 *         required: true
 *         description: Report status (Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reports with the specified status
 *       500:
 *         description: Internal server error
 */



const express = require('express');
const reportController = require('../controllers/reportController');
// const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create Report
router.post('/:id/create_report', reportController.createReport);

// List all reports of a patient
router.get('/:id/all_reports', reportController.getAllReports);

// List all reports filtered by status
router.get('/status/:status', reportController.getAllReportsByStatus);

module.exports = router;
