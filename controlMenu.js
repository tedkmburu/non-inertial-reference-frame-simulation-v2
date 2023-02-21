function createMenu(canvas) 
{
    new p5(leftCanvasObject);
    new p5(rightCanvasObject);  

    buttons.push(new Button({
        text: "rewind", 
        image: rewindImage,
        pos: new p5.Vector(500, 200),
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: playPauseImage,
        pos: new p5.Vector(1000, 200),
        canvas: canvas,
        onClick: () => {
            playState = !playState;
        }
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: restartImage,
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

    buttons.push(new Button({
        text: "asdf", 
        image: omegaImage,
        pos: new p5.Vector(2000, 200),
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: massImage,
        pos: new p5.Vector(3000, 200),
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: helpImage,
        pos: new p5.Vector(4000, 200),
        canvas: canvas,
    }))
}

function displayMenu(canvas)
{
    buttons.forEach(button => {
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