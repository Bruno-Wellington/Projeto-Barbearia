import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ServicoModule } from './servico/servico.module';

@Module({
  imports: [DbModule, ServicoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
