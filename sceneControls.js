function sceneControls() 
{
    switch(currentScene)
    {
        case 0:
            let ball = leftScenes[0].images[2]
            let ball2 = rightScenes[0].images[2]

            if (ball2.pos.x < -50) 
            {
                ball.acc.y = 0.5
                ball2.acc.y = 0.5
            }

            if (ball2.pos.y > halfCanvas.y / 2.75) 
            {
                ball2.bounces++;
                ball2.vel.y = (-4 / (ball2.bounces / 2))  
                ball2.omega.mult(0.25)

                ball.bounces++;
                ball.vel.y = (-4 / (ball.bounces / 2))  
                ball.omega.mult(0.25)
            }

            if (ball.pos.y > halfCanvas.y / 2.75) ball.pos.y = halfCanvas.y / 2.75;
            if (ball2.pos.y > halfCanvas.y / 2.75) ball2.pos.y = halfCanvas.y / 2.75;
        break;
        case 1:
            let cannonBall = leftScenes[1].shapes[0]
            let cannonBall2 = rightScenes[1].shapes[0]

            let newYVel = (-5 / (cannonBall.bounces + 0.99) * 2)  

            if (cannonBall.pos.y > halfCanvas.y / 2.75) 
            {
                cannonBall.bounces++;
                cannonBall.vel.y = newYVel

                cannonBall2.bounces++;
                cannonBall2.vel.y = newYVel  
            }

            if (cannonBall.pos.y > halfCanvas.y / 2.75) cannonBall.pos.y = halfCanvas.y / 2.75;
            if (cannonBall2.pos.y > halfCanvas.y / 2.75) cannonBall2.pos.y = halfCanvas.y / 2.75;
            
            if (rightScenes[1].images[0].displacement > canvasSize[0].x)
            { 
                playState = false;
            }
            // console.log(rightScenes[1].images[0].pos );

        break;
        case 2:
            
        break;
        case 3:
            
        break;
        default:
            console.log("Create Scene Controls");
    }    
}