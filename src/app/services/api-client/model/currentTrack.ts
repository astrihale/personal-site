/**
 * Astrihale.me Spotify Microservice
 * This is a small api that is supposed to serve Spotify data to my personal site found at https://astrihale.me
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface CurrentTrack { 
    playing?: boolean;
    progress?: number;
    songName?: string;
    artists?: Array<any>;
    albumName?: string;
    songLink?: string;
    songPicture?: string;
    albumLink?: string;
}