function createMenu(canvas) 
{
    new p5(leftCanvasObject);
    new p5(rightCanvasObject); 
    new p5(popUpWindow); 

    // scenes[0]

    let baseButtons = []

    baseButtons.push(new Button({
        text: "rewind", 
        image: rewind,
        pos: new p5.Vector(500, 200),
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "asdf", 
        image: playPause,
        pos: new p5.Vector(1000, 200),
        canvas: canvas,
        onClick: () => {
            playState = !playState;
        }
    }))

    baseButtons.push(new Button({
        text: "asdf", 
        image: restart,
        pos: new p5.Vector(1500, 200),
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
        text: "asdf", 
        image: omega,
        pos: new p5.Vector(2000, 200),
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "asdf", 
        image: mass,
        pos: new p5.Vector(3000, 200),
        canvas: canvas,
    }))

    baseButtons.push(new Button({
        text: "asdf", 
        image: help,
        pos: new p5.Vector(4000, 200),
        canvas: canvas,
    }))

    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)
    controlMenuButtons.push(baseButtons)
}

function displayMenu(canvas)
{
    // console.log(controlMenuButtons[currentScene]);
    controlMenuButtons[currentScene].forEach(button => {
        button.display()
    })
}

function checkButtonClick(canvas)
{
    let mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY, 0)
    buttons.forEach(button => {
        if (mousePosition.x > button.pos.x - (button.size.x / 2) &&
            mousePosition.x < button.pos.x + (button.size.x / 2) &&
            mousePosition.y > button.pos.y - (button.size.y / 2) &&
            mousePosition.y < button.pos.y + (button.size.y / 2))
            {
                button.clicked()
            }
    })
}

// rewind = canvas.loadImage("images/forward-solid.svg");
//         playPause = canvas.loadImage("images/pause-solid.svg");
//         restart = canvas.loadImage("images/arrow-rotate-right-solid.svg");
//         omega = canvas.loadImage("images/omega.png");
//         mass = canvas.loadImage("images/mass.png");
//         help = canvas.loadImage("images/circle-info-solid.svg");