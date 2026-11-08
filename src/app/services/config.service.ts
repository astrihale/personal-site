import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

import {MusicService} from './api-client';
import {Config} from './config';

@Injectable({providedIn: 'root'})
export class ConfigService {
    private readonly http = inject(HttpClient);
    private readonly musicService = inject(MusicService);

    private readonly _config = signal<Config | undefined>(undefined);
    readonly config = this._config.asReadonly();

    /**
     * Loads `assets/config.json` before the app starts. A failure is logged
     * rather than thrown so a missing config can't stop the page rendering.
     */
    async loadConfiguration(): Promise<void> {
        try {
            const config = await firstValueFrom(this.http.get<Config>('assets/config.json'));
            this._config.set(config);
            this.musicService.basePath = config.apis.spotify;
        } catch (err) {
            console.error('Failed to load assets/config.json', err);
        }
    }
}
