import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, Index } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Municipio } from './municipio.entity';
import { Pessoa_endereco} from './pessoaendereco.entity';
import { Bairro } from './bairro.entity';

@Entity()
export class Endereco extends Auditoria {

  @Column({ type: "varchar", length: 20 })
  @Index("cep_index")
  cep: string;

  @Column({ type: "varchar", length: 500 })
  logradouro: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  complemento: string;

  @Column({ type: "int" })
  numero: number;

  @OneToMany(type => Pessoa_endereco, pessoa_endereco => pessoa_endereco.id)
  pessoa_endereco: Pessoa_endereco[];

  @ManyToOne(type => Bairro, bairro => bairro.endereco)
  @JoinColumn({name:"bairroid"})
  @Index("bairro_index")
  bairro: string;
}
