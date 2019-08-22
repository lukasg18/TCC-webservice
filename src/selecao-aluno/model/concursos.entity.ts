import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { tipo_concurso } from './tipo_concurso.entity';
import { cronograma } from './cronograma.entity';
import { inscritos } from './inscritos.entity';
import { municipios_abrangentes } from './municipios_abrangentes.entity';
import { series } from './series.entity';
import { cursos } from './cursos.entity';

@Entity('concursos', { schema: 'public' })
export class concursos {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id_concurso',
  })
  id_concurso: number | null;

  @Column('bigint', {
    nullable: true,
    name: 'id_tipo_concurso',
  })
  id_tipo_concurso: string | null;

  @Column('character varying', {
    nullable: true,
    length: 31,
    name: 'nome',
  })
  nome: string | null;

  @Column('bigint', {
    nullable: true,
    name: 'ano_base',
  })
  ano_base: string | null;

  @Column('timestamp without time zone', {
    nullable: true,
    name: 'dt_inicio',
  })
  dt_inicio: Date | null;

  @Column('timestamp without time zone', {
    nullable: true,
    name: 'dt_fim',
  })
  dt_fim: Date | null;

  @Column('character varying', {
    nullable: true,
    length: 169,
    name: 'descricao',
  })
  descricao: string | null;

  @ManyToOne(type => tipo_concurso, tipoConcurso => tipoConcurso.concursos)
  @JoinColumn({ name: 'id_tipo_concurso' })
  idTipoConcurso: tipo_concurso | null;

  @OneToMany(type => cronograma, cronograma => cronograma.idConcurso)
  cronograma: cronograma[];

  @OneToMany(type => inscritos, inscritos => inscritos.id_concurso)
  inscritos: inscritos[];

  @OneToMany(
    type => municipios_abrangentes,
    municipiosAbrangentes => municipiosAbrangentes.idConcurso,
  )
  municipiosAbrangentes: municipios_abrangentes[];

  @ManyToMany(type => series, series => series.concursos)
  @JoinTable()
  series: series[];

  @ManyToMany(type => cursos, cursos => cursos.concursos)
  @JoinTable({
    name: 'cursos_concursos',
    joinColumn: { name: 'id_concurso' },
    inverseJoinColumn: {name: 'id_curso'},
  })
  cursos: cursos[];
}
