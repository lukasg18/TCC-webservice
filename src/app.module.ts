import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentidadeModule } from './identidade-cidada/identidade.module';


@Module({
  imports: [IdentidadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
