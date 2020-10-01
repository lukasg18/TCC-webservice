import { Injectable } from '@nestjs/common';
import { Estado } from '../model/estado.entity';

@Injectable()
export class PessoaService {
  constructor() {}

  async getAll(qtd: number): Promise<Estado[]> {
    return await Estado.find();
  }

  async getOne(id: number): Promise<Estado> {
    return await Estado.findOne({ id: id });
  }

}
