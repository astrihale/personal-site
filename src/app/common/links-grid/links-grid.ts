import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCard} from '@angular/material/card';

import {LinkButton} from '../link-button/link-button';
import {LinkButtonOption} from '../link-button/link-button-option';

interface Link {
    option: LinkButtonOption;
    url: string;
}

@Component({
    selector: 'app-links-grid',
    imports: [MatCard, LinkButton],
    templateUrl: './links-grid.html',
    styleUrl: './links-grid.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksGrid {
    protected readonly links: readonly Link[] = [
        {option: 'spotify', url: 'https://open.spotify.com/user/0tbj5ef7bvxnmxx9iijsb34es?si=0b092e82fd284b78'},
        {option: 'lastfm', url: 'https://www.last.fm/user/Astrihale'},
        {option: 'linkedin', url: 'https://www.linkedin.com/in/ana-v-963b35155/'},
        {option: 'github', url: 'https://github.com/astrihale/'},
    ];
}
