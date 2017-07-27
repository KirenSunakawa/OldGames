import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './page/home-page/home-page.component';

import { AppComponent } from './component/app/app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InfopanelComponent } from './component/infopanel/infopanel.component';
import { CanvasComponent } from './component/canvas/canvas.component';
import { ScoreBlockComponent } from './component/score-block/score-block.component';

import {SnakeScoreService} from './service/snake-score.service';
import { LoginPanelComponent } from './component/login-panel/login-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    InfopanelComponent,
    CanvasComponent,
    ScoreBlockComponent,
    LoginPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SnakeScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
