import express from "express";
import { AppDataSource } from "./data-source";
import contactsRoutes from "./routes/contacts.routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function start() {
  try {
    await AppDataSource.initialize();
    console.log("Connected to the database via TypeORM");

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use("/api", contactsRoutes);

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting application:", error);
    process.exit(1);
  }
}

start();
