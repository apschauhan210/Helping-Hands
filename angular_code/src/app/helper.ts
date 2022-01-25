import { Byte } from '@angular/compiler/src/util';
import { Location } from 'src/app/location';
import { Client } from './client';

export interface Helper {
    id: number;
    name: string;
    dob: Date;
    age: number;
    email: string;
    password: string;
    phone: string;
    // imageUrl: string;
    imgData: string;
    domains: string[];
    location: Location;
    offeringClients: string[];
}