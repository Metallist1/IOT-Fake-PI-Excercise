import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherdataModule } from './weatherdata/weatherdata.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Temperature} from "./weatherdata/entities/temperature.entity";
import {Humidity} from "./weatherdata/entities/humidity.entity";
import {Settings} from "./weatherdata/entities/settings.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'test',
          entities: [Temperature,Humidity,Settings],
          synchronize: true,
      }),
      WeatherdataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
