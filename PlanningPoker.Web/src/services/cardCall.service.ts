import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/toPromise';

import { UserStory, } from '../models/userStory.model';
import { Player, } from '../models/player.model';
import { SelectCardResult, } from '../models/cardCall.model';

@Injectable()
export class CardCallService {

    constructor(private http: Http) { }

    private apiEndPoint = environment.apiEndPoint + 'CardCall';
    private headers = new Headers({'Content-Type': 'application/json'});

    selectCard(userStory: UserStory, player: Player, cardValue: number): Promise<SelectCardResult> {
        const url = this.apiEndPoint + '/SelectCard';
        return this.http
            .post(url, {userStory: userStory, player: player, cardValue: cardValue}, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as SelectCardResult)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
      }
}