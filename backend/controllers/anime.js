import Anime from '../models/Animes.js';
import asyncHandler from '../middleware/async.js';
import ErrorResponse from '../utils/errorResponse.js';

export default class  animeController{

  static createAnime = asyncHandler(async(req, res, next) => {
    const anime = await Anime.create(req.body)
    
    console.log(req.body)
    res.status(200).json({success: true, data:anime});
  });

 static getAnime = asyncHandler(async(req, res, next) => {
    const animes = await Anime.find()
    res.status(200).json({success: true, data: animes})
});

  static getAnimeById = asyncHandler(async(req, res, next) => {
  const animeId = await Anime.findById(req.params.id)
  if (!animeId) {
    return next(
      new ErrorResponse(`anime not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: animeId });
});

 static updateAnime = asyncHandler(async (req, res, next) => {
  let anime = await Anime.findById(req.params.id);

  if (!anime) {
    return next(
      new ErrorResponse(`anime not found with id of ${req.params.id}`, 404)
    );
  }

  

  anime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: anime });
});

}