import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';

import { PlayerService } from '../services/player.service';
import { Player } from '../models/player.model';

import { UserStoryService } from '../services/userStory.service';
import { UserStory } from '../models/userStory.model';

import { CardCallService } from '../services/cardCall.service';
import { SelectCardResult } from '../models/cardCall.model';

import { PlayerCardService } from '../services/playerCard.service';
import { environment } from '../environments/environment';
declare var signalR: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Online Planning Poker';

  constructor(private gameService: GameService, private playerService: PlayerService, 
    private userStoryService: UserStoryService, private cardCallService: CardCallService,
    private playerCardService: PlayerCardService ) { }

  createGame(tag: string, moderator: string): void {
    this.gameService.createGame(tag, moderator)
      .then(createGameResult => {
         console.log(createGameResult.data);
         
         let connection = new signalR.HubConnection(environment.signalrEndPoint + "planning");

         connection.on("GameCreated", data => {
          console.log("GameCreated: ", data);
         });

         //console.log(JSON.stringify(createGameResult.data));
          
         connection.start().then(
           ()=> connection.invoke('CreateGroup', JSON.stringify(createGameResult.data))
         );

      });
    }

  startGame(game: Game): void {
    this.gameService.startGame(game)
      .then(startGameResult => {
          console.log(startGameResult);
      });
    }

  getGames(): void {
    this.gameService.getGames()
      .then(startGameResult => {
          console.log(startGameResult);
      });
    }

  endGame(game: Game): void {
    this.gameService.endGame(game)
      .then(endGameResult => {
          console.log(endGameResult);
      });
    }

    joinGame(name: string, game: Game): void{
      this.playerService.joinGame(name, game)
      .then(joinGameResult => {
        console.log(joinGameResult);
      });
    }

    getPlayers(game: Game): void{
      this.playerService.getPlayers(game)
      .then(getPlayersResult => {
        console.log(getPlayersResult);
      });
    }

    leaveGame(player: Player): void{
      this.playerService.leaveGame(player)
      .then(leaveGameResult => {
        console.log(leaveGameResult);
      });
    }

    createUserStory(shortOverView: string, title: string, game: Game) : void{
      this.userStoryService.createUserStory(shortOverView, title, game)
      .then(createUserStoryResult => {
        console.log(createUserStoryResult);
      });
    }

    setPlanningComplete(userStory: UserStory) : void{
      this.userStoryService.setPlanningComplete(userStory)
      .then(setPlanningCompleteResult => {
        console.log(setPlanningCompleteResult);
      });
    }

    setPlanningCancelled(userStory: UserStory) : void{
      this.userStoryService.setPlanningCancelled(userStory)
      .then(setPlanningCancelledResult => {
        console.log(setPlanningCancelledResult);
      });
    }

    selectCard(userStory: UserStory, player: Player, cardValue: number) : void{
      this.cardCallService.selectCard(userStory, player, cardValue)
       .then(selectCardResult => {
        console.log(selectCardResult);
      });
    }

    getPlayerCards(userStory: UserStory) : void{
      this.playerCardService.getPlayerCards(userStory)
       .then(getPlayerCardResult => {
        console.log(getPlayerCardResult);
      });
    }
}
