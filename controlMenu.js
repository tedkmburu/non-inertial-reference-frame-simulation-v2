function createMenu(canvas) 
{
    new p5(leftCanvasObject);
    new p5(rightCanvasObject); 
    new p5(popUpWindow); 

    createMenuButtons(canvas)

    sliderDefaults[0] = [1, 0]
    sliderDefaults[1] = [-0.25, 0]
    sliderDefaults[2] = [0.5, 0]
    sliderDefaults[3] = [0, 0]

    slider1.value(sliderDefaults[currentScene][0])
    slider2.value(sliderDefaults[currentScene][1])

    // sliderInput()
}

function createMenuButtons(canvas)
{
    buttonPositions = getControlButtonPositions()

    let menuButtonSize =  new p5.Vector(200, 60)
    let menuBigButtonSize = new p5.Vector(200, 100)

    let baseButtons = []

    baseButtons.push(new Button({
        text: "Rewind", 
        image: rewindImage,
        pos: new p5.Vector(buttonPositions[0].x, buttonPositions[0].y),
        size: menuButtonSize,
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            playBackwards = !playBackwards;
            leftScenes.forEach(scene => {
                scene.shapes.forEach(shape => {
                    shape.trail = []
                    shape.trail2 = []
                })

                scene.images.forEach(myImage => {
                    myImage.trail = []
                    myImage.trail2 = []
                })
            })

            rightScenes.forEach(scene => {
                scene.shapes.forEach(shape => {
                    shape.trail = []
                    shape.trail2 = []
                })

                scene.images.forEach(myImage => {
                    myImage.trail = []
                    myImage.trail2 = []
                })
            })
        }
    }))

    baseButtons.push(new Button({
        text: "Pause", 
        image: pauseImage,
        pos: new p5.Vector(buttonPositions[1].x, buttonPositions[1].y),
        size: menuButtonSize,
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            playState = !playState;
        }
    }))

    baseButtons.push(new Button({
        text: "Restart", 
        image: restartImage,
        pos: new p5.Vector(buttonPositions[2].x, buttonPositions[2].y),
        size: menuButtonSize,
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            resetAllScenes();
        }
    }))

    baseButtons.push(new Button({
        text: "Omega", 
        image: omegaImage,
        pos: new p5.Vector(buttonPositions[3].x, buttonPositions[3].y + 20),
        size: menuBigButtonSize,
        fill: lightBlueColor,
        showBorder: true,
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "Mass", 
        image: massImage,
        pos: new p5.Vector(buttonPositions[4].x, buttonPositions[4].y + 60),
        size: menuBigButtonSize,
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
    }))

    baseButtons.push(new Button({
        text: "Help", 
        image: helpImage,
        pos: new p5.Vector(buttonPositions[5].x, buttonPositions[5].y + 80),
        size: menuButtonSize,
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            popUpVisible = !popUpVisible;
        }
    }))

    baseButtons.push(new Button({
        text: "Back", 
        image: backImage,
        pos: new p5.Vector(buttonPositions[6].x, buttonPositions[6].y + 80),
        size: menuButtonSize,
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            if (currentScene > 0) currentScene--;
            else currentScene = 2;

            theFrameRate = 60;
            slider1.value(sliderDefaults[currentScene][0])
            slider2.value(sliderDefaults[currentScene][1])
            resetAllScenes()
        }
    }))

    baseButtons.push(new Button({
        text: "Next", 
        image: nextImage,
        pos: new p5.Vector(buttonPositions[7].x, buttonPositions[7].y + 80),
        size: menuButtonSize,
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            if (currentScene < 2) currentScene++;
            else currentScene = 0;

            theFrameRate = 60;
            slider1.value(sliderDefaults[currentScene][0])
            slider2.value(sliderDefaults[currentScene][1])
            resetAllScenes()
        }
    }))

    baseButtons.push(new Button({
        showText: false, 
        image: closeImageMenu,
        pos: new p5.Vector(buttonPositions[0].x + 65, buttonPositions[0].y - 90),
        size: new p5.Vector(70, 50),
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
           showMenu = !showMenu;
        }
    }))

    if (landscape)
    {
        baseButtons.forEach(button => {
            button.size.mult(0.9)
        })

        baseButtons[3].size.y *= 1.35
        baseButtons[4].size.y *= 1.35
    }


    baseButtons[3].text = "Frame Rate"
    baseButtons[3].image = speedImage
    controlMenuButtons.push(baseButtons)
    baseButtons[3].text = "Velocity"
    baseButtons[3].image = velImage
    controlMenuButtons.push(baseButtons)
    baseButtons[3].text = "Omega"
    baseButtons[3].image = omegaImage
    controlMenuButtons.push(baseButtons)
    
    
}

