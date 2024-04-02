import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongodb:27017/social'), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
