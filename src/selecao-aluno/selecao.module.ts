import {  Module } from '@nestjs/common';
import { databaseProviders } from './database/database.providers';

const modelProvider = [...databaseProviders];

@Module({
  imports: [
  ],
  providers: [...modelProvider],
  controllers: [],
})
export class SelecaoModule {}
