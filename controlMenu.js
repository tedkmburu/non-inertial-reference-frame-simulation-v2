function createMenu(canvas) 
{
    new p5(leftCanvasObject);
    new p5(rightCanvasObject); 
    new p5(popUpWindow); 

    // scenes[0]

    let baseButtons = []

    baseButtons.push(new Button({
        text: "Rewind", 
        image: rewindImage,
        pos: new p5.Vector(-300, 0),
        size: new p5.Vector(50, 50),
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "Play/Pause", 
        image: playPauseImage,
        pos: new p5.Vector(-200, 0),
        size: new p5.Vector(50, 50),
        canvas: canvas,
        onClick: () => {
            playState = !playState;
        }
    }))

    baseButtons.push(new Button({
        text: "Restart", 
        image: restartImage,
        pos: new p5.Vector(-100, 0),
        size: new p5.Vector(50, 50),
        canvas: canvas,
        onClick: () => {
            console.log("reset");
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
        pos: new p5.Vector(0, 0),
        size: new p5.Vector(50, 50),
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "Mass", 
        image: massImage,
        pos: new p5.Vector(200, 0),
        size: new p5.Vector(50, 50),
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "Help", 
        image: helpImage,
        pos: new p5.Vector(400, 0),
        size: new p5.Vector(50, 50),
        canvas: canvas,
    }))

    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)

}

function displayMenu(canvas)
{
    controlMenuButtons[currentScene].forEach(button => {
        button.display()
    })
}

function checkButtonClick(canvas)
{
    let mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY, 0)
    controlMenuButtons[currentScene].forEach(button => {
        // console.log(mousePosition, button.pos);
        if (mousePosition.x > button.pos.x - (button.size.x / 2) &&
            mousePosition.x < button.pos.x + (button.size.x / 2) &&
            mousePosition.y > button.pos.y - (button.size.y / 2) &&
            mousePosition.y < button.pos.y + (button.size.y / 2))
            {
                button.clicked()
                console.log("click");
            }
    })
}

function sliderInput()
{
    let slider1Value = slider1.value()
    let slider2Value = slider2.value()

    // console.log(slider1Value, slider2Value);
    leftScenes[0].images[1].vel.x = (slider1Value + 1) * 2;
    rightScenes[0].referenceFrame.vel.x = (slider1Value + 1) * -2;
    rightScenes[0].images[1].vel.x = (slider1Value + 1) * 2;

    // console.log(leftScenes[0].images[1].vel);
}

function slider2Input()
{

}

// rewind = canvas.loadImage("images/forward-solid.svg");
//         playPause = canvas.loadImage("images/pause-solid.svg");
//         restart = canvas.loadImage("images/arrow-rotate-right-solid.svg");
//         omega = canvas.loadImage("images/omega.png");
//         mass = canvas.loadImage("images/mass.png");
//         help = canvas.loadImage("images/circle-info-solid.svg");