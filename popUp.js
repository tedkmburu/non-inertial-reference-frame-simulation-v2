function createPopUps(canvas)
{
    // 2693 × 2265
    //  current: 1024
    let popUpImageSize = canvasSize[3].copy()
    let popUpImagePos = new p5.Vector((innerWidth / 2) - 100, (innerHeight / 3))
    if (innerWidth >= innerHeight) 
    {
        // landscape
        
        popUpImageSize.y = canvasSize[3].y * 0.9
        popUpImageSize.x = ((2693/2265) * popUpImageSize.y)
    }
    else 
    {
        popUpImageSize.x = canvasSize[3].x * 0.9
        popUpImageSize.y = ((2265/2693) * popUpImageSize.x)
    }

    // console.log(popUpImageSize);

    popUps.push(new PopUp({
        canvas: canvas,
        images: [
            new MyImage({
                image: popUp1Image,
                pos: popUpImagePos,
                size: popUpImageSize,
                scaleFactor: 1,
                canvas: canvas,
            }),
            new MyImage({
                image: popUp2Image,
                pos: popUpImagePos,
                size: popUpImageSize,
                scaleFactor: 1,
                canvas: canvas,
            }),
            new MyImage({
                image: popUp3Image,
                pos: popUpImagePos,
                size: popUpImageSize,
                scaleFactor: 1,
                canvas: canvas,
            }),
        ],
        buttons: [
            new Button({
                text: "Back", 
                image: closeImage,
                pos: new p5.Vector((canvasSize[3].x / 2) - 100, innerHeight * 0.7),
                size: new p5.Vector(200, 50),
                fill: darkBlueColor,
                showBorder: true,
                showText: true,
                textSize: 24,
                canvas: canvas,
                onClick: () => {
                    if (currentPopUp > 0) currentPopUp--;
                    else currentPopUp = 0;
                }
            }),
            new Button({
                text: "Next", 
                image: closeImage,
                pos: new p5.Vector((canvasSize[3].x / 2) + 100, innerHeight * 0.7),
                size: new p5.Vector(200, 50),
                fill: darkBlueColor,
                showBorder: true,
                showText: true,
                textSize: 24,
                canvas: canvas,
                onClick: () => {
                    if (currentPopUp < 2) currentPopUp++;
                    else currentPopUp = 0;
                }
            }),
            new Button({
                text: "Close", 
                image: closeImage,
                pos: new p5.Vector((canvasSize[3].x - 160), 60),
                size: new p5.Vector(200, 50),
                fill: "rgb(200, 0, 0)",
                showBorder: true,
                showText: true,
                textSize: 24,
                canvas: canvas,
                onClick: () => {
                    popUpVisible = false; 
                }
            })
            
            // new Button({
            //     text: "Next", 
            //     pos: new p5.Vector(-400, 0),
            //     canvas: canvas,
            // })
        ]
    }))
}

class PopUp
{
    constructor(props)
    {
        this.textBoxes = props.textBoxes || []
        this.buttons = props.buttons || []
        this.images = props.images || []
        this.shapes = props.shapes || []
        
        this.fill = props.fill || lightBlueColor;
        this.stroke = props.stroke || "black";
        this.canvas = props.canvas;
    }

    display()
    {
        this.canvas.push()
        this.canvas.fill(this.fill)
        this.canvas.stroke(this.stroke)

        this.canvas.background(this.fill)

        this.images[currentPopUp].display();

        this.shapes.forEach(shape => {
            shape.display()
        });

        
        this.buttons.forEach(button => {
            if (button.visible) button.display()
        }) 

        this.textBoxes.forEach(textBox => {
            textBox.display()
        }) 

        this.canvas.pop()
    }
}


