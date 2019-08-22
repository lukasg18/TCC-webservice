import { loadFeature, defineFeature } from 'jest-cucumber';
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { SelecaoAlunoModule } from '../src/selecao-aluno/selecao-aluno.module';
import { MsgErr } from '../src/selecao-aluno/models/enuns/msgErr.enum';

const feature = loadFeature( './test/features/cursos.feature' );

jest.mock('../src/selecao-aluno/services/database.service');
jest.mock('../src/selecao-aluno/selecao-aluno.module');

defineFeature( feature, test => {
  let module: TestingModule;
  let app: INestApplication;

  beforeAll( async () => {
    module = await Test.createTestingModule( {
      imports: [ SelecaoAlunoModule ],
    } ).compile();
    app = module.createNestApplication();
    await app.init();
  } );

  test( 'Exibindo todos os cursos', ( {
    given,
    when,
    then,
  } ) => {
    let resposta: request.Response;

    given( 'o usuario deseja saber sobre todos os cursos', async () => {
      //
    } );
    when('o usuario solicitar os cursos', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/cursos/` );
      expect( resposta.status ).toBe( 200 );
    } );
    then('o sistema retorna a lista de cursos', async () => {
      const dataBody = resposta.body;
      const expected = [ 'id', 'nome', 'ofertante', 'status', 'categoria' ];
      expect( Object.keys(dataBody[0]) ).toEqual( expect.arrayContaining(expected) );
      },
    );
  } );

  test( 'Exibindo os detalhes do curso', ( {
    given,
    when,
    then,
  } ) => {
    let resposta: request.Response;
    let cursoId: number;

    given( 'o usuario quer saber os detalhes de um curso', async () => {
      //
    } );
    given( 'informa o id do curso', async () => {
      cursoId = 123;
    } );
    when('o usuario solicitar os detalhes de um detarminado curso', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/cursos/${cursoId}` );
      expect( resposta.status ).toBe( 200 );
    } );
    then('o sistema retorna os detalhes daquele curso', async () => {
      const dataBody = resposta.body;
      const expected = [
        'id',
        'status',
        'nome',
        'cargaHoraria',
        'vagas',
        'turno',
        'ofertante',
        'municipio',
        'datas',
      ];

      expect( Object.keys(dataBody) ).toEqual( expect.arrayContaining(expected) );
    });
  } );

  test( 'Exibindo os detalhes do curso inexistente', ( {
    given,
    when,
    then,
  } ) => {
    let resposta: request.Response;
    let cursoId: number;

    given( 'o usuario quer saber os detalhes de um curso', async () => {
      //
    } );
    given( 'informa um id de curso inexistente', async () => {
      cursoId = 100;
    } );
    when('o usuario solicitar os detalhes de um detarminado curso', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/cursos/${cursoId}` );
      expect( resposta.status ).toBe( 403 );
    } );
    then('o sistema retorna uma mensagem de erro', async () => {
      const dataBody = resposta.body;
      expect( dataBody.message ).toContain( MsgErr.CURSO_DET_ID );
      },
    );
  } );

  afterAll( async () => {
    await app.close();
  });
});
