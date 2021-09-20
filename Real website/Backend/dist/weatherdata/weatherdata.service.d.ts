import { Temperature } from "./entities/temperature.entity";
import { Repository } from "typeorm";
import { Humidity } from "./entities/humidity.entity";
import { Settings } from "./entities/settings.entity";
export declare class WeatherdataService {
    private temperatureRepository;
    private humidityRepository;
    private settingsRepository;
    constructor(temperatureRepository: Repository<Temperature>, humidityRepository: Repository<Humidity>, settingsRepository: Repository<Settings>);
    getTemperature(): Promise<Temperature[]>;
    getHumidity(): Promise<Humidity[]>;
    getSettings(id: string): Promise<Settings>;
    addTemperature(temperature: Temperature): Promise<Temperature>;
}
