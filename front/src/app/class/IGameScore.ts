export interface IGameScore{
  realTimeScore : number;
  todayBestScore : number;
  everBestScore : number;
  todayFunnyScore : number;
  playDate : Date;

  setScore(isFunny : boolean):void;

  getRealTimeScore():number;

  getTodayBestScore():number;

  getEverBestScore():number;

  getTodayFunnyScore():number;

  resetRealTimeScore():void;

  resetTodayBestScore(date : Date):void;

  resetTodayFunnyScore(date : Date):void;
}
