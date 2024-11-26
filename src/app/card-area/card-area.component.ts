import { Component } from '@angular/core';
import {CardPlayerComponent} from '../card-player/card-player.component';

@Component({
  selector: 'app-card-area',
  imports: [
    CardPlayerComponent
  ],
  templateUrl: './card-area.component.html',
  styleUrl: './card-area.component.css'
})
export class CardAreaComponent {
  musicas = [{'nome':'AC/DC','quantidade':25},
    {nome:'ARTIC MONKEY','quantidade':5},
    {nome:'ARTIC MONKEY','quantidade':8},
    {nome:'Bruno Mars','quantidade':10},
    {nome:'Eddie Sheeran','quantidade':12},
    {nome:'Shank','quantidade':13},
    {nome:'Favoritos','quantidade':101}];
}
