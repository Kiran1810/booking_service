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

/**
 * @swagger
 * /flight-booking/payments:
 *   post:
 *     summary: Make a payment for a booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       200:
 *         description: Payment processed successfully
 *       400:
 *         description: Payment failed or bad request
 */
router.post('/payments', BookingController.makePayments);

module.exports = router;
