import  * as express   from "express";
import { DashboardController } from "../controllers/dashboard";
import { LogInController } from "../controllers/login";
import { SignUpController } from "../controllers/signUp";
import { auth } from "../middleware";
const router = express.Router();

router.post('/signup', SignUpController);

router.post('/login', LogInController);

router.get('/dashboard',auth, DashboardController);


export default router;

