import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as pacote from '../package.json';

const ambiente = process.env.NODE_ENV || 'development';

async function bootstrap() {
  let schema: 'http' | 'https' = 'http';
  if ( ambiente === 'production' ) {
    schema = 'https';
  }

  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle( pacote.name )
    .setDescription( pacote.description )
    .setVersion( pacote.version )
    .addTag( 'selecao-aluno' )
    .addTag( 'health-check' )
    .setSchemes( schema )
    .build();
  const document = SwaggerModule.createDocument( app, options );

  // para gerar o swagger.json (copiando a saida do console)
  fs.writeFileSync( 'swagger.json', JSON.stringify( document ) );

  SwaggerModule.setup( 'docs', app, document );
  app.enableCors();
  await app.listen(3002);
}
bootstrap();
