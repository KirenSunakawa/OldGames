import {Component, OnInit, ViewChild,TemplateRef} from '@angular/core';
import {SnakeScoreService} from "../../service/snake-score.service";

const enum Ratio {
  WIDTH = 0.82,
  HEIGHT = 0.62,
  FONT_HEIGHT = 0.9,
  REAL_FONTSIZE = 0.82
}

@Component({
  selector: 'app-score-block',
  templateUrl: './score-block.component.html',
  inputs: ['myPHeight', 'myPWidth','templateName'],
  styleUrls: ['./score-block.component.css']
})
export class ScoreBlockComponent implements OnInit {
  public myPHeight: number;
  public myPWidth: number;
  public myCalcWidth: number;
  public myCalHeight: number;
  public myCalcTop:number;
  public myCalcFontS:number;
  public myCalcTenTop:number;
  public templateName : string = 'usualScore';
  public selectBox : TemplateRef<any> ;
  @ViewChild('usualScore')
  public usualScore :TemplateRef<any> ;
  @ViewChild('everBestScore')
  public everBestScore :TemplateRef<any> ;
  @ViewChild('todayBestScore')
  public todayBestScore :TemplateRef<any> ;
  @ViewChild('potateScore')
  public potateScore :TemplateRef<any> ;

  constructor(private storingScore :SnakeScoreService){
  }


  ngOnInit() {
    this.calcWidth();
    this.calcHeight();
    this.calcTop();
    this.calcFontS();
    this.calcTenTop();
    this.scoreViewSelect(this.templateName);
  }

  private calcWidth() {
    this.myCalcWidth = this.myPWidth * Ratio.WIDTH;
  }

  private calcHeight() {
    this.myCalHeight = this.myPHeight * Ratio.HEIGHT;
  }

  private calcTop() {
    this.myCalcTop = (this.myPHeight - this.myPHeight * Ratio.HEIGHT) / 2;
  }

  private calcFontS() {
    this.myCalcFontS = this.myPHeight * Ratio.HEIGHT * Ratio.FONT_HEIGHT;
  }

  private calcTenTop() {
    this.myCalcTenTop = (this.myPHeight * Ratio.HEIGHT - this.myPHeight * Ratio.HEIGHT * Ratio.FONT_HEIGHT) / 2
    + this.myPHeight * Ratio.HEIGHT * Ratio.FONT_HEIGHT * Ratio.REAL_FONTSIZE - 14;
  }

  public getUsualScore(){
    return this.storingScore.usualScore;
  }

  public getEverBestScore(){
    return this.storingScore.everBestScore;
  }

  public getTodayBestScore(){
    return this.storingScore.todayBestScore;
  }

  public getPotateScore(){
    return this.storingScore.potateScore;
  }

  private scoreViewSelect(templateName : string) {
    switch (templateName){
      case 'usualScore':
        this.selectBox = this.usualScore;
        break;
      case 'everBestScore':
        this.selectBox = this.everBestScore;
        break;
      case 'todayBestScore':
        this.selectBox = this.todayBestScore;
        break;
      case 'potateScore':
        this.selectBox = this.potateScore;
    }
  }
}


