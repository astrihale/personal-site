import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {

  hovering = false;
  clicked = false;

  buttonClicked() {
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
      window.open('https://open.spotify.com/user/0tbj5ef7bvxnmxx9iijsb34es?si=0b092e82fd284b78', 'replace');
    }, 100);
  }

}
