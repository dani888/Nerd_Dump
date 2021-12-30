const dataObjects = {
    ballObj:{
        x: 20,
        y: 200,
        dx: 5,
        dy: 5,
        rad: 15,
        speed: 10
    },
    brickObj:{
        x: 0.5,
        y: 50,
        width: 800 / 10 - 1,
        height: 20,
        density: 2,
        colors: ['#01ffc3', '#0062FF', '#ffd300', '#ce96fb', '#f21a1d', '#b8fb3c']
    },
    player:{
        name: "Ashley",
        lives: 5,
        score: 0,
        level: 1,
    },
    paddleProps:{
        height: 20,
        width: 150, 
        x: 100, 
        color: '#01ffff'
    }
}

export default dataObjects