import React, { useEffect, useRef } from "react";
import "./Breakout.css";
import { BallMovement } from "./BallMovement";
import data from '../../../data'
import WallCollision from "./util/WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from "./util/BrickCollision";


export default function Board(){
    const canvasRef = useRef(null);
    
    let { ballObj, brickObj, paddleProps } = data
    let bricks = [];

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d')

            let newBrickSet = Brick(1, bricks, canvas, brickObj)
            if(newBrickSet && newBrickSet.length > 0){
                bricks = newBrickSet 
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bricks.map((brick) => {
                return brick.draw(ctx);
            });

            BallMovement(ctx, ballObj)

            WallCollision(ballObj, canvas)

            let brickCollision;

            for(let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i]);
                if ( brickCollision.hit && !bricks[i].broke){
                    if (brickCollision.axis === 'X'){
                        ballObj.dx *= -1;
                        bricks[i].broke = true;
                    } else if ( brickCollision.axis === 'Y'){
                        ballObj.dy *= -1;
                        bricks[i].broke = true;
                    }
                }
            }
        

            Paddle(ctx, canvas, paddleProps)

            requestAnimationFrame(render)
        };
        render();
    },[])

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