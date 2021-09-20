import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Humidity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    sensorId:string;

    @Column({ length: 25 })
    value:string;

    @Column({ length: 25 })
    measuretime:string;

}

//@Column('date')
//birthday:Date;
