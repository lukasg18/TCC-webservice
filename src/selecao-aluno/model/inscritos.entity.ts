import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { cursos } from "./cursos.entity";
import { concursos } from "./concursos.entity";
import { inscritos_compl } from "./inscritos_compl.entity";


@Entity("inscritos",{schema:"public" } )
export class inscritos {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id_inscrito',
      })
      idInscrito: number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_curso"
        })
    id_curso:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_concurso"
        })
    id_concurso:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"rm_aluno"
        })
    rm_aluno:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:19,
        name:"dt_nascimento"
        })
    dt_nascimento:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"num_telefone"
        })
    num_telefone:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:29,
        name:"dt_inscricao"
        })
    dt_inscricao:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:74,
        name:"nome_aluno"
        })
    nome_aluno:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:33,
        name:"num_celular"
        })
    num_celular:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:14,
        name:"cpf"
        })
    cpf:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:37,
        name:"pne"
        })
    pne:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"num_telefone2"
        })
    num_telefone2:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:47,
        name:"email"
        })
    email:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:23,
        name:"aluno_rede"
        })
    aluno_rede:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:23,
        name:"nome_mae"
        })
    nome_mae:string | null;
        
    @ManyToOne(type => cursos, cursos => cursos.inscritos, { nullable: false })
  @JoinColumn({ name: 'id_curso' })
  idCurso: cursos;

  @ManyToOne(type => concursos, concursos => concursos.inscritos, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_concurso' })
  idConcurso: concursos;

  @OneToMany(
    type => inscritos_compl,
    inscritosCompl => inscritosCompl.idInscrito,
  )
  InscritosCompl: inscritos_compl[];
}
