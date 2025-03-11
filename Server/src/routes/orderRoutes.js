import express from 'express';
import {
    getAllOrders,
    getOrderById,
    placeOrder,
    updateOrderStatus
} from '../controllers/orderController.js';

const router = express.Router();

router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.post('/orders', placeOrder);
router.put('/orders/:id/status', updateOrderStatus);

export default router;
