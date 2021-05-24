import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministratorService } from './services/administrator/administrator.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AdministratorService],
})
export class AppModule {}
