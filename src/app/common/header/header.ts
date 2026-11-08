import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCard, MatCardSubtitle} from '@angular/material/card';

@Component({
    selector: 'app-header',
    imports: [MatCard, MatCardSubtitle],
    templateUrl: './header.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
}
