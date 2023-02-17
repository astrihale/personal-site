import {Component} from '@angular/core';
import {LinkButtonOption} from "../link-button/link-button-option";

@Component({
    selector: 'app-links-grid',
    templateUrl: './links-grid.component.html',
    styleUrls: ['./links-grid.component.scss']
})
export class LinksGridComponent {

    links = [{
        icon: LinkButtonOption.Spotify,
        link: 'https://open.spotify.com/user/0tbj5ef7bvxnmxx9iijsb34es?si=0b092e82fd284b78'
    }, {
        icon: LinkButtonOption.LastFm,
        link: 'https://www.last.fm/user/Astrihale'
    }, {
        icon: LinkButtonOption.LinkedIn,
        link: 'https://www.linkedin.com/in/ana-vuleti%C4%87-963b35155/'
    }, {
        icon: LinkButtonOption.GitHub,
        link: 'https://github.com/astrihale/'
    }];

}
