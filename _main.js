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

let popUp1Image, popUp2Image, popUp3Image, popUpBackImage, popUpNextImage;

let frameRateImage, angleImage, rewindImage, forwindImage, playImage, pauseImage, restartImage, omegaImage, massImage, helpImage, backImage, nextImage, speedImage, velImage, closeImageMenu, burgerImage;
let closeImage;

let currentScene = 0;
let currentPopUp = 0;

let sceneThreeInitalTrans = new p5.Vector(0, -800)
let sceneThreeInitalRotate = new p5.Vector(90, 0)

let playState = true;
let playBackwards = false;
let popUpVisible = true;

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

let buttonsDisplacement = 0

const cameraLineThickness = 5;
const cameraLineScale = 0.125;

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
        // resizedWindow()

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
        
        if (currentScene == 2) canvas.translate((innerWidth / 2) - 150, innerHeight / 4)

        canvas.push()
            leftScenes[currentScene].display()
        canvas.pop()

        canvas.push()
            let menuOffset = (showMenu) ? (-canvasSize[2].x / 2) : 0;
            canvas.textSize(24)
            canvas.textAlign(canvas.CENTER)
            canvas.text("stationary frame", menuOffset, -(canvasSize[0].y / 2) + 30)
        canvas.pop()

        if (currentScene == 2) canvas.translate(-(innerWidth / 2) + 150, -(innerHeight / 4))

        canvas.push()
            displayCameraLines(canvas)
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        
        

        createLeftScenes(canvas)
        resizedWindow();
        leftCanvas.style("top", canvasPos[0].y + "px")
        leftCanvas.style("left", canvasPos[0].x + "px")
        canvas.resizeCanvas(canvasSize[0].x, canvasSize[0].y)
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
        
        if (currentScene == 2) canvas.translate((innerWidth / 2) - 150, innerHeight / 4)

        canvas.push()
            rightScenes[currentScene].display()
        canvas.pop()

        canvas.push()
            let menuOffset = (showMenu) ? (-canvasSize[2].x / 2) : 0;
            canvas.textSize(24)
            canvas.textAlign(canvas.CENTER)
            canvas.text("non-inertial frame", menuOffset, -(canvasSize[0].y / 2) + 30)
        canvas.pop()

        if (currentScene == 2) canvas.translate(-(innerWidth / 2) + 150, -(innerHeight / 4))

        canvas.push()
            displayCameraLines(canvas)
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        createRightScenes(canvas)
        resizedWindow();
        rightCanvas.style("top", canvasPos[1].y + "px")
        rightCanvas.style("left", canvasPos[1].x + "px")
        canvas.resizeCanvas(canvasSize[1].x, canvasSize[1].y)
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

        // popUpRefFrameImage = canvas.loadImage("/popups/refFrame.png");
        // refFrameAddVelImage = canvas.loadImage("/popups/addVel.png");
        // cameraImage = canvas.loadImage("/popups/camera.png");
        // rotatePopupImage = canvas.loadImage("/popups/rotate.png");

        popUp1Image = canvas.loadImage("/popups/1.png");
        popUp2Image = canvas.loadImage("/popups/2.png");
        popUp3Image = canvas.loadImage("/popups/3.png");

        

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
        canvas.background("red")
        // #607D8B
        canvas.frameRate(theFrameRate);  // the simulation will try limit itself to 60 frames per second. If a device can't maintain 60 fps, it will run at whatever it can
        
        canvas.push()
            popUpCanvas.style("visibility", (popUpVisible) ? "visible" : "hidden")
            popUps[currentScene].display()
            // popUps[currentPopUp].display()
        canvas.pop()
    }
  
    canvas.windowResized = function() // inbuilt p5 function. runs everytime the window is resized
    {
        canvas.resizeCanvas(canvasSize[2].x, canvasSize[2].y)
        resizedWindow();
        // canvas.setup()
    }

    canvas.mouseClicked = function() 
    {
        checkButtonClick(canvas)
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
        angleImage = canvas.loadImage("images/angle.png")
        frameRateImage = canvas.loadImage("images/fps.png")
        
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

        slider1 = canvas.createSlider(-1, 1, 0, 0.05);
        slider2 = canvas.createSlider(-1, 1, 0, 0.05);

        slider1.style('width', sliderWidth + 'px');
        slider1.style('zIndex', '99999');
        slider2.style('width', sliderWidth + "px");
        slider2.style('zIndex', '99999');
        slider1.style('position', 'fixed');
        slider2.style('position', 'fixed');

        slider1.input(() => {
            if (currentScene == 1 && !playState)
            {
                leftScenes[currentScene].reset()
                rightScenes[currentScene].reset()
            }
        })

        if (landscape)
        {
            slider1Pos = new p5.Vector(610, 60)
            slider2Pos = new p5.Vector(800, 60)

            slider1.style('bottom', slider1Pos.y + 'px');
            slider1.style('left', slider1Pos.x + 'px');

            slider2.style('bottom', slider2Pos.y + 'px');
            slider2.style('left', slider2Pos.x + 'px');
        }
        else
        {
            // slider1Pos = new p5.Vector(buttonPositions[5].copy().x + 410, buttonPositions[3].copy().y + 40)
            // slider2Pos = new p5.Vector(buttonPositions[5].copy().x + 410, buttonPositions[4].copy().y + 75)

            
            slider1Pos = new p5.Vector(50, 485)
            slider2Pos = new p5.Vector(50, 625)

            slider1.style('top', slider1Pos.y + 'px');
            slider1.style('right', slider1Pos.x + 'px');

            slider2.style('top', slider2Pos.y + 'px');
            slider2.style('right', slider2Pos.x + 'px');
        }

        createMenu(canvas)
        canvasLoaded[3] = true;
        showMenu = true;
    }
  
    canvas.draw = function() // this function runs every frame. Everything on the left canvas starts here.
    {  
        slider1.style('visibility', (showMenu) ? "visible" : "hidden");
        slider2.style('visibility', (showMenu) ? "visible" : "hidden");

        if (showMenu) 
        {
            canvas.background(darkBlueColor)
            controlsCanvas.style('box-shadow', '0 3px 10px rgb(0 0 0 / 0.2)')
            // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }
        else 
        {
            canvas.clear(); // clears the canvas so that it's transparent
            controlsCanvas.style('box-shadow', 'none')
        }
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

        controlsCanvas.style("top", canvasPos[2].y + "px")
        controlsCanvas.style("left", canvasPos[2].x + "px")

        canvas.resizeCanvas(canvasSize[2].x, canvasSize[2].y)

        // canvas.setup()
    }

    canvas.mouseClicked = function() 
    {
        checkButtonClick(canvas)
    }

    canvas.mouseWheel = (event) => {
        if (event.delta > 0) buttonsDisplacement-=8
        else buttonsDisplacement+=8

        if (buttonsDisplacement > 0) buttonsDisplacement = 0

        let slider1Pos, slider2Pos;
        if (!popUpVisible)
        {
            slider1Pos = new p5.Vector(50, 485 + buttonsDisplacement)
            slider2Pos = new p5.Vector(50, 625 + buttonsDisplacement)

            slider1.style('top', slider1Pos.y + 'px');
            slider1.style('right', slider1Pos.x + 'px');

            slider2.style('top', slider2Pos.y + 'px');
            slider2.style('right', slider2Pos.x + 'px');
        }

        

        
    }
}

