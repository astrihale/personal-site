import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';

import {MusicService} from '../../services/api-client';

@Component({
    selector: 'app-music',
    imports: [MatCard, MatButton],
    templateUrl: './music.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Music {
    private readonly musicService = inject(MusicService);

    protected click(): void {
        this.musicService.musicGet().subscribe(data => console.log(data));
    }
}
