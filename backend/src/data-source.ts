import "reflect-metadata";
import { Contact } from "./entities/Contact.entity";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const isDev = process.env.NODE_ENV === "development";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "contatos",
  entities: [Contact],
  migrations: ["src/migrations/*.ts"],
  synchronize: isDev, // ✅ Só ativa em dev
  logging: isDev, // Loga queries só em dev
});
