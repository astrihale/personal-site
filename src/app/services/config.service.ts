import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config} from './config';
import {MusicService} from "./api-client";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    config: Config | undefined;

    constructor(private http: HttpClient, private musicService: MusicService) {
    }

    loadConfiguration() {
        return this.http.get<Config>('assets/config.json')
            .subscribe(data => {
                console.log(data);
                this.config = data;
                this.musicService.basePath = this.config.apis.spotify;
            });
    }
}
