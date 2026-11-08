export type LinkButtonOption = 'spotify' | 'lastfm' | 'linkedin' | 'github' | 'cv';

export interface LinkButtonStyle {
    /** Shown in the tooltip as "My {label} Profile". */
    label: string;
    icon: string;
    themeClass: string;
}

export const LINK_BUTTON_STYLES: Record<LinkButtonOption, LinkButtonStyle> = {
    spotify: {label: 'Spotify', icon: 'assets/link-button-icons/spotify.svg', themeClass: 'mat-spotify'},
    lastfm: {label: 'LastFm', icon: 'assets/link-button-icons/lastfm.svg', themeClass: 'mat-lastfm'},
    linkedin: {label: 'LinkedIn', icon: 'assets/link-button-icons/linkedin.svg', themeClass: 'mat-linkedin'},
    github: {label: 'GitHub', icon: 'assets/link-button-icons/github.svg', themeClass: 'mat-github'},
    cv: {label: 'CV', icon: 'assets/link-button-icons/cv.svg', themeClass: 'mat-cv'},
};
