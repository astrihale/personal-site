import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {FooterComponent} from './common/footer/footer.component';
import {HeaderComponent} from './common/header/header.component';
import {LinksGridComponent} from './common/links-grid/links-grid.component';
import {LinkButtonComponent} from './common/link-button/link-button.component';
import {MatLegacyButtonModule} from "@angular/material/legacy-button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ConfigService} from "./services/config.service";
import {HttpClientModule} from "@angular/common/http";
import {
    MusicComponentComponent
} from './components/music-component/music-component.component';
import {ApiModule} from "./services/api-client";

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        LinksGridComponent,
        LinkButtonComponent,
        MusicComponentComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatLegacyButtonModule,
        MatTooltipModule,
        ApiModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: ((service: ConfigService) => service.loadConfiguration()),
            deps: [ConfigService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
