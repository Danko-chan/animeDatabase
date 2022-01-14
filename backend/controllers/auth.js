import User from '../models/User.js';
import asyncHandler from '../middleware/async.js';


export default class authController{

static register = asyncHandler(async (req, res, next) => {
    const { name, email, password, role } = req.body;
  
    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

   
    res.status(200).json({success: true, data:user});
  });


  
  

}