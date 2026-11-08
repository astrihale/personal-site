import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCard, MatCardSubtitle} from '@angular/material/card';

@Component({
    selector: 'app-footer',
    imports: [MatCard, MatCardSubtitle],
    templateUrl: './footer.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
}
