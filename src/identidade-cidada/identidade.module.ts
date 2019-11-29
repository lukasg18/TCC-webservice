import {  Module } from '@nestjs/common';
import { databaseProviders } from './database/database.providers';
import { PessoaService } from './service/pessoa.service';
import { PessoaController } from './controller/pessoa.controller';

const modelProvider = [...databaseProviders];

@Module({
  imports: [
  ],
  providers: [...modelProvider, PessoaService],
  controllers: [PessoaController],
})
export class IdentidadeModule {}
