import { Router } from "express";
import contactController from "../controllers/contact.controller";

const router = Router();

router.post("/contacts", contactController.createController);
router.get("/contacts", contactController.findAllController);
router.patch("/contacts/:id", contactController.updateController);
router.delete("/contacts/:id", contactController.deleteController);

export default router;
