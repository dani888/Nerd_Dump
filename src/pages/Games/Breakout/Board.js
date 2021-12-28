import React, { useEffect, useRef } from "react";
import "./Breakout.css";
import { BallMovement } from "./BallMovement";
import data from '../../../data'
import WallCollision from "./util/WallCollision";
import Paddle from "./Paddle";



export default function Board(){
    const canvasRef = useRef(null);
    
    let { ballObj, paddleProps } = data
    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d')

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            BallMovement(ctx, ballObj)

            WallCollision(ballObj, canvas)

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
            onMouseMove={(e) => (paddleProps.x = e.clientX - paddleProps.width / 2 - 230)}
            height="700px" 
            width="1200px"
            />
        </div>
    )
}