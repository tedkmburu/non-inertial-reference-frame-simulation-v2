function createMenu(canvas) 
{
    buttons.push(new Button({
        text: "rewind", 
        image: rewind,
        pos: new p5.Vector(500, 200),
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: playPause,
        pos: new p5.Vector(1000, 200),
        canvas: canvas,
        onClick: () => {
            playState = !playState;
        }
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: restart,
        pos: new p5.Vector(1500, 200),
        canvas: canvas,
        onClick: () => {
            console.log("reset");
        }
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: omega,
        pos: new p5.Vector(2000, 200),
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: mass,
        pos: new p5.Vector(3000, 200),
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: help,
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
    let mousePosition = new p5.Vector(canvas.mouseX, canvas.mouseY)
    buttons.forEach(button => {
        if (mousePosition.x > button.pos.x - (button.size.x / 2) &&
            mousePosition.x < button.pos.x + (button.size.x / 2) &&
            mousePosition.y > button.pos.y - (button.size.y / 2) &&
            mousePosition.y < button.pos.y + (button.size.y / 2))
            {
                button.onClick()
            }
    })
}

// rewind = canvas.loadImage("images/forward-solid.svg");
//         playPause = canvas.loadImage("images/pause-solid.svg");
//         restart = canvas.loadImage("images/arrow-rotate-right-solid.svg");
//         omega = canvas.loadImage("images/omega.png");
//         mass = canvas.loadImage("images/mass.png");
//         help = canvas.loadImage("images/circle-info-solid.svg");