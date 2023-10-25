import { Router } from "express";
import { getUser } from "../controllers/user.controller";
let router = Router();

router.get('/:id', getUser);

export default router;