import { Injectable } from '@nestjs/common';
import { Pessoa } from '../model/pessoa.entity';

@Injectable()
export class PessoaService {
  constructor() {}

  async getAll(qtd: number): Promise<Pessoa[]> {
    return await Pessoa.find({ take: qtd });
  }

  async getOne(id: number): Promise<Pessoa> {
    return await Pessoa.findOne({ id: id });
  }
}
