import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { sre } from "./sre.entity";
import { municipios } from "./municipios.entity";


@Entity("escolas",{schema:"public" } )
export class escolas {

    @Column({
        nullable: false,
        primary: true,
        name: 'id_escola',
      })
    id_escola:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_sre"
        })
    id_sre:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_municipio"
        })
    id_municipio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:65,
        name:"nome"
        })
    nome:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"inep"
        })
    inep:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"ativo"
        })
    ativo:boolean | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"dt_cadastro"
        })
    dt_cadastro:Date | null;
        
    @ManyToOne(type => sre, sre => sre.escolas)
  @JoinColumn({ name: 'id_sre' })
  idSre: sre;

  @ManyToOne(type => municipios, municipios => municipios.escolas)
  @JoinColumn({ name: 'id_municipio' })
  idMunicipio: municipios;
}
