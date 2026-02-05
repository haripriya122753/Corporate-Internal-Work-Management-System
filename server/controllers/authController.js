import { asyncHandler } from '../middlewares/asyncHandler.js';
import { ErrorHandler } from '../middlewares/error.js';

// REGISTER USER
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  if(!name || !email || !password || !role) {
    return next(new ErrorHandler('Please provide all required fields', 400));
  }
});