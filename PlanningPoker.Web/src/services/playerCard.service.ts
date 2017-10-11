import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/toPromise';

import { UserStory, } from '../models/userStory.model';
import { GetPlayerCardResult, } from '../models/playerCard.model';

@Injectable()
export class PlayerCardService {

    constructor(private http: Http) { }

    private apiEndPoint = environment.apiEndPoint + 'PlayerCard';
    private headers = new Headers({'Content-Type': 'application/json'});

    getPlayerCards(userStory: UserStory): Promise<any> {
        const url = this.apiEndPoint + '/GetPlayerCards';
        return this.http
            .post(url,  userStory, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
      }
}