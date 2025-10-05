import { Request, Response } from "express";
import contactService from "../services/contact.service";

class ContactController {
  createController = async (req: Request, res: Response) => {
    try {
      const contact = await contactService.createService(req);
      return res.status(201).json(contact);
    } catch (error: any) {
      const errors = error?.errors || error.message;
      return res.status(400).json({ errors });
    }
  };

  findAllController = async (_: Request, res: Response) => {
    const contacts = await contactService.findAllService();
    return res.status(200).json(contacts);
  };

  updateController = async (req: Request, res: Response) => {
    try {
      const updatedContact = await contactService.updateService(req, res);
      return res.status(200).json(updatedContact);
    } catch (error: any) {
      const errors = error?.errors || error.message;
      return res.status(400).json({ errors });
    }
  };

  deleteController = async (req: Request, res: Response) => {
    await contactService.deleteService(req, res);
    return res.status(204).send();
  };
}

export default new ContactController();
