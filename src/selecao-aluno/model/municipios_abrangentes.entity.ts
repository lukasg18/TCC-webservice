import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { concursos } from "./concursos.entity";
import { ofertantes } from "./ofertantes.entity";
import { municipios } from "./municipios.entity";


@Entity("municipios_abrangentes",{schema:"public" } )
export class municipios_abrangentes {

    @ManyToOne(type => concursos, concursos => concursos.municipiosAbrangentes, {
        primary: true,
        nullable: false,
      })
      @JoinColumn({ name: 'id_concurso' })
      idConcurso: string | null;
    
      @ManyToOne(
        type => ofertantes,
        ofertantes => ofertantes.municipiosAbrangentes,
        { primary: true, nullable: false },
      )
      @JoinColumn({ name: 'id_ofertante' })
      idOfertante: string | null;
    
      @ManyToOne(
        type => municipios,
        municipios => municipios.municipiosAbrangentes,
        { primary: true, nullable: false },
      )
      @JoinColumn({ name: 'ID_MUNICIPIO' })
      idMunicipio: municipios | null;
        
}
