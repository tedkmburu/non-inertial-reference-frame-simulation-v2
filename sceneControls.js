function sceneControls() 
{
    switch(currentScene)
    {
        case 0:
            let ball = leftScenes[0].images[2]
            let ball2 = rightScenes[0].images[2]

            let groundPosition = halfCanvas.y / 2.75

            if (ball2.pos.x < -50) 
            {
                ball.acc.y = 0.5
                ball2.acc.y = 0.5
            }

            if (ball2.pos.y > groundPosition) 
            {
                ball2.bounces++;
                ball2.vel.y = (-4 / (ball2.bounces / 2))  
                ball2.omega.mult(0.6)

                ball.bounces++;
                ball.vel.y = (-4 / (ball.bounces / 2))  
                ball.omega.mult(0.6)
            }

            if (ball2.bounces > 3) playState = false;

            if (ball.pos.y > groundPosition) ball.pos.y = groundPosition;
            if (ball2.pos.y > groundPosition) ball2.pos.y = groundPosition;

            
        break;
        case 1:
            let cannonBall = leftScenes[1].shapes[0]
            let cannonBall2 = rightScenes[1].shapes[0]

            let groundPosition2 = halfCanvas.y;

            // console.log(groundPosition2, (leftScenes[1].images[1].pos.y / 2) + (leftScenes[1].images[1].size.y / 2));

            let newYVel = (-10 / (cannonBall.bounces / 2))  
            // console.log(cannonBall.bounces);
            console.log(cannonBall.pos.y, groundPosition2);
            if (cannonBall.pos.y > groundPosition2 && cannonBall.bounces > 3) 
            {
                cannonBall.bounces++;
                cannonBall.vel.y = newYVel
                

                cannonBall2.bounces++;
                cannonBall2.vel.y = newYVel  
            }

            if (cannonBall.pos.y > groundPosition2) cannonBall.pos.y = groundPosition2;
            if (cannonBall2.pos.y > groundPosition2) cannonBall2.pos.y = groundPosition2;
            
            // if (rightScenes[1].images[0].displacement > canvasSize[0].x)
            // { 
            //     playState = false;
            // }
            // console.log(rightScenes[1].images[0].pos );

        break;
        case 2:
            let newPosition = leftScenes[2].shapes[2].pos.copy()
            let angleInRadians = (leftScenes[2].shapes[0].angle.copy().mult(-1).z) / (180 / Math.PI)
            let rectPosition = newPosition.rotate(angleInRadians)

            let rightBall = rightScenes[2].shapes[2]

            rightScenes[2].shapes[2].pos = rectPosition
            rightScenes[2].shapes[2].vel = rightBall.pos.copy().sub(rightBall.previousPosition)

            
            // if (rightBall)
            // console.log(rightBall.pos.x < );

            let rightTableSize = initialContitions[2].tableSize.copy()
            let ballInOnTable = false
            if (rightBall.pos.x > -(rightTableSize.x / 2) &&
            rightBall.pos.x < (rightTableSize.x / 2) &&
            rightBall.pos.y > - (rightTableSize.y / 2) &&
            rightBall.pos.y < (rightTableSize.y / 2))
            {
                ballInOnTable = true
            }

            if (!ballInOnTable) playState = false;
        break;
        case 3:
            
        break;
        default:
            console.log("Create Scene Controls");
    }    
}