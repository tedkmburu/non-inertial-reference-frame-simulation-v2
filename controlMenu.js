function createMenu(canvas) 
{
    new p5(leftCanvasObject);
    new p5(rightCanvasObject); 
    new p5(popUpWindow); 

    // scenes[0]
    buttonPositions = getControlButtonPositions()

    let baseButtons = []

    baseButtons.push(new Button({
        text: "Rewind", 
        image: rewindImage,
        pos: new p5.Vector(buttonPositions[0].x, buttonPositions[0].y),
        size: new p5.Vector(200, 50),
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
        size: new p5.Vector(200, 50),
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
        size: new p5.Vector(200, 50),
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
        size: new p5.Vector(200, 100),
        fill: lightBlueColor,
        showBorder: true,
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "Mass", 
        image: massImage,
        pos: new p5.Vector(buttonPositions[4].x, buttonPositions[4].y + 60),
        size: new p5.Vector(200, 100),
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
    }))

    baseButtons.push(new Button({
        text: "Help", 
        image: helpImage,
        pos: new p5.Vector(buttonPositions[5].x, buttonPositions[5].y + 80),
        size: new p5.Vector(200, 50),
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            console.log("help");
        }
    }))

    baseButtons.push(new Button({
        text: "Back", 
        image: backImage,
        pos: new p5.Vector(buttonPositions[6].x, buttonPositions[6].y + 80),
        size: new p5.Vector(200, 50),
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            if (currentScene > 0) currentScene--;
            else currentScene = 2;

            resetAllScenes()
        }
    }))

    baseButtons.push(new Button({
        text: "Next", 
        image: nextImage,
        pos: new p5.Vector(buttonPositions[7].x, buttonPositions[7].y + 80),
        size: new p5.Vector(200, 50),
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            if (currentScene < 2) currentScene++;
            else currentScene = 0;

            resetAllScenes()
        }
    }))

    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)

    

    sliderDefaults[0] = [0, 0]
    sliderDefaults[1] = [0, 0]
    sliderDefaults[2] = [0.5, 0]
    sliderDefaults[3] = [0, 0]

    slider1.value(sliderDefaults[currentScene][0])
    slider2.value(sliderDefaults[currentScene][1])

    // sliderInput()
}

function displayMenu(canvas)
{
    controlMenuButtons[0][3].text = "Speed"
    controlMenuButtons[1][3].text = "Velocity"
    controlMenuButtons[2][3].text = "Omega"
    
    controlMenuButtons[0][3].image = speedImage
    controlMenuButtons[1][3].image = velImage
    controlMenuButtons[2][3].image = omegaImage

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

    checkMenuButtonHover(canvas)
}

function checkButtonClick(canvas)
{
    let mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY);

    // console.log("pos", mousePosition);
    // console.log(controlMenuButtons[currentScene][0].pos);

    controlMenuButtons[currentScene].forEach(button => {
        // console.log(mousePosition, button.pos);
        if (mousePosition.x > button.pos.x - (button.size.x / 2) &&
            mousePosition.x < button.pos.x + (button.size.x / 2) &&
            mousePosition.y > button.pos.y - (button.size.y / 2) &&
            mousePosition.y < button.pos.y + (button.size.y / 2) && 
            !popUpVisible)
            {
                button.clicked()
            }

            
    })

    popUps[currentPopUp].buttons.forEach(button => {
        if (mousePosition.x > button.pos.x - (button.size.x / 2) &&
            mousePosition.x < button.pos.x + (button.size.x / 2) &&
            mousePosition.y > button.pos.y - (button.size.y / 2) &&
            mousePosition.y < button.pos.y + (button.size.y / 2) && 
            popUpVisible)
            {
                button.clicked()
            }
    })
}

function checkMenuButtonHover(canvas)
{
    let mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY);
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
}

function getControlButtonPositions()
{
    let numberOfButtons = 15;
    let buttonPositions = [];
    let screenSize = (landscape)? innerHeight : innerWidth;
    let intervalSize = 100;

    for (let i = 0; i < numberOfButtons; i++) 
    {
        let pos = (i * intervalSize) + 35 + 50
        if (landscape)
        {
            buttonPositions.push(new p5.Vector(0, pos))
        }
        else
        {
            buttonPositions.push(new p5.Vector(125, pos))
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

        leftScenes[0].images[2].mass = slider2Value;
        leftScenes[1].shapes[0].mass = slider2Value;
        leftScenes[2].shapes[2].mass = slider2Value;

        rightScenes[0].images[2].mass = slider2Value;
        rightScenes[1].shapes[0].mass = slider2Value;
        rightScenes[2].shapes[2].mass = slider2Value;

        // controlMenuButtons[2][3].omega.z = slider1Value;
    }

    // console.log(slider1Value, slider2Value);
    

    // console.log("asdf");
    // console.log(leftScenes[0].images[1].vel);
}
