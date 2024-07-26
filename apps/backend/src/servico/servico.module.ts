import { DbModule } from './../db/db.module';
import { Module } from '@nestjs/common';
import { ServicoController } from './servico.controller';

@Module({
  imports: [DbModule],
  controllers: [ServicoController]
})
export class ServicoModule {}