new p5(controlMenu);



















function displayCameraLines(canvas)
{
    let menuOffset = (showMenu) ? -300 : 0;
    canvas.push()
        canvas.stroke(255)
        canvas.strokeWeight(4)

        canvas.rect(18, 18, innerWidth * cameraLineScale, cameraLineThickness)
        canvas.rect(18, 18, cameraLineThickness, innerHeight * cameraLineScale)

        canvas.rect(canvasSize[0].x + menuOffset - 18 - cameraLineThickness, canvasSize[0].y - 18 - cameraLineThickness, -innerWidth * cameraLineScale, cameraLineThickness)
        canvas.rect(canvasSize[0].x + menuOffset - 18 - cameraLineThickness - 5, canvasSize[0].y - 18 - cameraLineThickness, cameraLineThickness, -innerHeight * cameraLineScale)
        
        canvas.rect(18, canvasSize[0].y - 18, innerWidth * cameraLineScale, cameraLineThickness)
        canvas.rect(18, canvasSize[0].y - 18, cameraLineThickness, -innerHeight * cameraLineScale)

        canvas.rect(canvasSize[0].x + menuOffset - 18 - cameraLineThickness, 18, -innerWidth * cameraLineScale, cameraLineThickness)
        canvas.rect(canvasSize[0].x + menuOffset - 18 - cameraLineThickness, 18, cameraLineThickness, innerHeight * cameraLineScale)
    canvas.pop()
}

function resizedWindow()
{
    getCanvasSize()
}

function getCanvasSize()
{
    canvasPos = []
    canvasSize = []

    landscape = false;

    // if (innerWidth >= innerHeight)
    // if (false)
    // {
    //     landscape = true;
    //     canvasSize.push(new p5.Vector(innerWidth, (innerHeight / 2) - 100))
    //     canvasSize.push(new p5.Vector(innerWidth, (innerHeight / 2) - 100))
    //     canvasSize.push(new p5.Vector(innerWidth, 200))

    //     canvasPos.push(new p5.Vector(0, 0))
    //     canvasPos.push(new p5.Vector(0, (innerHeight / 2) - 100))
    //     canvasPos.push(new p5.Vector(0, innerHeight - 200))

    //     // sliderAngle = -90;
    // }
    // else
    // {
        landscape = false;
        canvasSize.push(new p5.Vector(innerWidth, innerHeight / 2))
        canvasSize.push(new p5.Vector(innerWidth, innerHeight / 2))
        canvasSize.push(new p5.Vector(300, innerHeight))
        canvasSize.push(new p5.Vector(innerWidth * 0.8, innerHeight * 0.8))

        canvasPos.push(new p5.Vector(0, 0))
        canvasPos.push(new p5.Vector(0, innerHeight / 2))
        canvasPos.push(new p5.Vector(innerWidth - 300, 0))

        // sliderAngle = 0;
    // }

    halfCanvas = canvasSize[0].copy().div(2)
    quarterCanvas = canvasSize[0].copy().div(4)
    backGroundImagePosition = new p5.Vector(halfCanvas.x, halfCanvas.y + 200)
}

























function drawPopUp()
{

}

