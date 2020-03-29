// Use the random user generator API found here: https://randomuser.me/ to retrieve data for your services.
// Further documentation for implementation can be found here: https://randomuser.me/documentation#format

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RandomUserGeneratorData {
    info: {
        seed: string,
        results: number,
        page: number,
        version: string
    };
    results: RawProfileData[];
}

export interface RawProfileData {
    gender: string,
    name: {
        first: string,
        last: string,
        title: string
    },
    location: {
        street: {
            number: number,
            name: string
        },
        city: string,
        state: string,
        country: string,
        postcode: string
    },
    email: string,
    phone: string,
    cell: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
}

@Injectable({
    providedIn: 'root'
})
export class FormsService {

    public constructor(private readonly http: HttpClient) {}

    getUserProfile(): Observable<RandomUserGeneratorData> {
        return this.http.get(this._endPoint, {
            headers: {
                'Content-Type': 'application/json'
            }
        }) as Observable<RandomUserGeneratorData>;
    }

    private _endPoint: string = 'https://randomuser.me/api/';
}
