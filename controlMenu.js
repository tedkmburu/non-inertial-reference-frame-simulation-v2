function createMenu(canvas) 
{
    buttons.push(new Button({
        // text: "rewind", 
        image: rewind,
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: playPause,
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: restart,
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: omega,
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: mass,
        canvas: canvas,
    }))

    buttons.push(new Button({
        text: "asdf", 
        image: help,
        canvas: canvas,
    }))
}

function displayMenu(canvas)
{
    buttons.forEach(button => {
        button.display()
    })
}

// rewind = canvas.loadImage("images/forward-solid.svg");
//         playPause = canvas.loadImage("images/pause-solid.svg");
//         restart = canvas.loadImage("images/arrow-rotate-right-solid.svg");
//         omega = canvas.loadImage("images/omega.png");
//         mass = canvas.loadImage("images/mass.png");
//         help = canvas.loadImage("images/circle-info-solid.svg");