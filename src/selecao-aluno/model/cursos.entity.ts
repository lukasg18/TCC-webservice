import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { ofertantes } from "./ofertantes.entity";
import { inscritos } from "./inscritos.entity";
import { concursos } from "./concursos.entity";


@Entity("cursos",{schema:"public" } )
export class cursos {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id_curso',
      })
      idCurso: number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_ofertante"
        })
    id_ofertante:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:49,
        name:"nome"
        })
    nome:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:38,
        name:"carga_horaria"
        })
    carga_horaria:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"vagas"
        })
    vagas:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"turno"
        })
    turno:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:19,
        name:"dt_inicio"
        })
    dt_inicio:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"dt_fim"
        })
    dt_fim:Date | null;
        

    @ManyToOne(() => ofertantes, ofertantes => ofertantes.cursos)
  @JoinColumn({ name: 'id_ofertante' })
  idOfertante: string

  @OneToMany(() => inscritos, inscritos => inscritos.id_curso)
  inscritos: inscritos[];

  @ManyToMany(() => concursos, concursos => concursos.cursos)
  concursos: concursos[];
}
