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
        return "assets/link-button-icons/spotify.svg";
      case LinkButtonOption.LinkedIn:
        return "assets/link-button-icons/linkedin.svg";
      case LinkButtonOption.GitHub:
        return "assets/link-button-icons/github.svg";
      case LinkButtonOption.LastFm:
        return "assets/link-button-icons/lastfm.svg";
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
      case LinkButtonOption.LastFm:
        return "mat-lastfm";
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
