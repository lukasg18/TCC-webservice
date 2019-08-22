import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelecaoModule } from './selecao-aluno/selecao.module';


@Module({
  imports: [SelecaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
