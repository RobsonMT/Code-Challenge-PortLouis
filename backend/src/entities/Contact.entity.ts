import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "contacts" })
export class Contact {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nome!: string;

  @Column({ length: 20 })
  telefone!: string;
}
