import  express  from 'express';
import animeController from '../controllers/anime.js'

const router = express.Router()

router
    .route('/anime')
    .post(animeController.createAnime)
    .get(animeController.getAnime)

router
    .route('/anime/:id')
    .get(animeController.getAnimeById)
export default router;

