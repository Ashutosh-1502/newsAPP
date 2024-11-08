import express from 'express';
import {verifyJWT} from "../middleware.js";
import {getUserProfile, updateUserProfile} from "../controllers/userController.js";

const router = express.Router();

router.get('/get-user-profile', verifyJWT, getUserProfile);

router.put('/update-user-profile', verifyJWT, updateUserProfile);

export default router;
