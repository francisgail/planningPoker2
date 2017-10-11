import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateGame } from './createGame.component';

import { GameService } from '../services/game.service';
import { PlayerService } from '../services/player.service';
import { UserStoryService } from '../services/userStory.service';
import { CardCallService } from '../services/cardCall.service';
import { PlayerCardService } from '../services/playerCard.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateGame
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'createGame',
      component: CreateGame
    }])
  ],
  providers: [ GameService, PlayerService, UserStoryService, CardCallService, PlayerCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
