import {Component, Input} from '@angular/core';
import {LinkButtonOption} from "./link-button-option";

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {

  @Input() icon: LinkButtonOption = LinkButtonOption.None;
  @Input() link?: string;

  hovering = false;
  clicked = false;

  public get options(): typeof LinkButtonOption {
    return LinkButtonOption;
  }

  public iconForOption(option: LinkButtonOption) {
    switch (option) {
      case LinkButtonOption.Spotify:
        return "assets/spotify.svg";
      case LinkButtonOption.LinkedIn:
        return "assets/linkedin.svg";
      case LinkButtonOption.GitHub:
        return "assets/github.svg";
      default:
        return "";
    }
  }

  public colorThemeForOption(option: LinkButtonOption) {
    switch (option) {
      case LinkButtonOption.Spotify:
        return "mat-spotify";
      case LinkButtonOption.LinkedIn:
        return "mat-linkedin";
      case LinkButtonOption.GitHub:
        return "mat-github";
      default:
        return "";
    }
  }

  buttonClicked() {
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
      if (this.link)
        window.open(this.link, 'replace');
    }, 250);
  }
}
