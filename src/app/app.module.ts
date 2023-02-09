import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {FooterComponent} from './common/footer/footer.component';
import {HeaderComponent} from './common/header/header.component';
import { LinksGridComponent } from './common/links-grid/links-grid.component';
import { LinkButtonComponent } from './common/link-button/link-button.component';
import {MatLegacyButtonModule} from "@angular/material/legacy-button";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LinksGridComponent,
    LinkButtonComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatLegacyButtonModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
