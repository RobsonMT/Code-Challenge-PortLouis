import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/Contact.entity";
import { contactSchema } from "../validations/contatos.schema";

const contactRepo = () => AppDataSource.getRepository(Contact);

export const createContact = async (req: Request, res: Response) => {
  try {
    await contactSchema.validate(req.body, { abortEarly: false });
    const { nome, telefone } = req.body;
    const repo = contactRepo();
    const newContact = repo.create({ nome, telefone });
    await repo.save(newContact);
    return res.status(201).json(newContact);
  } catch (error: any) {
    const errors = error?.errors || error.message;
    return res.status(400).json({ errors });
  }
};

export const listContact = async (_req: Request, res: Response) => {
  const repo = contactRepo();
  const contacts = await repo.find();
  return res.status(200).json(contacts);
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await contactSchema.validate(req.body, { abortEarly: false });
    const { nome, telefone } = req.body;
    const repo = contactRepo();
    const contact = await repo.findOneBy({ id: Number(id) });
    if (!contact)
      return res.status(404).json({ message: "Contato não encontrado" });

    contact.nome = nome;
    contact.telefone = telefone;
    await repo.save(contact);

    return res.status(200).json(contact);
  } catch (error: any) {
    const errors = error?.errors || error.message;
    return res.status(400).json({ errors });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  const repo = contactRepo();
  const contact = await repo.findOneBy({ id: Number(id) });
  if (!contact)
    return res.status(404).json({ message: "Contato não encontrado" });

  await repo.delete({ id: Number(id) });
  return res.status(204).send();
};
