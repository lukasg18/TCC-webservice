import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { SelecaoAlunoModule } from '../src/selecao-aluno/selecao-aluno.module';
import { MsgErr } from '../src/selecao-aluno/models/enuns/msgErr.enum';

const feature = loadFeature( './test/features/processos_seletivos.feature' );

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

  test( 'Exibindo todos os processos seletivos', ( {
    given,
    when,
    then,
  } ) => {
    let resposta: request.Response;
    given( 'o usuario deseja saber sobre todos os processos seletivos', async () => {
      //
    } );
    when('o usuario solicitar os processos seletivos', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/processos-seletivos/` );
      expect( resposta.status ).toBe( 200 );

    } );
    then('o sistema retorna a lista de processos seletivos', async () => {
      const dataBody = resposta.body;
      const expected = [ 'id', 'nome', 'tipo', 'status', 'categoria', 'anoBase'];      
      expect( Object.keys(dataBody[0]) ).toEqual( expect.arrayContaining(expected) );
    } );
  } );

  test( 'Exibindo os detalhes do processo seletivo', ( {
    given,
    when,
    then,
  } ) => {
    let resposta: request.Response;
    let processoId: number;

    given( 'o usuario quer saber os detalhes de um processo seletivo', async () => {
      //
    } );
    given( 'informa o id do processo seletivo', async () => {
      processoId = 1;
    } );
    when('o usuario solicitar os detalhes de um detarminado processo seletivo', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/processos-seletivos/${processoId}` );
      expect( resposta.status ).toBe( 200 );
    } );
    then('o sistema retorna os detalhes daquele processo seletivo', async () => {
      const dataBody = resposta.body;
      const expected = ['id', 'status', 'nome', 'descricao', 'tipo', 'anoBase', 'cursos'];

      expect( Object.keys(dataBody) ).toEqual( expect.arrayContaining(expected) );
    } );
  } );
  test( 'Exibindo os detalhes do processo seletivo inexistente', ( {
    given,
    when,
    then,
  } ) => {
    let resposta: request.Response;
    let processoId: number;

    given( 'o usuario quer saber os detalhes de um processo seletivo', async () => {
      //
    } );
    given( 'informa um id do processo seletivo inexistente', async () => {
      processoId = 100;
    } );
    when('o usuario solicitar os detalhes de um detarminado processo seletivo', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/processos-seletivos/${processoId}` );
      expect( resposta.status ).toBe( 403 );
    } );
    then('o sistema retorna uma mensagem de erro', async () => {
      const dataBody = resposta.body;
      
      expect( dataBody.message ).toContain( MsgErr.PROCES_DET_ID );
    } );
  } );

  test( 'Exbindo os cursos relacionados a um processo seletivo', ( {
    given,
    when,
    then,
  } ) => {
    let resposta: request.Response;
    let processoId: number;

    given( 'o usuario quer saber os cursos de um processo seletivo', async () => {
      //
    } );
    given( 'informa o id do processo seletivo', async () => {
      processoId = 1;
    } );
    when('o usuario solicitar os cursos de um detarminado processo seletivo', async () => {
      resposta= await request( app.getHttpServer() )
        .get( `/processos-seletivos/${processoId}/cursos` );
      expect( resposta.status ).toBe( 200 );
    } );
    then('o sistema retorna uma lista dos cursos relacionados ao processos seletivos', async () => {
      const dataBody = resposta.body;
      const expected = [ 'id', 'status', 'nome', 'cargaHoraria', 'vagas', 'turno', 'ofertante', 'municipio', 'datas' ]
      expect( Object.keys( dataBody[0] ) ).toEqual( expect.arrayContaining(expected) );
    } );
  } );

  test( 'Exibindo os cursos do processo seletivo inexistente', ( {
    given,
    when,
    then,
  } ) => {
    let resposta: request.Response;
    let processoId: number;

    given( 'o usuario quer saber os cursos de um processo seletivo', async () => {
      //
    } );
    given( 'informa um id do processo seletivo inexistente', async () => {
      processoId = 100;
    } );
    when('o usuario solicitar os cursos de um detarminado processo seletivo', async () => {
      resposta= await request( app.getHttpServer() )
        .get( `/processos-seletivos/${processoId}/cursos` );
      expect( resposta.status ).toBe( 403 );
    } );
    then('o sistema retorna uma mensagem de erro', async () => {
      const dataBody= resposta.body;      
      expect( dataBody.message ).toContain( MsgErr.PROCES_DET_ID );
    } );
  } );

  afterAll( async() => {
    await app.close();
  });
});
