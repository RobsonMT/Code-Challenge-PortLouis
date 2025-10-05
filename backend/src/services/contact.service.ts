import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/Contact.entity";
import { contactSchema } from "../schemas/contatos.schema";

export class ContactService {
  private contactRepo = AppDataSource.getRepository(Contact);

  createService = async (req: Request) => {
    await contactSchema.validate(req.body, { abortEarly: false });
    const { nome, telefone } = req.body;
    const newContact = this.contactRepo.create({ nome, telefone });
    return await this.contactRepo.save(newContact);
  };

  findAllService = async () => {
    return await this.contactRepo.find();
  };

  updateService = async (req: Request, res: Response) => {
    const { id } = req.params;
    await contactSchema.validate(req.body, { abortEarly: false });
    const { nome, telefone } = req.body;
    const contact = await this.contactRepo.findOneBy({ id: Number(id) });
    if (!contact)
      return res.status(404).json({ message: "Contato não encontrado" });

    contact.nome = nome;
    contact.telefone = telefone;
    return await this.contactRepo.save(contact);
  };

  deleteService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const contact = await this.contactRepo.findOneBy({ id: Number(id) });
    if (!contact)
      return res.status(404).json({ message: "Contato não encontrado" });

    return await this.contactRepo.delete({ id: Number(id) });
  };
}

export default new ContactService();
