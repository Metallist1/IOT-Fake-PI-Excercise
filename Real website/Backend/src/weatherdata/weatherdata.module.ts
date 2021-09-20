import { Module } from '@nestjs/common';
import { WeatherdataService } from './weatherdata.service';
import { WeatherGateway } from './weatherdata.controller';
import {Temperature} from "./entities/temperature.entity";
import {Humidity} from "./entities/humidity.entity";
import {Settings} from "./entities/settings.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Temperature,Humidity,Settings])],
  providers: [WeatherdataService, WeatherGateway],
  controllers: []
})
export class WeatherdataModule {}
