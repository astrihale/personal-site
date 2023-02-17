import {Component, OnInit} from '@angular/core';
import {MusicService} from "../../services/api-client";

@Component({
    selector: 'app-music-component',
    templateUrl: './music-component.component.html',
    styleUrls: ['./music-component.component.scss']
})
export class MusicComponentComponent {

    constructor(private service: MusicService) {

    }

    click() {
        this.service.musicGet()
            .subscribe(data => {
                console.log(data);
            });
    }

}
