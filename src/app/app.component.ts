import {AfterContentInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  body: ElementRef<HTMLElement> | undefined;

  constructor() {
  }

  ngAfterContentInit() {
    this.body = new ElementRef<HTMLElement>(document.body);
    this.body.nativeElement.classList.add('dark-background');
  }
}