function displayMenu(canvas)
{
    controlMenuButtons[currentScene][8].visible = (!showMenu || !landscape) 

    if (currentScene == 0)
    {
        controlMenuButtons[currentScene][3].text = "FPS"
        controlMenuButtons[currentScene][3].image = frameRateImage
    }
    else if (currentScene == 1)
    {
        controlMenuButtons[currentScene][3].text = "Angle"
        controlMenuButtons[currentScene][3].image = angleImage
    }
    else if (currentScene == 2)
    {
        controlMenuButtons[currentScene][3].text = "Omega"
        controlMenuButtons[currentScene][3].image = omegaImage
    }

    controlMenuButtons[currentScene][6].visible = (currentScene != 0)
    controlMenuButtons[currentScene][7].visible = (currentScene != 2)

    


    controlMenuButtons[currentScene].forEach(button => {
        if (button.visible) button.display()
        if (playState && !popUpVisible) button.move()
    })

    if (playState) 
    {
        controlMenuButtons[currentScene][1].image = pauseImage
        controlMenuButtons[currentScene][1].text = "Pause"
    }
    else
    {
        controlMenuButtons[currentScene][1].image = playImage
        controlMenuButtons[currentScene][1].text = "Play"
    }

    if (playBackwards) controlMenuButtons[currentScene][0].image = forwindImage
    else controlMenuButtons[currentScene][0].image = rewindImage

    if (showMenu) controlMenuButtons[currentScene][8].image = closeImageMenu;
    else controlMenuButtons[currentScene][8].image = burgerImage;

    if (everyCanvasLoaded) checkMenuButtonHover(canvas)
}

function checkButtonClick(canvas)
{
    let mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY);

    // console.log("pos", mousePosition);
    // console.log(controlMenuButtons[currentScene][0].pos);

    controlMenuButtons[currentScene].forEach(button => {
        // console.log(mousePosition, button.pos);
        if (mousePosition.copy().x - 30 > button.pos.copy().x - (button.size.copy().x / 2) &&
            mousePosition.copy().x - 30 < button.pos.copy().x + (button.size.copy().x / 2) &&
            mousePosition.copy().y > button.pos.copy().y - (button.size.copy().y / 2) + buttonsDisplacement&&
            mousePosition.copy().y < button.pos.copy().y + (button.size.copy().y / 2) + buttonsDisplacement && 
            !popUpVisible)
            {
                button.clicked()
            }

            
    })

    popUps[currentScene].buttons.forEach(button => {
        if (mousePosition.x > button.pos.copy().x - (button.size.copy().x / 2) &&
            mousePosition.x < button.pos.copy().x + (button.size.copy().x / 2) &&
            mousePosition.y > button.pos.copy().y - (button.size.copy().y / 2) &&
            mousePosition.y < button.pos.copy().y + (button.size.copy().y / 2) && 
            popUpVisible)
            {
                button.clicked()
            }
    })
}

