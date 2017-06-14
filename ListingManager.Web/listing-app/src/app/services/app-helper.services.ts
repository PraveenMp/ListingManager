import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AppHelpersService {

    private _httpHeaders: Headers;
    public get httpHeaders(): Headers {
        this._httpHeaders = new Headers({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'crossDomain': 'true',
        });
        return this._httpHeaders;
    }

    private _apiAddress: string;
    public get apiAddress(): string {
        let hostname = window.location.hostname.toLowerCase();

        this._apiAddress = 'http://localhost:52514/';

        return this._apiAddress;
    }

}

