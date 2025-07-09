const express = require('express');
const { BookingController } = require('../../controllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking routes
 */

/**
 * @swagger
 * /flight-booking/booking:
 *   post:
 *     summary: Create a new flight booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               flightId:
 *                 type: string
 *               userId:
 *                 type: string
 *               seatNumber:
 *                 type: string
 *             required:
 *               - flightId
 *               - userId
 *     responses:
 *       200:
 *         description: Booking created successfully
 */
router.post('/', BookingController.createBooking);

module.exports = router;
