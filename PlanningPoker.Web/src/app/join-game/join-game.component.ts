import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
    loginForm: FormGroup;
    constructor(private router: Router) { }

    ngOnInit() {

    }

    joinGame() {
        this.router.navigate(['/game', 12]);
    }
}
