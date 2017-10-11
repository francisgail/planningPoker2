import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/toPromise';

import { Game, GameApiResult } from '../models/game.model'

@Injectable()
export class GameService {

    constructor(private http: Http) { }

    private apiEndPoint = environment.apiEndPoint + 'Game';
    private headers = new Headers({'Content-Type': 'application/json'});

    createGame(tag: string, moderator: string): Promise<GameApiResult> {
        const url = this.apiEndPoint + '/CreateGame';
        return this.http
            .post(url, JSON.stringify({tag: tag, moderator: moderator}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as GameApiResult)
            .catch(this.handleError);
    }

    startGame(game: Game): Promise<GameApiResult> {
        const url = this.apiEndPoint + '/StartGame';
        return this.http
            .post(url, game, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as GameApiResult)
            .catch(this.handleError);
    }

    getGames(): Promise<GameApiResult> {
        const url = this.apiEndPoint;
        return this.http
            .get(url)
            .toPromise()
            .then(res => res.json() as GameApiResult)
            .catch(this.handleError);
    }

    endGame(game: Game): Promise<GameApiResult> {
        const url = this.apiEndPoint + '/EndGame';
        return this.http
            .post(url, game, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as GameApiResult)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
      }
}