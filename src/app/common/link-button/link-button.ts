import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

import {LINK_BUTTON_STYLES, LinkButtonOption} from './link-button-option';

@Component({
    selector: 'app-link-button',
    imports: [MatButton, MatTooltip],
    templateUrl: './link-button.html',
    styleUrl: './link-button.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkButton {
    readonly option = input.required<LinkButtonOption>();
    readonly link = input<string>();

    protected readonly clicked = signal(false);

    protected readonly style = computed(() => LINK_BUTTON_STYLES[this.option()]);

    protected buttonClicked(): void {
        this.clicked.set(true);
        setTimeout(() => {
            this.clicked.set(false);
            const link = this.link();
            if (link) {
                window.open(link, 'replace');
            }
        }, 250);
    }
}
