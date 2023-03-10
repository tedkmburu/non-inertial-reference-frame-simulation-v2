'use strict';

const theFrameRate = 60; 

let landscape,
canvasSize, 
canvasPos,
halfCanvas,
quarterCanvas,
backGroundImagePosition;

let leftCanvas, rightCanvas, controlsCanvas, popUpCanvas

let leftScenes = []
let rightScenes = []
let canvasLoaded = [false, false, false, false]
let everyCanvasLoaded = false; 

let popUps = []

let leftTruckImage, leftBackgroundImage, 
leftCannon1, leftCannon2, leftCannon3, 
leftGrid, leftVelImage, leftCorImage, leftCentImage, leftBallImage; 

let rightTruckImage, rightBackgroundImage, 
rightCannon1, rightCannon2, rightCannon3, 
rightGrid, rightVelImage, rightCorImage, rightCentImage, rightBallImage;

let rewindImage, forwindImage, playImage, pauseImage, restartImage, omegaImage, massImage, helpImage, speedImage, velImage;
let closeImage;

let currentScene = 3;
let currentPopUp = 0;

let playState = true;
let playBackwards = false;
let popUpVisible = false;

let buttons = []
let buttonPositions = []
let controlMenuButtons = []
let slider1, slider2;
let sliderAngle = 0;
let sliderDefaults = []

let regularFont, boldFont, thinFont;

let initialContitions = [];


