import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Contato } from './contato.entity';
import { Documento } from './documento.entity';
import { Pessoa_endereco } from './pessoaendereco.entity';

@Entity()
export class Pessoa extends Auditoria {
  @Column({ type: 'varchar', length: 250 })
  nome: string;

  @Column({ type: 'varchar', length: 250 })
  cpf: string;

  @Column({ name: 'datanascimento', type: 'date' })
  dataNascimento: Date;

  @OneToMany(type => Pessoa_endereco, pessoa_endereco => pessoa_endereco.enderecoid)
  pessoa_endereco: Pessoa_endereco[];

  @ManyToMany(type => Contato)
  @JoinTable({
    name: 'pessoa_contato',
    joinColumn: { name: 'pessoaid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'contatoid', referencedColumnName: 'id' },
  })
  contato: Contato[];

  @OneToMany(type => Documento, documentos => documentos.id)
  documentos: Documento[];

}
