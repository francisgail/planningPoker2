import { Component, OnInit } from '@angular/core';
import dataset from '../data';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
    games = dataset.data;
    constructor() { }

    ngOnInit() {
        console.log(this.games);
    }

}