const leftCanvasObject = canvas => {
    canvas.preload = function() 
    {
        leftTruckImage = canvas.loadImage('images/truck.png'); 
        leftBackgroundImage = canvas.loadImage('images/enviroment2.png'); 
        leftCannon1 = canvas.loadImage('images/cannon.png'); 
        leftCannon2 = canvas.loadImage('images/cannon2.png'); 
        leftCannon3 = canvas.loadImage('images/cannon3.png'); 
        leftGrid = canvas.loadImage('images/grid.png');
        leftVelImage = canvas.loadImage('images/vSmall.png');
        leftCorImage = canvas.loadImage('images/cor.png');
        leftCentImage = canvas.loadImage('images/cent.png');
        leftBallImage = canvas.loadImage('images/ball.png');
        
        regularFont = canvas.loadFont("fonts/Roboto-Regular.ttf")
        boldFont = canvas.loadFont("fonts/Roboto-Bold.ttf")
        thinFont = canvas.loadFont("fonts/Roboto-Light.ttf")
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {        
        resizedWindow()

        leftCanvas = canvas.createCanvas(canvasSize[0].x, canvasSize[0].y, canvas.WEBGL)

        if (landscape) 
        {
            leftCanvas.addClass('left');
        }
        else
        {
            leftCanvas.addClass('top');
        }

        createLeftScenes(canvas)

        canvasLoaded[0] = true;
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(0)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            // canvas.orbitControl();
            leftScenes[currentScene].display()
        canvas.pop()    
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        resizedWindow();
        // canvas.setup()
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
        rightVelImage = canvas.loadImage('images/vSmall.png');
        rightCorImage = canvas.loadImage('images/cor.png');
        rightCentImage = canvas.loadImage('images/cent.png');
        rightBallImage = canvas.loadImage('images/ball.png');

        regularFont = canvas.loadFont("fonts/Roboto-Regular.ttf")
        boldFont = canvas.loadFont("fonts/Roboto-Bold.ttf")
        thinFont = canvas.loadFont("fonts/Roboto-Light.ttf")
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {        
        rightCanvas = canvas.createCanvas(canvasSize[1].x, canvasSize[1].y, canvas.WEBGL)

        if (landscape) 
        {
            rightCanvas.addClass('right');
        }
        else
        {
            rightCanvas.addClass('bottom');
        }

        createRightScenes(canvas)
        canvasLoaded[1] = true;
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(0)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            // canvas.orbitControl();
            rightScenes[currentScene].display()
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        resizedWindow();
        // canvas.setup()
    }

    canvas.mouseClicked = function() {

    }

    // canvas.mouseDragged = function() { mouseDraggedLeft(canvas); }
}


























const popUpWindow = canvas => {

    canvas.preload = function()
    {
        closeImage = canvas.loadImage("images/close.png");

        regularFont = canvas.loadFont("fonts/Roboto-Regular.ttf")
        boldFont = canvas.loadFont("fonts/Roboto-Bold.ttf")
        thinFont = canvas.loadFont("fonts/Roboto-Light.ttf")
    }

    canvas.setup = function()  // This function only runs once when the page first loads. 
    {        
        popUpCanvas = canvas.createCanvas(innerWidth * 0.8, innerHeight * 0.8, canvas.WEBGL)
        popUpCanvas.addClass('popUp');

        createPopUps(canvas)
        canvasLoaded[2] = true;
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(0)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            popUpCanvas.style("visibility", (popUpVisible) ? "visible" : "hidden")
            popUps[currentPopUp].display()
            // popUps[currentPopUp].display()
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        resizedWindow();
        // canvas.setup()
    }

    canvas.mouseClicked = function() {

    }
}




















const controlMenu = canvas => {
    canvas.preload = function() 
    {
        rewindImage = canvas.loadImage("images/backward.png");
        forwindImage = canvas.loadImage("images/forwind.png");
        pauseImage = canvas.loadImage("images/pause.png");
        playImage = canvas.loadImage("images/play.png");
        restartImage = canvas.loadImage("images/restart.png");
        omegaImage = canvas.loadImage("images/rotate.png");
        massImage = canvas.loadImage("images/mass.png");
        helpImage = canvas.loadImage("images/next.svg");
        speedImage = canvas.loadImage("images/speed.png");
        velImage = canvas.loadImage("images/v.png");
        
        regularFont = canvas.loadFont("fonts/Roboto-Regular.ttf")
        boldFont = canvas.loadFont("fonts/Roboto-Bold.ttf")
        thinFont = canvas.loadFont("fonts/Roboto-Light.ttf")

        getCanvasSize()
        createInitialConditions()
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {
        controlsCanvas = canvas.createCanvas(canvasSize[2].x, canvasSize[2].y, canvas.WEBGL)

        controlsCanvas.addClass('controlMenu');
        controlsCanvas.style("top", canvasPos[2].y + "px")
        controlsCanvas.style("left", canvasPos[2].x + "px")
        controlsCanvas.style("borderRadius", "50px")

        buttonPositions = getControlButtonPositions()
        let sliderWidth = getSliderWidth()

        let canvasLength = (landscape) ? innerHeight: innerWidth
        // let sliderOffset = (canvasLength / 2) + 30
        let sliderOffset = 0

        let slider1Pos, slider2Pos;

        if (landscape)
        {
            slider1Pos = new p5.Vector((innerWidth / 2) - 35, buttonPositions[4].y + (canvasLength / 2) - 10)
            slider2Pos = new p5.Vector((innerWidth / 2) - 35, buttonPositions[6].y + (canvasLength / 2) - 10)
        }
        else
        {
            slider1Pos = new p5.Vector(buttonPositions[3].x + (canvasLength / 2) + 10, (innerHeight / 2) - 12)
            slider2Pos = new p5.Vector(buttonPositions[3].x + (canvasLength / 2) + 10, (innerHeight / 2) - 12)
        }

        slider1 = canvas.createSlider(-1, 1, 0, 0.05);
        slider1.position(slider1Pos.x, slider1Pos.y);
        slider1.style('width', getSliderWidth() + 'px');
        slider1.style('zIndex', '999');
        slider1.style('transform', 'rotate(' + sliderAngle + 'deg)')
        

        slider2 = canvas.createSlider(-1, 1, 0, 0.05);
        slider2.position(slider2Pos.x, slider2Pos.y);
        slider2.style('width', getSliderWidth() + "px");
        slider2.style('zIndex', '99999');
        slider2.style('transform', 'rotate(' + sliderAngle + 'deg)')
        createMenu(canvas)
        canvasLoaded[3] = true;
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(255)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            if (canvasLoaded.every(canvasLoad => canvasLoad)) sceneControls()
            displayMenu(canvas)
            sliderInput()
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        resizedWindow();
        // canvas.setup()
    }

    canvas.mouseClicked = function() 
    {
        checkButtonClick(canvas)
    }
}

new p5(controlMenu);





















function resizedWindow()
{
    getCanvasSize()

    // slider1.position(600, ((innerHeight / 2) + 0));
    // slider1.style('width', '80px');
    
    // slider2.position(800, ((innerHeight / 2) + 0));
    // slider2.style('width', '80px');
    console.log("resize");
}

function getCanvasSize()
{
    canvasPos = []
    canvasSize = []

    if (innerWidth >= innerHeight)
    {
        landscape = true;
        canvasSize.push(new p5.Vector(innerWidth / 2, innerHeight))
        canvasSize.push(new p5.Vector(innerWidth / 2, innerHeight))
        canvasSize.push(new p5.Vector(100, innerHeight * 0.9))

        canvasPos.push(new p5.Vector(0, 0))
        canvasPos.push(new p5.Vector(innerWidth / 2, 0))
        canvasPos.push(new p5.Vector((innerWidth / 2)  - 50, innerHeight * 0.05))

        sliderAngle = -90;
    }
    else
    {
        landscape = false;
        canvasSize.push(new p5.Vector(innerWidth, innerHeight / 2))
        canvasSize.push(new p5.Vector(innerWidth, innerHeight / 2))
        canvasSize.push(new p5.Vector(innerWidth * 0.9, 100))

        canvasPos.push(new p5.Vector(0, 0))
        canvasPos.push(new p5.Vector(0, innerHeight / 2))
        canvasPos.push(new p5.Vector(innerWidth * 0.05, (innerHeight / 2) - 50))

        sliderAngle = 0;
    }

    halfCanvas = canvasSize[0].copy().div(2)
    quarterCanvas = canvasSize[0].copy().div(4)
    backGroundImagePosition = new p5.Vector(quarterCanvas.x, quarterCanvas.y * 0.9, 0)
}

























function drawPopUp()
{

}

