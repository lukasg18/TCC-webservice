import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { bloqueados } from "./bloqueados.entity";
import { concursos } from "./concursos.entity";


@Entity("tipo_concurso",{schema:"public" } )
export class tipo_concurso {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id_tipo_concurso',
      })
      idTipoConcurso: string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:25,
        name:"nome"
        })
    nome:string | null;

    @OneToMany(() => bloqueados, bloqueados => bloqueados.idTipoConcurso)
  bloqueados: bloqueados[];

  @OneToMany(() => concursos, concursos => concursos.idTipoConcurso)
  concursos: concursos[];
        
}
