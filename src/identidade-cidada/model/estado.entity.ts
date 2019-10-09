import { Entity, Column, OneToMany } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Municipio } from './municipio.entity';

@Entity()
export class Estado extends Auditoria {
  @Column({ type: "varchar", length: 2 })
  sigla: string;

  @Column({ type: "varchar", length: 100 })
  nome: string;

  @OneToMany(type => Municipio, municipio => municipio.id)
  municipio: Municipio[];

}
