import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Estado } from './estado.entity';
import { TipoDocumento } from './tipoDocumento.entity';
import { Pessoa } from './pessoa.entity';

@Entity()
export class Documento extends Auditoria {

  @Column({ type: "varchar", length: 250 })
  @Index("numerodocumento_index")
  numero: string;

  @ManyToOne(type => TipoDocumento, tipoDocumento => tipoDocumento.id)
  @JoinColumn({ name: "tipodocumentoid" })
  @Index("tipodocumentoid_documento_index")
  tipodocumento: TipoDocumento;

  @ManyToOne(type => Pessoa, pessoa => pessoa.id)
  @JoinColumn({name: "pessoaid"})
  @Index("pessoaid_documento_index")
  pessoa: Pessoa;
}
