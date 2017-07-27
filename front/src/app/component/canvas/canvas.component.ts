import {Component, Input, OnInit} from '@angular/core';
import {Snake} from './p5classes/snake';
import {SnakeScoreService} from "../../service/snake-score.service";

declare var p5: any;2

@Component({
  selector: 'app-canvas',
  inputs: ['cHeight', 'cWidth'],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  public cHeight: number;
  public cWidth: number;

  constructor(private storingScore: SnakeScoreService) {
  }

  ngOnInit() {
    new p5((sketch) => {
      // as usual,sketch-programming↓

      let blockSize = 20;
      let snake: Snake;
      let byte_sound;
      let potate_image;
      let food;
      let isPotech: boolean = false;
      let storingScore : SnakeScoreService = this.storingScore;


      sketch.preload = function () {
        byte_sound = sketch.loadSound('../../../assets/music/byting.mp3');
        potate_image = sketch.loadImage('../../../assets/img/potate.png');
      }

      sketch.setup = function () {
        sketch.createCanvas(document.getElementById("myCanvas").clientWidth,
          document.getElementById("myCanvas").clientHeight).parent("myCanvas");
        snake = new Snake(sketch, blockSize);
        sketch.frameRate(10);
        pickLocation();
      };

      sketch.draw = function () {
        sketch.background(51);
        if (snake.eat(food)) {
          storingScore.setScores(isPotech);
          pickLocation();
          if (isPotech) {
            byte_sound.play();
          }
          isPotech = false;
          if (sketch.random(1) < 0.2) {
            isPotech = true;
          }
        }

         if(snake.death()){
          storingScore.reset();
         }
        snake.update();
        snake.show();

        switch (isPotech) {
          case true :
            sketch.image(potate_image, food.x, food.y);
            break;
          case false:
            sketch.fill(255);
            sketch.rect(food.x, food.y, blockSize, blockSize);
            break;
        }
      }

      let pickLocation = function () {
        let cols = sketch.floor(sketch.width / blockSize);
        let rows = sketch.floor(sketch.height / blockSize);
        food = sketch.createVector(sketch.floor(sketch.random(cols)), sketch.floor(sketch.random(rows)));
        food.mult(blockSize);
      }

      sketch.keyPressed = function () {
        if (sketch.keyCode === 104) {//up
          snake.dir(0, -1);
        } else if (sketch.keyCode === 98) {//down
          snake.dir(0, 1);
        } else if (sketch.keyCode === 102) {//right
          snake.dir(1, 0);
        } else if (sketch.keyCode === 100) {//left
          snake.dir(-1, 0);
        }
      }
      //as usual,sketch-progrramming↑
    });
  }


}
