export * from './echo.service';
import { EchoService } from './echo.service';
export * from './music.service';
import { MusicService } from './music.service';
export const APIS = [EchoService, MusicService];
