import Phaser from "phaser";
import logoImg from "../assets/logo.svg";
import food from '../assets/food.png';
import head from '../assets/head.png';
import body from '../assets/body.png';


/**/var snake;
var food;
var cursors;
var sprite;
var score = 0;
var life = 3;

//  Direction consts
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;


class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  preload ()
  {
      this.load.image("food", food);
      this.load.image("body", body);
      this.load.image("head", head);
  }

  create ()
  {
      var Food = new Phaser.Class({

          Extends: Phaser.GameObjects.Image,

          initialize:

          function Food (scene, x, y)
          {
              Phaser.GameObjects.Image.call(this, scene)

              this.setTexture('food');
              this.setScale(0.07, 0.07);
              this.setPosition(x * 16, y * 16);
              this.setOrigin(0);

              this.total = 0;

              scene.children.add(this);
          },

          eat: function ()
          {
              this.total++;
          }

      });

      var Snake = new Phaser.Class({

          initialize:

          function Snake (scene, x, y)
          {
              this.headPosition = new Phaser.Geom.Point(x, y);

              this.body = scene.add.group();

              //sprite = this.add.sprite(40, 100, 'head');

              this.head = this.body.create(x * 16, y * 16, 'head');
              this.head = this.head.setScale(0.25, 0.25);
              this.head.setOrigin(0);
              this.alive = true;
              this.speed = 70;
              this.moveTime = 0;
              this.tail = new Phaser.Geom.Point(x, y);
              this.heading = RIGHT;
              this.direction = RIGHT;
              sprite = this.head;
          },

          update: function (time)
          {
              if (time >= this.moveTime)
              {
                  return this.move(time);
              }
          },

          faceLeft: function ()
          {
              if (this.direction === UP || this.direction === DOWN)
              {this.heading = LEFT;}
          },
          faceRight: function ()
          {
              if (this.direction === UP || this.direction === DOWN)
              {this.heading = RIGHT;}
          },
          faceUp: function ()
          {
              if (this.direction === LEFT || this.direction === RIGHT)
              {this.heading = UP;}
          },
          faceDown: function ()
          {
              if (this.direction === LEFT || this.direction === RIGHT)
              {this.heading = DOWN;}
          },
          move: function (time)
          {
              switch (this.heading)
              {
                  case LEFT:
                      this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
                      //this.head.angle = 0;
                      break;

                  case RIGHT:
                      this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
                      //this.head.angle = 0;
                      break;

                  case UP:
                      this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
                      //this.head.angle = 270;
                      break;

                  case DOWN:
                      this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
                      //this.head.angle = 270;
                      break;
              }

              this.direction = this.heading;

              //  Update the body segments and place the last coordinate into this.tail
              Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1, this.tail);

              //  Check to see if any of the body pieces have the same x/y as the head
              //  If they do, the head ran into the body

              var hitBody = Phaser.Actions.GetFirst(this.body.getChildren(), { x: this.head.x, y: this.head.y }, 1);

              if (hitBody)
              {
                  console.log('dead');

                  this.alive = false;

                  return false;
              }
              else
              {
                  //  Update the timer ready for the next movement
                  this.moveTime = time + this.speed;

                  return true;
              }
          },

          grow: function ()
          {
              var newPart = this.body.create(this.tail.x, this.tail.y, 'body');
              newPart.setScale(0.25, 0.25);
              newPart.setOrigin(0);
              score += 5;
              document.getElementById("score").innerHTML = "Score: "+score;
          },

          collideWithFood: function (food)
          {
              if (this.head.x === food.x && this.head.y === food.y)
              {
                  this.grow();

                  food.eat();

                  //  For every 5 items of food eaten we'll increase the snake speed a little
                  if (this.speed > 20 && food.total % 5 === 0)
                  {
                      this.speed -= 5;
                  }

                  return true;
              }
              else
              {
                  return false;
              }
          },

          updateGrid: function (grid)
          {
              //  Remove all body pieces from valid positions list
              this.body.children.each(function (segment) {

                  var bx = segment.x / 16;
                  var by = segment.y / 16;

                  grid[by][bx] = false;

              });

              return grid;
          }

      });

      food = new Food(this, 3, 4);

      snake = new Snake(this, 8, 8);

      //  Create our keyboard controls
      cursors = this.input.keyboard.createCursorKeys();
  }
  update (time, delta)
{
    if (!snake.alive)
    {
        return;
    }

    /**
    * Check which key is pressed, and then change the direction the snake
    * is heading based on that. The checks ensure you don't double-back
    * on yourself, for example if you're moving to the right and you press
    * the LEFT cursor, it ignores it, because the only valid directions you
    * can move in at that time is up and down.
    */
    if (cursors.left.isDown)
    {
        snake.faceLeft();
        
    }
    else if (cursors.right.isDown)
    {
        snake.faceRight();
    }
    else if (cursors.up.isDown)
    {
        snake.faceUp();
    }
    else if (cursors.down.isDown)
    {
        snake.faceDown();
        snake.angle = 90;
    }

    if (snake.update(time))
    {
        //  If the snake updated, we need to check for collision against food

        if (snake.collideWithFood(food))
        {
            repositionFood();
        }
    }
}

}

export default playGame;