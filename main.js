'use strict';

const theFrameRate = 60; 

let landscape,
canvasSize, 
canvas1Pos, 
canvas2Pos;

let leftCanvas, rightCanvas, controlsCanvas, popUpCanvas

let leftScenes = []
let rightScenes = []
let popUps = []
let leftTruckImage, leftBackgroundImage, leftCannon1, leftCannon2, leftCannon3, leftGrid; 
let rightTruckImage, rightBackgroundImage, rightCannon1, rightCannon2, rightCannon3, rightGrid; 
let rewind, playPause, restart, omega, mass, help;

let currentScene = 0;
let currentPopUp = 0;

let playState = true;
let popUpVisible = false;

let buttons = []
let controlMenuButtons = []
let slider1, slider2;

let regularFont, boldFont, thinFont;


const leftCanvasObject = canvas => {
    canvas.preload = function() 
    {
        leftTruckImage = canvas.loadImage('images/truck.png'); 
        leftBackgroundImage = canvas.loadImage('images/enviroment2.png'); 
        leftCannon1 = canvas.loadImage('images/cannon.png'); 
        leftCannon2 = canvas.loadImage('images/cannon2.png'); 
        leftCannon3 = canvas.loadImage('images/cannon3.png'); 
        leftGrid = canvas.loadImage('images/grid.png');
        
        regularFont = canvas.loadFont("fonts/Roboto-Regular.ttf")
        boldFont = canvas.loadFont("fonts/Roboto-Bold.ttf")
        thinFont = canvas.loadFont("fonts/Roboto-Light.ttf")
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {        
        resizedWindow()

        leftCanvas = canvas.createCanvas(canvasSize.x, canvasSize.y, canvas.WEBGL)

        if (landscape) 
        {
            leftCanvas.addClass('left');
        }
        else
        {
            leftCanvas.addClass('top');
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
            canvas.orbitControl();
            leftScenes[currentScene].display()
        canvas.pop()    
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        resizedWindow();
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

        regularFont = canvas.loadFont("fonts/Roboto-Regular.ttf")
        boldFont = canvas.loadFont("fonts/Roboto-Bold.ttf")
        thinFont = canvas.loadFont("fonts/Roboto-Light.ttf")
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

        rightCanvas = canvas.createCanvas(canvasSize.x, canvasSize.y, canvas.WEBGL)

        if (landscape) 
        {
            rightCanvas.addClass('right');
        }
        else
        {
            rightCanvas.addClass('bottom');
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
            canvas.orbitControl();
            rightScenes[currentScene].display()
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        resizedWindow();
        canvas.setup()
    }

    canvas.mouseClicked = function() {

    }

    // canvas.mouseDragged = function() { mouseDraggedLeft(canvas); }
}

const popUpWindow = canvas => {

    canvas.preload = function()
    {
        regularFont = canvas.loadFont("fonts/Roboto-Regular.ttf")
        boldFont = canvas.loadFont("fonts/Roboto-Bold.ttf")
        thinFont = canvas.loadFont("fonts/Roboto-Light.ttf")
    }

    canvas.setup = function()  // This function only runs once when the page first loads. 
    {        
        popUpCanvas = canvas.createCanvas(innerWidth / 2, innerHeight / 2, canvas.WEBGL)
        popUpCanvas.addClass('popUp');

        createPopUps(popUpCanvas)
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(0)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            popUpCanvas.style("visibility", (popUpVisible) ? "visible" : "hidden")
            // popUps[currentPopUp].display()
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        resizedWindow();
        canvas.setup()
    }

    canvas.mouseClicked = function() {

    }
}

const controlMenu = canvas => {
    canvas.preload = function() 
    {
        rewind = canvas.loadImage("images/forward-solid.svg");
        playPause = canvas.loadImage("images/pause-solid.svg");
        restart = canvas.loadImage("images/arrow-rotate-right-solid.svg");
        omega = canvas.loadImage("images/omega.png");
        mass = canvas.loadImage("images/mass.png");
        help = canvas.loadImage("images/circle-info-solid.svg");
        
        regularFont = canvas.loadFont("fonts/Roboto-Regular.ttf")
        boldFont = canvas.loadFont("fonts/Roboto-Bold.ttf")
        thinFont = canvas.loadFont("fonts/Roboto-Light.ttf")
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {
        controlsCanvas = canvas.createCanvas(innerWidth * 0.9, 400, canvas.WEBGL)

        controlsCanvas.addClass('controlMenu');
        controlsCanvas.style("top", (innerHeight / 2) - (200) + "px")
        controlsCanvas.style("left", ((innerWidth / 2) * 0.1) + "px")
        controlsCanvas.style("borderRadius", (200) + "px")

        slider1 = canvas.createSlider(0, 255, 100);
        slider1.position(2600, (innerWidth / 2) + 10);
        slider1.style('width', '80px');
        slider1.style('zIndex', '999');
        
        slider2 = canvas.createSlider(0, 255, 100);
        slider2.position(3600, (innerWidth / 2) + 10);
        slider2.style('width', '80px');
        slider2.style('zIndex', '999');
        createMenu(canvas)
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(255)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            // sceneControls()
            displayMenu(canvas)
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        resizedWindow();
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

function resizedWindow()
{
    if (innerWidth >= innerHeight)
    {
        landscape = true;
        canvasSize = new p5.Vector(innerWidth / 2, innerHeight, 0)
        canvas1Pos = new p5.Vector(0, 0, 0)
        canvas2Pos = new p5.Vector(innerWidth / 2, 0, 0)
    }
    else
    {
        landscape = false;
        canvasSize = new p5.Vector(innerWidth, innerHeight / 2, 0)
        canvas1Pos = new p5.Vector(0, 0, 0)
        canvas2Pos = new p5.Vector(0, innerHeight / 2, 0)
    }

    slider1.position(2600, ((innerHeight / 2) + 0));
    slider1.style('width', '80px');
    
    slider2.position(3600, ((innerHeight / 2) + 0));
    slider2.style('width', '80px');
}





















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

