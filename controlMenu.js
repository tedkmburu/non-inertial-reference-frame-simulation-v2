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
        text: "Play/Pause", 
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
        size: new p5.Vector(200, 50),
        fill: lightBlueColor,
        showBorder: true,
        // omega: new p5.Vector(0, 0, 0.5),
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "Mass", 
        image: massImage,
        pos: new p5.Vector(buttonPositions[6].x, buttonPositions[6].y),
        size: new p5.Vector(200, 50),
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
    }))

    baseButtons.push(new Button({
        text: "Help", 
        image: helpImage,
        pos: new p5.Vector(buttonPositions[9].x, buttonPositions[9].y),
        size: new p5.Vector(200, 50),
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            if (currentScene > 0) currentScene--;
            else currentScene = 3;

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
        text: "Back", 
        image: backImage,
        pos: new p5.Vector(buttonPositions[10].x, buttonPositions[10].y),
        size: new p5.Vector(200, 50),
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            if (currentScene > 0) currentScene--;
            else currentScene = 2;

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
        text: "Next", 
        image: nextImage,
        pos: new p5.Vector(buttonPositions[11].x, buttonPositions[11].y),
        size: new p5.Vector(200, 50),
        fill: lightBlueColor,
        canvas: canvas,
        showBorder: true,
        onClick: () => {
            if (currentScene < 2) currentScene++;
            else currentScene = 0;

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

    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)

    controlMenuButtons[0][3].text = "Speed"
    controlMenuButtons[1][3].text = "Velocity"
    controlMenuButtons[2][3].text = "Omega"
    
    controlMenuButtons[0][3].image = speedImage
    controlMenuButtons[1][3].image = velImage
    controlMenuButtons[2][3].image = omegaImage

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

    

    if (currentScene == 0 || currentScene == 1) 
    {
        // controlMenuButtons[currentScene][3].omega.z = 0;
        // controlMenuButtons[currentScene][3].angle.z = 0; 
    }

    checkMenuButtonHover(canvas)
}

function checkButtonClick(canvas)
{
    let mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY).sub(new p5.Vector(150, innerHeight / 2));

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
    let mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY).sub(new p5.Vector(150, innerHeight / 2));
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

        let pos = (i * intervalSize) - (screenSize / 2) + 100
        if (landscape)
        {
            buttonPositions.push(new p5.Vector(0, pos))
        }
        else
        {
            buttonPositions.push(new p5.Vector(-30, pos))
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
        leftScenes[0].images[1].vel.x = (slider1Value + 1) * 2;
        rightScenes[0].referenceFrame.vel.x = (slider1Value + 1) * -2;
        rightScenes[0].images[1].vel.x = (slider1Value + 1) * 2;

        
        if (leftScenes[0].images[2].bounces < 1)
        {
            let ballOmega = (slider1Value + 1) * -1.75;
            leftScenes[0].images[2].omega.z = ballOmega;
            rightScenes[0].images[2].omega.z = ballOmega;
        }

        leftScenes[2].shapes[0].omega = slider1Value
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


// rewind = canvas.loadImage("images/forward-solid.svg");
//         playPause = canvas.loadImage("images/pause-solid.svg");
//         restart = canvas.loadImage("images/arrow-rotate-right-solid.svg");
//         omega = canvas.loadImage("images/omega.png");
//         mass = canvas.loadImage("images/mass.png");
//         help = canvas.loadImage("images/circle-info-solid.svg");