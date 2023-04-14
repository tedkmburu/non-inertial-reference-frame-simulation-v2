'use strict';

let theFrameRate = 60; 

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

let rewindImage, forwindImage, playImage, pauseImage, restartImage, omegaImage, massImage, helpImage, backImage, nextImage, speedImage, velImage, closeImageMenu, burgerImage;
let closeImage;

let currentScene = 0;
let currentPopUp = 0;

let sceneThreeInitalTrans = new p5.Vector(0, -800)
let sceneThreeInitalRotate = new p5.Vector(90, 0)

let playState = true;
let playBackwards = false;
let popUpVisible = false;

let buttons = []
let buttonPositions = []
let controlMenuButtons = []
let showMenu;
let slider1, slider2;
// let sliderAngle = 0;
let sliderDefaults = []

let regularFont, boldFont, thinFont;

let initialContitions = [];

let redColor = "red";
let blueColor = "blue";
let greenColor = "green";
let darkBlueColor = "#546E7A";
let lightBlueColor = "#607D8B"

function displayGrid(canvas)
{
    // console.log("asdf");
    let radius = 2;
    let height = 4800;
    
    canvas.push()
    canvas.fill(255/2)
    canvas.stroke(255/2)
    canvas.cylinder(radius, height, 24)
    canvas.rotateX(90)
    canvas.cylinder(radius, height, 24)
    canvas.rotateZ(90)
    canvas.cylinder(radius, height, 24)

    canvas.pop()
}


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

        leftCanvas = canvas.createCanvas(canvasSize[0].x, canvasSize[0].y)
        leftCanvas.style("top", canvasPos[0].y + "px")
        leftCanvas.style("left", canvasPos[0].x + "px")

        createLeftScenes(canvas)

        canvasLoaded[0] = true;
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(0)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can

        if (currentScene == 2)
        {
            canvas.translate((innerWidth / 2) - 150, innerHeight / 4)
        } 
        
        canvas.push()
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
        rightCanvas = canvas.createCanvas(canvasSize[1].x, canvasSize[1].y)
        rightCanvas.style("top", canvasPos[1].y + "px")
        rightCanvas.style("left", canvasPos[1].x + "px")

        if (landscape) rightCanvas.addClass('right');
        else rightCanvas.addClass('bottom');

        createRightScenes(canvas)
        
        // rightScenes[2].shapes[2].vel = leftScenes[2].shapes[2].pos.copy().add(leftScenes[2].shapes[2].vel)

        canvasLoaded[1] = true;
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        canvas.background(0)
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        if (currentScene == 2)
        {
            canvas.translate((innerWidth / 2) - 150, innerHeight / 4)
        } 

        canvas.push()
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
        popUpCanvas = canvas.createCanvas(innerWidth * 0.8, innerHeight * 0.8)
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
        helpImage = canvas.loadImage("images/info.png");
        nextImage = canvas.loadImage("images/next.svg");
        backImage = canvas.loadImage("images/back.svg");
        speedImage = canvas.loadImage("images/speed.png");
        burgerImage = canvas.loadImage("images/burger.png");
        closeImageMenu = canvas.loadImage("images/close.png");
        velImage = canvas.loadImage("images/v.png");
        
        regularFont = canvas.loadFont("fonts/Roboto-Regular.ttf")
        boldFont = canvas.loadFont("fonts/Roboto-Bold.ttf")
        thinFont = canvas.loadFont("fonts/Roboto-Light.ttf")

        getCanvasSize()
        createInitialConditions()
    }
    canvas.setup = function()  // This function only runs once when the page first loads. 
    {
        controlsCanvas = canvas.createCanvas(canvasSize[2].copy().x, canvasSize[2].copy().y)
        controlsCanvas.style("top", canvasPos[2].copy().y + "px")
        controlsCanvas.style("left", canvasPos[2].copy().x + "px")
        controlsCanvas.addClass('controlMenu');

        buttonPositions = getControlButtonPositions()
        let sliderWidth = 180

        if (landscape) sliderWidth *= 0.8

        let canvasLength = (landscape) ? innerHeight: innerWidth

        let slider1Pos, slider2Pos;

        if (landscape)
        {
            slider1Pos = new p5.Vector(buttonPositions[5].copy().x + 530, buttonPositions[5].copy().y + (innerHeight * 0.9) - 30)
            slider2Pos = new p5.Vector(buttonPositions[6].copy().x + 530, buttonPositions[6].copy().y + (innerHeight * 0.9) - 30)
        }
        else
        {
            // slider1Pos = new p5.Vector(buttonPositions[5].copy().x + 410, buttonPositions[3].copy().y + 40)
            // slider2Pos = new p5.Vector(buttonPositions[5].copy().x + 410, buttonPositions[4].copy().y + 75)

            slider1Pos = new p5.Vector(buttonPositions[5].copy().x + 650, buttonPositions[3].copy().y + 40)
            slider2Pos = new p5.Vector(buttonPositions[5].copy().x + 650, buttonPositions[4].copy().y + 75)
        }

        slider1 = canvas.createSlider(-1, 1, 0, 0.05);
        slider1.position(slider1Pos.x, slider1Pos.y);
        slider1.style('width', sliderWidth + 'px');
        slider1.style('zIndex', '999');
        // slider1.style('transform', 'rotate(' + sliderAngle + 'deg)')
        

        slider2 = canvas.createSlider(-1, 1, 0, 0.05);
        slider2.position(slider2Pos.x, slider2Pos.y);
        slider2.style('width', sliderWidth + "px");
        slider2.style('zIndex', '99999');
        // slider2.style('transform', 'rotate(' + sliderAngle + 'deg)')
        createMenu(canvas)
        canvasLoaded[3] = true;
        showMenu = true;
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        
        if (showMenu) canvas.background(darkBlueColor)
        else canvas.clear(); // clears the canvas so that it's transparent
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            if (canvasLoaded.every(canvasLoad => canvasLoad)) 
            {
                sceneControls()

                controlMenuButtons[currentScene].forEach((button, i) => {
                    if (i != 8) button.visible = showMenu;
                })
            }
            // console.log("asdf");
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
        canvasSize.push(new p5.Vector(innerWidth, (innerHeight / 2) - 75))
        canvasSize.push(new p5.Vector(innerWidth, (innerHeight / 2) - 75))
        canvasSize.push(new p5.Vector(innerWidth, 300))

        canvasPos.push(new p5.Vector(0, 0))
        canvasPos.push(new p5.Vector(0, (innerHeight / 2) - 75))
        canvasPos.push(new p5.Vector(0, innerHeight - 200))

        // sliderAngle = -90;
    }
    else
    {
        landscape = false;
        canvasSize.push(new p5.Vector(innerWidth, innerHeight / 2))
        canvasSize.push(new p5.Vector(innerWidth, innerHeight / 2))
        canvasSize.push(new p5.Vector(300, innerHeight))

        canvasPos.push(new p5.Vector(0, 0))
        canvasPos.push(new p5.Vector(0, innerHeight / 2))
        canvasPos.push(new p5.Vector(innerWidth - 300, 0))

        // sliderAngle = 0;
    }

    halfCanvas = canvasSize[0].copy().div(2)
    quarterCanvas = canvasSize[0].copy().div(4)
    backGroundImagePosition = new p5.Vector(halfCanvas.x, halfCanvas.y + 200)
}

























function drawPopUp()
{

}

