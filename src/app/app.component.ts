import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FooterNavComponent} from './footer-nav/footer-nav.component';
import {HeaderComponent} from './header/header.component';
import {CardPlayerComponent} from './card-player/card-player.component';

@Component({
  selector: 'app-root',
  imports: [FooterNavComponent,HeaderComponent,CardPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MusicPlayer';
}
