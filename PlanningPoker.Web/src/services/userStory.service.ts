import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/toPromise';

import { UserStoryApiResult, UserStory } from '../models/userStory.model';
import { Game } from '../models/game.model'

@Injectable()
export class UserStoryService {

    constructor(private http: Http) { }

    private apiEndPoint = environment.apiEndPoint + 'UserStory';
    private headers = new Headers({'Content-Type': 'application/json'});

    createUserStory(shortOverView: string, title: string, game: Game): Promise<UserStoryApiResult> {
        const url = this.apiEndPoint + '/CreateUserStory';
        
        var newUserStory = new UserStory();
        newUserStory.shortOverview = shortOverView;
        newUserStory.title = title;

        return this.http
            .post(url, {userStory: newUserStory, game: game}, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as UserStoryApiResult)
            .catch(this.handleError);
    }

    setPlanningComplete(userStory: UserStory): Promise<UserStoryApiResult> {
        const url = this.apiEndPoint + '/SetPlanningComplete';
        
        return this.http
            .post(url, userStory, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as UserStoryApiResult)
            .catch(this.handleError);
    }

    setPlanningCancelled(userStory: UserStory): Promise<UserStoryApiResult> {
        const url = this.apiEndPoint + '/SetPlanningCancelled';
        
        return this.http
            .post(url, userStory, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as UserStoryApiResult)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}