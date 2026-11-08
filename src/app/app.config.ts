import {
    ApplicationConfig,
    inject,
    provideAppInitializer,
    provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {provideHttpClient, withFetch} from '@angular/common/http';

import {APIS} from './services/api-client';
import {ConfigService} from './services/config.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(withFetch()),
        ...APIS,
        provideAppInitializer(() => inject(ConfigService).loadConfiguration()),
    ],
};
