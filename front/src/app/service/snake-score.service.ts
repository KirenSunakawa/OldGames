import { Injectable } from '@angular/core';

@Injectable()
export class SnakeScoreService {

  private _usualScore : number = 0;
  private _todayBestScore : number = 0;
  private _everBestScore : number = 0;
  private _potateScore : number = 0;

  constructor() { }

  public reset(){
    this._usualScore = 0;
  }

  public setScores(isPotech: boolean){
    if(isPotech){
      this.potateScore ++;
    }
    this.usualScore ++;
    if(this.usualScore > this.todayBestScore){
      this.todayBestScore ++;
    }
    if(this.usualScore > this.everBestScore){
      this.everBestScore ++;
    }
  }

  get usualScore(): number {
    return this._usualScore;
  }

  set usualScore(value: number) {
    this._usualScore =  value;
  }

  get todayBestScore(): number {
    return this._todayBestScore;
  }

  set todayBestScore(value: number) {
    this._todayBestScore = value;
  }

  get everBestScore(): number {
    return this._everBestScore;
  }

  set everBestScore(value: number) {
    this._everBestScore = value;
  }

  get potateScore(): number {
    return this._potateScore;
  }

  set potateScore(value: number) {
    this._potateScore = value;
  }

}
