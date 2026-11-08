import {ChangeDetectionStrategy, Component} from '@angular/core';

import {Footer} from './common/footer/footer';
import {Header} from './common/header/header';
import {LinksGrid} from './common/links-grid/links-grid';

@Component({
    selector: 'app-root',
    imports: [Header, LinksGrid, Footer],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
}
