import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { tipo_concurso } from "./tipo_concurso.entity";


@Entity("bloqueados",{schema:"public" } )
export class bloqueados {

    @Column("bigint",{ 
        nullable:true,
        name:"cpf",
        primary: true,
        
        })
    cpf:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_tipo_concurso"
        })
    id_tipo_concurso:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"dt_fim"
        })
    dt_fim:Date | null;

    @ManyToOne(type => tipo_concurso, tipoConcurso => tipoConcurso.bloqueados)
  @JoinColumn({ name: 'id_tipo_concurso' })
  idTipoConcurso: tipo_concurso
        
}
