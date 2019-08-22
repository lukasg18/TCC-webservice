import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { concursos } from "./concursos.entity";


@Entity("series",{schema:"public" } )
export class series {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'id_serie',
      })
      idSerie: number;
        

    @Column("character varying",{ 
        nullable:true,
        length:22,
        name:"nome"
        })
    nome:string | null;
        
    @ManyToMany(() => concursos, concursos => concursos.series)
  concursos: concursos[];
}
