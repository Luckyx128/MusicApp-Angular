import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-player',
  imports: [],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() title: string | undefined;
  @Input() quantidade: number | undefined;
}
