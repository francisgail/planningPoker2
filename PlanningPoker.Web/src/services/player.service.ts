import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/toPromise';

import { PlayerApiResult, GetPlayerApiResult, Player } from '../models/player.model';
import { Game } from '../models/game.model'

@Injectable()
export class PlayerService {

    constructor(private http: Http) { }

    private apiEndPoint = environment.apiEndPoint + 'Player';
    private headers = new Headers({'Content-Type': 'application/json'});

    joinGame(playerName: string, game: Game): Promise<PlayerApiResult> {
        const url = this.apiEndPoint + '/JoinGame';
        
        var newPlayer = new Player();
        newPlayer.name = playerName;

        return this.http
            .post(url, {player: newPlayer, game: game, isModerator: false}, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as PlayerApiResult)
            .catch(this.handleError);
    }

    getPlayers(game: Game): Promise<GetPlayerApiResult> {
        const url = this.apiEndPoint + '/GetPlayers';
        
        return this.http
            .post(url, game, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as GetPlayerApiResult)
            .catch(this.handleError);
    }

    leaveGame(player: Player): Promise<PlayerApiResult> {
        const url = this.apiEndPoint + '/LeaveGame';
        
        return this.http
            .post(url, player, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as PlayerApiResult)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}