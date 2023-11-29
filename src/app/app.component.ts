import { Component, OnInit } from '@angular/core';
import {LOGIN_SCREEN_BG} from '../utils/utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular-NetflixGPT';
  loginScreenBG=LOGIN_SCREEN_BG
  constructor() {}

  ngOnInit(): void {
    
  }
}
