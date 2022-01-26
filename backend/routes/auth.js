import  express  from 'express';
import authController from '../controllers/auth.js';
import protect from '../middleware/auth.js'

// import protect from '../middleware/auth';

const router = express.Router()

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/me', protect, authController.getMe);
router.put('/updatedetails', protect, authController.updateDetails);
export default router;

