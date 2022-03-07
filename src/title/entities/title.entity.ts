import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'mst_title' })
export class Title {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;
}
