const theFrameRate = 60; 

let landscape,
canvasSize, 
canvas1Pos, 
canvas2Pos;

let popUpVisible = true;

let leftScenes = []
let rightScenes = []

let leftTruckImage, leftBackgroundImage, leftCannon1, leftCannon2, leftCannon3, leftGrid; 
let rightTruckImage, rightBackgroundImage, rightCannon1, rightCannon2, rightCannon3, rightGrid; 
let rewindImage, playPauseImage, restartImage, omegaImage, speedImage, massImage, helpImage;
let currentScene = 2;

let playState = true;

let scale = 1;

let buttons = []
let slider1, slider2;


const leftCanvasObject = canvas => {
    canvas.preload = function() 
    {
        leftTruckImage = canvas.loadImage('images/truck.png'); 
        leftBackgroundImage = canvas.loadImage('images/enviroment2.png'); 
        leftCannon1 = canvas.loadImage('images/cannon.png'); 
        leftCannon2 = canvas.loadImage('images/cannon2.png'); 
        leftCannon3 = canvas.loadImage('images/cannon3.png'); 
        leftGrid = canvas.loadImage('images/grid.png'); 
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {        
        if (innerWidth >= innerHeight)
        {
            landscape = true;
            canvasSize = canvas.createVector(innerWidth / 2, innerHeight, 0)
            canvas1Pos = canvas.createVector(0, 0, 0)
            canvas2Pos = canvas.createVector(innerWidth / 2, 0, 0)
        }
        else
        {
            landscape = false;
            canvasSize = canvas.createVector(innerWidth, innerHeight / 2, 0)
            canvas1Pos = canvas.createVector(0, 0, 0)
            canvas2Pos = canvas.createVector(0, innerHeight / 2, 0)
        }

        let roomCnv = canvas.createCanvas(canvasSize.x, canvasSize.y, canvas.WEBGL)

        if (landscape) 
        {
            roomCnv.addClass('left');
        }
        else
        {
            roomCnv.addClass('top');
        }

        createLeftScenes(canvas)
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(0)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            // canvas.fill(0)
            // canvas.noStroke()
            // canvas.rect(0, 0, canvasSize.x, canvasSize.y)
            // canvas.orbitControl();
            leftScenes[currentScene].display()
        canvas.pop()    
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        canvas.setup()
    }

    canvas.mouseClicked = function() {

    }

    // canvas.mouseDragged = function() { mouseDraggedLeft(canvas); }
}

const rightCanvasObject = canvas => {
    canvas.preload = function() 
    {
        rightTruckImage = canvas.loadImage('images/truck.png'); 
        rightBackgroundImage = canvas.loadImage('images/enviroment2.png'); 
        rightCannon1 = canvas.loadImage('images/cannon.png'); 
        rightCannon2 = canvas.loadImage('images/cannon2.png'); 
        rightCannon3 = canvas.loadImage('images/cannon3.png'); 
        rightGrid = canvas.loadImage('images/grid.png'); 
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {        
        if (innerWidth >= innerHeight)
        {
            landscape = true;
            canvasSize = canvas.createVector(innerWidth / 2, innerHeight, 0)
            canvas1Pos = canvas.createVector(0, 0, 0)
            canvas2Pos = canvas.createVector(innerWidth / 2, 0, 0)
        }
        else
        {
            landscape = false;
            canvasSize = canvas.createVector(innerWidth, innerHeight / 2, 0)
            canvas1Pos = canvas.createVector(0, 0, 0)
            canvas2Pos = canvas.createVector(0, innerHeight / 2, 0)
        }

        let roomCnv = canvas.createCanvas(canvasSize.x, canvasSize.y, canvas.WEBGL)

        if (landscape) 
        {
            roomCnv.addClass('right');
        }
        else
        {
            roomCnv.addClass('bottom');
        }

        createRightScenes(canvas)
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(0)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            // canvas.fill(0)
            // canvas.noStroke()
            // canvas.translate(canvas2Pos.x, canvas2Pos.y)
            // canvas.rect(0, 0, canvasSize.x, canvasSize.y)
            // canvas.orbitControl();
            sliderInput()
            rightScenes[currentScene].display()
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        canvas.setup()
    }

    canvas.mouseClicked = function() {

    }

    // canvas.mouseDragged = function() { mouseDraggedLeft(canvas); }
}

const popUpWindow = canvas => {
    canvas.preload = function() 
    {
        truckImage = canvas.loadImage('images/truck.png'); 
        backgroundImage = canvas.loadImage('images/enviroment2.png'); 
        cannon1 = canvas.loadImage('images/cannon.png'); 
        cannon2 = canvas.loadImage('images/cannon2.png'); 
        cannon3 = canvas.loadImage('images/cannon3.png'); 
        grid = canvas.loadImage('images/grid.png'); 

        
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {        

        let roomCnv = canvas.createCanvas(innerWidth / 2, innerHeight / 2)

        roomCnv.addClass('popUp');
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(0)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        canvas.push()
            // canvas.fill(0)
            // canvas.noStroke()
            // canvas.translate(canvas2Pos.x, canvas2Pos.y)
            // canvas.rect(0, 0, canvasSize.x, canvasSize.y)

            
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        canvas.setup()
    }

    canvas.mouseClicked = function() {

    }
}

const controlMenu = canvas => {
    canvas.preload = function() 
    {
        rewindImage = canvas.loadImage("images/forward-solid.svg");
        playPauseImage = canvas.loadImage("images/pause-solid.svg");
        restartImage = canvas.loadImage("images/arrow-rotate-right-solid.svg");
        omegaImage = canvas.loadImage("images/omega.png");
        speedImage = canvas.loadImage("images/speed.png");
        massImage = canvas.loadImage("images/kg.png");
        helpImage = canvas.loadImage("images/circle-info-solid.svg");
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {        
        scale = canvas.width / 1000;
        let roomCnv = canvas.createCanvas(innerWidth * 0.9, 400 * scale)

        roomCnv.addClass('controlMenu');
        roomCnv.style("top", (innerHeight / 2) - (200 * scale) + "px")
        roomCnv.style("left", ((innerWidth / 2) * 0.1) + "px")
        roomCnv.style("borderRadius", (200 * scale) + "px")

        slider1 = canvas.createSlider(-1, 1, 0.5, 0.01);
        slider1.position(2500 * scale, (innerWidth / 2) + 25);
        slider1.style('width', (500 * scale) + 'px');
        slider1.style('zIndex', '999');
        slider1.style('opacity', '0.5');
        
        slider2 = canvas.createSlider(-1, 1, 0.5, 0.01);
        slider2.position(3500 * scale, (innerWidth / 2) + 25);
        slider2.style('width', (500 * scale) + 'px');
        slider2.style('zIndex', '999');
        createMenu(canvas)
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(255)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
        
            displayMenu(canvas)
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        canvas.setup()
    }

    canvas.mouseClicked = function() {
        checkButtonClick(canvas)
    }
}

// new p5(leftCanvasObject);
// new p5(rightCanvasObject);
// new p5(popUpWindow);
new p5(controlMenu);























// function preload()
// {
//     truckImage = loadImage('images/truck.png'); 
//     backgroundImage = loadImage('images/enviroment2.png'); 
//     cannon1 = loadImage('images/cannon.png'); 
//     cannon2 = loadImage('images/cannon2.png'); 
//     cannon3 = loadImage('images/cannon3.png'); 
//     grid = loadImage('images/grid.png'); 
// }

// function setup()
// {
//     createCanvas(innerWidth, innerHeight)

//     if (innerWidth >= innerHeight)
//     {
//         landscape = true;
//         canvasSize = createVector(innerWidth / 2, innerHeight)
//         canvas1Pos = createVector(0, 0)
//         canvas2Pos = createVector(innerWidth / 2, 0)
//     }
//     else
//     {
//         landscape = false;
//         canvasSize = createVector(innerWidth, innerHeight / 2)
//         canvas1Pos = createVector(0, 0)
//         canvas2Pos = createVector(0, innerHeight / 2)
//     }

//     createScenes()
// }

// function draw()
// {
//     background("red")

//     drawLeftCanvas()
//     drawRightCanvas()
//     drawDivider()

//     if (popUpVisible) drawPopUp();
// }

function drawPopUp()
{

}

