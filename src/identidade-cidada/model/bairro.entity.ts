import { Auditoria } from './Auditoria.entity';
import { Column, ManyToOne, OneToMany, JoinColumn, Index, Entity } from 'typeorm';
import { Municipio } from './municipio.entity';
import { Endereco } from './endereco.entity';

@Entity()
export class Bairro extends Auditoria {
  @Column({type:"varchar"})
  nome: string;

  @ManyToOne(type => Municipio, municipio => municipio.id)
  @Index('municipioid_index')
  @JoinColumn({ name: 'municipioid' })
  municipio: Municipio;

  @OneToMany(() => Endereco, endereco => endereco.bairro)
  endereco: Endereco[];
}
