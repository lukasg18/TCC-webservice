import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  Index,
  BaseEntity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { Endereco } from './endereco.entity';
import { Auditoria } from './Auditoria.entity';

@Entity()
export class Pessoa_endereco {
  @PrimaryColumn()
  pessoaid: number;

  @PrimaryColumn()
  enderecoid: number;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  dataregistro: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  atualizadoem: Date;

  @ManyToOne(type => Pessoa, pessoa => pessoa.id)
  @JoinColumn({ name: 'pessoaid' })
  @Index('pessoaid_pessoa_endereco_index')
  pessoa: Pessoa;

  @ManyToOne(type => Endereco, endereco => endereco.id)
  @JoinColumn({ name: 'enderecoid' })
  @Index('enderecoid_pessoa_endereco_index')
  endereco: Endereco;
}
