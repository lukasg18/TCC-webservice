import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { escolas } from "./escolas.entity";


@Entity("sre",{schema:"public" } )
export class sre {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'id_sre',
      })
      idSre: number;
        

    @Column("character varying",{ 
        nullable:true,
        length:34,
        name:"nome"
        })
    nome:string | null;
        
    @OneToMany(() => escolas, escolas => escolas.idSre)
  escolas: escolas[];
}
