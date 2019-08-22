import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { escolas } from "./escolas.entity";
import { municipios_abrangentes } from "./municipios_abrangentes.entity";
import { ofertantes } from "./ofertantes.entity";


@Entity("municipios",{schema:"public" } )
export class municipios {

    @Column("bigint",{ 
        nullable:true,
        name:"id_municipio",
        primary: true
        })
    id_municipio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:23,
        name:"nome"
        })
    nome:string | null;

    @OneToMany(type => escolas, escolas => escolas.idMunicipio)
  escolas: escolas[];

  @OneToMany(
    type => municipios_abrangentes,
    municipiosAbrangentes => municipiosAbrangentes.idMunicipio,
  )
  municipiosAbrangentes: municipios_abrangentes[];

  @OneToMany(type => ofertantes, ofertantes => ofertantes.idMunicipio)
  ofertantes: ofertantes[];
        
}
