import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { PessoaService } from '../service/pessoa.service';


@Controller('pessoa')
@ApiUseTags('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get('/:qtd')
  async getLocationCPF(@Param() qtd) {
    return await this.pessoaService.getAll(
        qtd.qtd,
    );
  }

}
