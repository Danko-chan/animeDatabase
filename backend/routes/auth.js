import  express  from 'express';
import authController from '../controllers/auth.js';

// import protect from '../middleware/auth';

const router = express.Router()

router
    .route('/register')
    .post(authController.register)

export default router;

