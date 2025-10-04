import { Router } from "express";
import {
  createContact,
  deleteContact,
  listContact,
  updateContact,
} from "../controllers/contacts.controller";

const router = Router();

router.post("/contacts", createContact);
router.get("/contacts", listContact);
router.patch("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);

export default router;
