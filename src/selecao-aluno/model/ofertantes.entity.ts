import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { municipios } from "./municipios.entity";
import { cursos } from "./cursos.entity";
import { municipios_abrangentes } from "./municipios_abrangentes.entity";


@Entity("ofertantes",{schema:"public" } )
export class ofertantes {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id_ofertante',
      })
      idOfertante: number;
        

    @Column("character varying",{ 
        nullable:true,
        length:63,
        name:"nome"
        })
    nome:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:23,
        name:"municipio"
        })
    municipio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:39,
        name:"nome_fantasia"
        })
    nome_fantasia:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_municipio"
        })
    id_municipio:string | null;
        
    @ManyToOne(() => municipios, municipios => municipios.ofertantes, {})
  @JoinColumn({ name: 'id_municipio' })
  idMunicipio: string | null;

  @OneToMany(() => cursos, cursos => cursos.idOfertante)
  cursos: cursos[];

  @OneToMany(
    () => municipios_abrangentes,
    municipiosAbrangentes => municipiosAbrangentes.idOfertante,
  )
  municipiosAbrangentes: municipios_abrangentes[];
}
