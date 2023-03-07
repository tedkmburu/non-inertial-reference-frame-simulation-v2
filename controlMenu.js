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
        size: new p5.Vector(50, 50),
        canvas: canvas,
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
        text: "Play/Pause", 
        image: pauseImage,
        pos: new p5.Vector(buttonPositions[1].x, buttonPositions[1].y),
        size: new p5.Vector(50, 50),
        canvas: canvas,
        onClick: () => {
            playState = !playState;
        }
    }))

    baseButtons.push(new Button({
        text: "Restart", 
        image: restartImage,
        pos: new p5.Vector(buttonPositions[2].x, buttonPositions[2].y),
        size: new p5.Vector(50, 50),
        canvas: canvas,
        onClick: () => {
            leftScenes.forEach(scene => {
                scene.shapes.forEach(shape => {
                    shape.reset()
                })
                scene.images.forEach(image => {
                    image.reset()
                })
            })

            rightScenes.forEach(scene => {
                scene.shapes.forEach(shape => {
                    shape.reset()
                })
                scene.images.forEach(image => {
                    image.reset()
                })
            })
        }
    }))

    baseButtons.push(new Button({
        text: "Omega", 
        image: omegaImage,
        pos: new p5.Vector(buttonPositions[3].x, buttonPositions[3].y),
        size: new p5.Vector(50, 50),
        omega: new p5.Vector(0, 0, 0.5),
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "Mass", 
        image: massImage,
        pos: new p5.Vector(buttonPositions[5].x, buttonPositions[5].y),
        size: new p5.Vector(50, 50),
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "Help", 
        image: helpImage,
        pos: new p5.Vector(buttonPositions[7].x, buttonPositions[7].y),
        size: new p5.Vector(50, 50),
        canvas: canvas,
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
    controlMenuButtons[currentScene].forEach(button => {
        button.display()
        if (playState && !popUpVisible) button.move()
    })

    if (playState) controlMenuButtons[currentScene][1].image = pauseImage
    else controlMenuButtons[currentScene][1].image = playImage

    if (playBackwards) controlMenuButtons[currentScene][0].image = forwindImage
    else controlMenuButtons[currentScene][0].image = rewindImage

    if (currentScene == 0) controlMenuButtons[currentScene][3].image = speedImage
    if (currentScene == 1) controlMenuButtons[currentScene][3].image = velImage
    if (currentScene == 0) controlMenuButtons[currentScene][3].image = speedImage

    checkMenuButtonHover(canvas)
}

function checkButtonClick(canvas)
{
    let mousePosition;

    if (landscape)
    {
        mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY, 0).sub(new p5.Vector(60, (innerHeight / 2) - 30, 0))
    }
    else
    {
        mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY, 0).sub(new p5.Vector((innerWidth * 0.9) / 2, 50, 0))
    }

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
    let mousePosition;

    if (landscape)
    {
        mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY, 0).sub(new p5.Vector(60, (innerHeight / 2) - 30, 0))
    }
    else
    {
        mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY, 0).sub(new p5.Vector((innerWidth * 0.9) / 2, 50, 0))
    }

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
    let numberOfButtons = 10;
    let buttonPositions = [];
    let screenSize = (landscape)? innerHeight : innerWidth;
    let intervalSize = screenSize / numberOfButtons;

    for (let i = 0; i < numberOfButtons; i++) 
    {

        let pos = (i * intervalSize) - (screenSize / 2) + (screenSize * 0.15)
        if (landscape)
        {
            buttonPositions.push(new p5.Vector(0, pos))
        }
        else
        {
            buttonPositions.push(new p5.Vector(pos, 0))
        }
    }

    return buttonPositions;
}

function getSliderWidth()
{
    let numberOfButtons = 13;
    let screenSize = (landscape) ? innerHeight : innerWidth;
    let intervalSize = screenSize / numberOfButtons;
    intervalSize *= 1.2

    return intervalSize
}

function sliderInput()
{
    let slider1Value = slider1.value();
    let slider2Value = slider2.value() + 2.05;

    if (canvasLoaded.every(canvasLoad => canvasLoad))
    {
        leftScenes[0].images[1].vel.x = (slider1Value + 1) * 2;
        rightScenes[0].referenceFrame.vel.x = (slider1Value + 1) * -2;
        rightScenes[0].images[1].vel.x = (slider1Value + 1) * 2;

        leftScenes[2].shapes[0].omega = new p5.Vector(0, 0, slider1Value)
        rightScenes[2].images[0].omega = new p5.Vector(0, 0, -slider1Value)

        leftScenes[0].images[2].mass = slider2Value;
        leftScenes[1].shapes[0].mass = slider2Value;
        leftScenes[2].shapes[2].mass = slider2Value;

        rightScenes[0].images[2].mass = slider2Value;
        rightScenes[1].shapes[0].mass = slider2Value;
        rightScenes[2].shapes[2].mass = slider2Value;

        controlMenuButtons[2][3].omega.z = slider1Value;
    }

    // console.log(slider1Value, slider2Value);
    

    // console.log("asdf");
    // console.log(leftScenes[0].images[1].vel);
}


// rewind = canvas.loadImage("images/forward-solid.svg");
//         playPause = canvas.loadImage("images/pause-solid.svg");
//         restart = canvas.loadImage("images/arrow-rotate-right-solid.svg");
//         omega = canvas.loadImage("images/omega.png");
//         mass = canvas.loadImage("images/mass.png");
//         help = canvas.loadImage("images/circle-info-solid.svg");