function checkMenuButtonHover(canvas)
{
    let mousePosition = new p5.Vector(canvas.mouseX + 30, canvas.mouseY);
    // canvas.rect(mousePosition.x, mousePosition.y, 10, 10)

    controlMenuButtons[currentScene].forEach(button => {
        // console.log(mousePosition, button.pos);
        if (mousePosition.x > button.pos.x - (button.size.x / 2) &&
            mousePosition.x < button.pos.x + (button.size.x / 2) &&
            mousePosition.y > button.pos.y - (button.size.y / 2) &&
            mousePosition.y < button.pos.y + (button.size.y / 2) &&
            !popUpVisible)
            {
                button.hover()
                // this.canvas.cursor("pointer")

                
            }
    })

    popUps[currentPopUp].buttons.forEach(button => {
        // console.log(mousePosition, button.pos);
        if (mousePosition.x > button.pos.x - (button.size.x / 2) &&
            mousePosition.x < button.pos.x + (button.size.x / 2) &&
            mousePosition.y > button.pos.y - (button.size.y / 2) &&
            mousePosition.y < button.pos.y + (button.size.y / 2) &&
            !popUpVisible)
            {
                button.hover()
                // this.canvas.cursor("pointer")

                
            }
    })
}

function getControlButtonPositions()
{
    let numberOfButtons = 15;
    let buttonPositions = [];
    
    if (landscape)
    {
        let intervalSize = 190;
        for (let i = 0; i < numberOfButtons; i++) 
        {
            let pos = (i * intervalSize) + 80
            
            buttonPositions.push(new p5.Vector(pos, 60))
        }

        buttonPositions[3].y += 18
        buttonPositions[4].y -= 20

        buttonPositions[5].x -= 950
        buttonPositions[5].y -= 5

        buttonPositions[6].x -= 950
        buttonPositions[6].y -= 5

        buttonPositions[7].x -= 950
        buttonPositions[7].y -= 5
    }
    else
    {
        let intervalSize = 80;

        for (let i = 0; i < numberOfButtons; i++) 
        {
            let pos = (i * intervalSize) + 150
            
            buttonPositions.push(new p5.Vector(160, pos))
        }
    }
    

    return buttonPositions;
}

function sliderInput()
{
    let slider1Value = slider1.value();
    let slider2Value = slider2.value() + 2.05;

    if (canvasLoaded.every(canvasLoad => canvasLoad))
    {
        leftScenes[0].images[1].acc.x = (slider1Value + 1) * 0.1;
        rightScenes[0].referenceFrame.acc.x = (slider1Value + 1) * -0.1;
        rightScenes[0].images[1].acc.x = (slider1Value + 1) * 0.1;

        if (leftScenes[0].images[2].bounces < 1)
        {
            let ballOmega = (slider1Value + 1) * -1.75;
            leftScenes[0].images[2].omega = ballOmega;
            rightScenes[0].images[2].omega = ballOmega;
        }

        leftScenes[2].shapes[0].omega = -slider1Value
        rightScenes[2].images[0].omega = -slider1Value

        // let newPos = new p5.Vector()
        // newPos.x = leftScenes[1].images[2].startingPos.copy().x + (slider1Value * 2)
        // newPos.y = leftScenes[1].images[2].startingPos.copy().y + (slider1Value * 2)
        
        // leftScenes[1].images[2].pos = newPos.copy()
        // rightScenes[1].images[2].pos = newPos.copy()

        if (currentScene == 0) theFrameRate = (slider1Value + 3) * 15;

        if (currentScene == 1) 
        {
            leftScenes[1].images[2].angle = (slider1Value + 1) * -40
            rightScenes[1].images[2].angle = (slider1Value + 1) * -40

            // rightScenes[1].images[2].pos.y = (slider1Value + 1) * -10
        }

        leftScenes[0].images[2].mass = slider2Value / 2;
        leftScenes[1].shapes[0].mass = slider2Value;
        leftScenes[2].shapes[2].mass = slider2Value;

        rightScenes[0].images[2].mass = slider2Value / 2;
        rightScenes[1].shapes[0].mass = slider2Value;
        rightScenes[2].shapes[2].mass = slider2Value;

        // vel: new p5.Vector(10, -5),
        // console.log(leftScenes[1].images[2].angle)

        // controlMenuButtons[2][3].omega.z = slider1Value;
    }

    // console.log(slider1Value, slider2Value);
    

    // console.log("asdf");
    // console.log(leftScenes[0].images[1].vel);
}
