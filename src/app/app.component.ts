import { Component } from '@angular/core';
import {FooterNavComponent} from './footer-nav/footer-nav.component';
import {HeaderComponent} from './header/header.component';
import {CardAreaComponent} from './card-area/card-area.component';

@Component({
  selector: 'app-root',
  imports: [FooterNavComponent,HeaderComponent,CardAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MusicPlayer';
}
