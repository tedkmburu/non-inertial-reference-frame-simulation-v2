const theFrameRate = 60; 

let landscape,
canvasSize, 
canvas1Pos, 
canvas2Pos;

let popUpVisible = false;

let scenes = []
let truckImage; 

let currentScene = 0;

let playState = true

function preload()
{
    truckImage = loadImage('images/truck.png'); 
}

function setup()
{
    createCanvas(innerWidth, innerHeight)

    if (innerWidth >= innerHeight)
    {
        landscape = true;
        canvasSize = createVector(innerWidth / 2, innerHeight)
        canvas1Pos = createVector(0, 0)
        canvas2Pos = createVector(innerWidth / 2, 0)
    }
    else
    {
        landscape = false;
        canvasSize = createVector(innerWidth, innerHeight / 2)
        canvas1Pos = createVector(0, 0)
        canvas2Pos = createVector(0, innerHeight / 2)
    }

    createScenes()
}

function draw()
{
    background("red")

    drawLeftCanvas()
    drawRightCanvas()
    drawDivider()

    if (popUpVisible) drawPopUp();
}

function drawLeftCanvas()
{
    push()
        fill(0)
        noStroke()
        rect(0, 0, canvasSize.x, canvasSize.y)

        scenes[currentScene].left.display()
    pop()
}

function drawRightCanvas()
{
    push()
        fill(0)
        noStroke()
        translate(canvas2Pos.x, canvas2Pos.y)
        rect(0, 0, canvasSize.x, canvasSize.y)

        scenes[currentScene].right.display()
    pop()
}

function drawDivider()
{
    push()
        stroke(255)
        if (landscape) line(innerWidth / 2, 0, innerWidth / 2, innerHeight)
        else line(0, innerHeight / 2, innerWidth, innerHeight / 2)
    pop()
}

function drawPopUp()
{

}