function sceneControls() 
{
    switch(currentScene)
    {
        case 0:
            ball = leftScenes[0].shapes[0]
            ball2 = rightScenes[0].shapes[0]
            if (ball2.pos.x < 700) 
            {
                ball.acc.y = 0.5
                ball2.acc.y = 0.5
            }

            if (ball2.pos.y > 630) 
            {
                ball2.bounces++;
                ball2.vel.y = (-4 / (ball2.bounces / 2))  

                ball.bounces++;
                ball.vel.y = (-4 / (ball.bounces / 2))  
            }

            if (ball.pos.y > 630) ball.pos.y = 630;
            if (ball2.pos.y > 630) ball2.pos.y = 630;
        break;
        case 1:
            cannonBall = leftScenes[1].shapes[0]

            if (cannonBall.pos.y > 630) 
            {
                cannonBall.bounces++;
                cannonBall.vel.y = (-5 / (cannonBall.bounces / 2))  
            }

            // console.log(rightScenes[1].shapes);
            cannonBall2 = rightScenes[1].shapes[0]

            if (cannonBall2.pos.y > 630) 
            {
                cannonBall2.bounces++;
                cannonBall2.vel.y = (-5 / (cannonBall2.bounces / 2))  
            }
        break;
        case 2:
            
        break;
        default:
            console.log("Create Scene Controls");
    }    
}