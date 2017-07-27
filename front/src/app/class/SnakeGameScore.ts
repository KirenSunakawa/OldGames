import {IGameScore} from './IGameScore';

export class SnakeGameScore implements IGameScore{
  realTimeScore : number;
  todayBestScore : number;
  everBestScore : number;
  todayFunnyScore : number;

  setScore(isFunny : boolean):void{
    if(isFunny){
      this.todayFunnyScore ++;
    }
    this.realTimeScore ++;
    if(this.realTimeScore > this.todayBestScore){
      this.todayBestScore ++;
    }
    if(this.realTimeScore > this.everBestScore){
      this.everBestScore ++;
    }
  };

  getRealTimeScore():number{
    return this.realTimeScore;
  };

  getTodayBestScore():number{
    return this.todayBestScore
  };

  getEverBestScore():number{
    return this.everBestScore;
  };

  getTodayFunnyScore():number{
    return this.todayFunnyScore;
  };

  resetRealTimeScore():void{
    this.realTimeScore = 0;
  }

  resetTodayBestScore(date : Date):void{
    if () {
      this.todayBestScore = 0;
    }
  }

  resetTodayFunnyScore(date : Date):void{
     this.todayFunnyScore = 0;
  }


}
