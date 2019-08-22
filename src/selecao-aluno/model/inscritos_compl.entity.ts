import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { inscritos } from "./inscritos.entity";


@Entity("inscritos_compl",{schema:"public" } )
export class inscritos_compl {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id_inscritos_compl',
      })
      idInscritosCompl: number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_inscrito"
        })
    id_inscrito:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero"
        })
    numero:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:60,
        name:"logradouro"
        })
    logradouro:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:41,
        name:"cep"
        })
    cep:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"bairro"
        })
    bairro:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:37,
        name:"municipio"
        })
    municipio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:81,
        name:"escola"
        })
    escola:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:61,
        name:"media_port"
        })
    media_port:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:37,
        name:"media_mat"
        })
    media_mat:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:25,
        name:"serie"
        })
    serie:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"turno"
        })
    turno:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"media_fisica"
        })
    media_fisica:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:9,
        name:"media_quimica"
        })
    media_quimica:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:7,
        name:"media_biologia"
        })
    media_biologia:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"cadunico"
        })
    cadunico:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:6,
        name:"cei_lingua"
        })
    cei_lingua:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:3,
        name:"cei_nivel"
        })
    cei_nivel:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"media_ingles"
        })
    media_ingles:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"frequencia"
        })
    frequencia:boolean | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"media_total"
        })
    media_total:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"quant_inscrito"
        })
    quant_inscrito:string | null;
        

    @ManyToOne(type => inscritos, inscritos => inscritos.InscritosCompl, {
        nullable: false,
      })
      @JoinColumn({ name: 'id_inscrito' })
      idInscrito: inscritos;

      
}
