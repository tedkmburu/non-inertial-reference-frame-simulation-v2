function sceneControls() 
{
    switch(currentScene)
    {
        case 0:
            let ball = leftScenes[0].images[2]
            let ball2 = rightScenes[0].images[2]

            const groundPosition = 510

            if (ball2.pos.x < 500) 
            {
                ball.acc.y = 0.5
                ball2.acc.y = 0.5
            }

            if (ball2.pos.y > groundPosition) 
            {
                ball2.bounces++;
                ball2.vel.y = (-4 / (ball2.bounces / 2))  
                ball2.omega *= (0.6)

                ball.bounces++;
                ball.vel.y = (-4 / (ball.bounces / 2))  
                ball.omega *= (0.6)
            }

            if (ball2.bounces > 3) playState = false;
            if (ball2.pos.x > 920) playState = false;

            if (ball.pos.y > groundPosition) ball.pos.y = groundPosition;
            if (ball2.pos.y > groundPosition) ball2.pos.y = groundPosition;

            
        break;
        case 1:
            let cannonBall = leftScenes[1].shapes[0]
            let cannonBall2 = rightScenes[1].shapes[0]
            const groundPosition2 = 510;
            let newYVel = -10


            rightScenes[1].shapes[0].referenceFrame.acc = cannonBall2.acc.copy().mult(-1)
            if (cannonBall.pos.y > groundPosition2) 
            {
                cannonBall.bounces++;
                cannonBall.vel.y = newYVel
                

                cannonBall2.bounces++;
                cannonBall2.vel.y = cannonBall.vel.copy().y * 2.88

                rightScenes[1].shapes[0].referenceFrame.vel = cannonBall2.vel.copy().mult(-1)
            }
            
            if (cannonBall.pos.y > groundPosition2) 
            {
                cannonBall.pos.y = groundPosition2; 
            }
           
            if (cannonBall.bounces > 1 || cannonBall.pos.x < cannonBall.startingPos.x)
            { 
                playState = false;
            }

        break;
        case 2:
            let newPosition = leftScenes[2].shapes[2].pos.copy()
            let angleInRadians = (leftScenes[2].shapes[0].angle * -1) / (180 / Math.PI)
            // console.log(angleInRadians);
            
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