import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { concursos } from "./concursos.entity";


@Entity("cronograma",{schema:"public" } )
export class cronograma {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id_cronograma',
      })
    id_cronograma:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_concurso"
        })
    id_concurso:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:98,
        name:"nome"
        })
    nome:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"dt_inicio"
        })
    dt_inicio:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"dt_fim"
        })
    dt_fim:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"obs"
        })
    obs:string | null;
        
    @ManyToOne(type => concursos, concursos => concursos.cronograma)
  @JoinColumn({ name: 'id_concurso' })
  idConcurso: concursos;

  
}
