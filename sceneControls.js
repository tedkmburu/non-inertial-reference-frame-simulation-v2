function sceneControls(canvas) 
{
    switch(currentScene)
    {
        case 0:
            let ball = leftScenes[0].images[2]
            let ball2 = rightScenes[0].images[2]

            const groundPosition = halfCanvas.copy().y + 170 - ((leftScenes[0].images[2].mass * leftScenes[0].images[2].size.y) / 2)
            const truckLength = leftScenes[0].images[1].size.x

            if (ball2.pos.x < (ball2.startingPos.copy().x - (truckLength / 2))) 
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

            if (ball2.bounces > 5) playState = false;
            if (ball2.pos.copy().x > ball2.startingPos.x) playState = false;

            if (ball.pos.copy().y > groundPosition) ball.pos.y = groundPosition;
            if (ball2.pos.copy().y > groundPosition) ball2.pos.y = groundPosition;

            
        break;
        case 1:
            let cannonBall = leftScenes[1].shapes[0]
            let cannonBall2 = rightScenes[1].shapes[0]
            const groundPosition2 = halfCanvas.copy().y + 170 - ((leftScenes[1].images[2].mass * leftScenes[0].images[2].size.y) / 2)
            let newYVel = -10

            rightScenes[1].shapes[0].vel = rightScenes[1].shapes[0].vel.copy()

            // rightScenes[1].referenceFrame.vel = cannonBall.vel.copy()
            // rightScenes[1].referenceFrame.vel.x *= (-1)
            
            if (cannonBall.pos.y > groundPosition2) 
            {
                cannonBall.bounces++;
                cannonBall.vel.y = newYVel
                

                cannonBall2.bounces++;
                cannonBall2.vel.y = cannonBall.vel.copy().y * 2.88

                rightScenes[1].referenceFrame.vel = cannonBall.vel.copy()
            }
            
            if (cannonBall.pos.y > groundPosition2) 
            {
                cannonBall.pos.y = groundPosition2; 
            }
           
            if (cannonBall.bounces > 1 || cannonBall.pos.x < cannonBall.startingPos.x - 100)
            { 
                playState = false;
            }

            // pos: new p5.Vector(240, halfCanvas.y - 20)
            let slider1Value = slider1.value();
            let angle = (slider1Value + 1) * 1;
            let newX = (Math.cos(angle) * 80) - 50
            let newY = (Math.sin(angle + 2.5) * 80) + 20

            // console.log(leftScenes[1].shapes[0].startingVel);
            leftScenes[1].shapes[0].startingVel = new p5.Vector.fromAngle(-angle * 0.75, 10);
            rightScenes[1].referenceFrame.startingVel = new p5.Vector.fromAngle(-angle * 0.75, 10).mult(-1);
                // this.canvas.image(this.image, , , this.size.x * (this.mass), this.size.y * (this.mass));
                
            leftScenes[1].shapes[0].startingPos = new p5.Vector(240 + newX, halfCanvas.y - 20 + newY)
            rightScenes[1].shapes[0].startingPos = new p5.Vector(halfCanvas.x + 220 + newX,  halfCanvas.y - 20  + newY)

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