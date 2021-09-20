import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Temperature} from "./entities/temperature.entity";
import {Repository} from "typeorm";
import {Humidity} from "./entities/humidity.entity";
import {Settings} from "./entities/settings.entity";

@Injectable()
export class WeatherdataService {
    constructor(@InjectRepository(Temperature) private temperatureRepository: Repository<Temperature>,
                @InjectRepository(Humidity) private humidityRepository: Repository<Humidity>,
                @InjectRepository(Settings) private settingsRepository: Repository<Settings>,) { }

    async getTemperature(): Promise<Temperature[]> {
        return await this.temperatureRepository.find();
    }
    async getHumidity(): Promise<Humidity[]> {
        return await this.humidityRepository.find();
    }
    async getSettings(id: string): Promise<Settings> {
        return await this.settingsRepository.findOne({
            where: [{ "sensorId": id }]});
    }

    async addTemperature(temperature: Temperature) {
        await this.temperatureRepository.create(temperature);
        return temperature;
    }

}
