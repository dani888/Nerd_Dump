import React, { useEffect, useRef } from "react";
import "./Breakout.css";
import { BallMovement } from "./BallMovement";
import data from '../../../data'
import WallCollision from "./util/WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from "./util/BrickCollision";
import PaddleHit from "./util/PaddleHit";
import PlayerStats from "./PlayerStats";
import AllBroken from "./util/AllBroke";
import ResetBall from "./util/ResetBall";

let { ballObj, brickObj, paddleProps, player } = data
let bricks = [];

export default function Board(){
    const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      paddleProps.y = canvas.height - 30;

      let newBrickSet = Brick(player.level, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      PlayerStats(ctx, player, canvas);

      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      BallMovement(ctx, ballObj);

      AllBroken(bricks, player, canvas, ballObj);

      if (player.lives === 0) {
        alert("Game Over! Press ok to restart");

        player.lives = 5;
        player.level = 1;
        player.score = 0;
        ResetBall(ballObj, canvas, paddleProps);
        bricks.length = 0;
      }
     
      WallCollision(ballObj, canvas, player, paddleProps);

      
      let brickCollision;

      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i]);

        if (brickCollision.hit && !bricks[i].broke) {
          
          if (brickCollision.axis === "X") {
            ballObj.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollision.axis === "Y") {
            ballObj.dy *= -1;
            bricks[i].broke = true;
          }
          player.score += 10;
        }
      }
      Paddle(ctx, canvas, paddleProps);

     
      PaddleHit(ballObj, paddleProps);

      requestAnimationFrame(render);
    };
    render();
  }, []);

    return (
        <div class="break-back">
            <h1 class="breakout-h1">Breakout</h1>
            <canvas 
            id="canvas" 
            ref={canvasRef} 
            onMouseMove={(e) => (paddleProps.x = e.clientX - paddleProps.width / 2 - 350)}
            height="700px" 
            width="1000px"
            />
        </div>
    )
}