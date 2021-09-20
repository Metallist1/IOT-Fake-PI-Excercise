import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Settings {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    sensorId:string;

    @Column({ length: 25 })
    sendInterval:string;

    @Column({ length: 25 })
    readInterval:string;

}

//@Column('date')
//birthday:Date;
