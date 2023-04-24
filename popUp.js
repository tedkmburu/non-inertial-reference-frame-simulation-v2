function createPopUps(canvas)
{
    // 2693 × 2265
    //  current: 1024
    let popUpImageSize = canvasSize[3].copy()
    let popUpImagePosOffset = (innerWidth < innerHeight) ? 20 : 100;
    let popUpImagePos = new p5.Vector((innerWidth / 2) - popUpImagePosOffset, (innerHeight / 3))
    if (innerWidth >= innerHeight) 
    {
        // landscape
        
        popUpImageSize.y = canvasSize[3].copy().y * 0.8
        popUpImageSize.x = ((2693/2265) * popUpImageSize.y)
    }
    else 
    {
        popUpImageSize.x = canvasSize[3].copy().x * 1
        popUpImageSize.y = ((2265/2693) * popUpImageSize.x)
    }

    // console.log(popUpImageSize);

    let popUpButtonSize = new p5.Vector(100, 50);
    let tempPopUp = new PopUp({
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
            new MyImage({
                image: popUp4Image,
                pos: popUpImagePos,
                size: popUpImageSize,
                scaleFactor: 1,
                canvas: canvas,
            }),
            new MyImage({
                image: popUp5Image,
                pos: popUpImagePos,
                size: popUpImageSize,
                scaleFactor: 1,
                canvas: canvas,
            }),
            new MyImage({
                image: popUp6Image,
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
                pos: new p5.Vector((canvasSize[3].x / 2) - 55, innerHeight * 0.8),
                size: popUpButtonSize,
                fill: "rgba(84, 110, 122, 0.75)",
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
                pos: new p5.Vector((canvasSize[3].x / 2) + 55, innerHeight * 0.8),
                size: popUpButtonSize,
                fill: "rgba(84, 110, 122, 0.75)",
                showBorder: true,
                showText: true,
                textSize: 24,
                canvas: canvas,
                onClick: () => {
                    if (currentPopUp < 5) currentPopUp++;
                    else currentPopUp = 0;
                }
            }),
            new Button({
                text: "Close", 
                image: closeImage,
                pos: new p5.Vector((canvasSize[3].x - 80), 60),
                size: popUpButtonSize,
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
    })

    popUps.push(tempPopUp)
    popUps.push(tempPopUp)
    popUps.push(tempPopUp)
}

class PopUp
{
    constructor(props)
    {
        this.textBoxes = props.textBoxes || []
        this.buttons = props.buttons || []
        this.images = props.images || []
        this.shapes = props.shapes || []
        
        this.fill = props.fill || "white";
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

        popUps[currentScene].buttons[0].visible = (currentPopUp != 0)
        popUps[currentScene].buttons[1].visible = (currentPopUp != 5)

        this.textBoxes.forEach(textBox => {
            textBox.display()
        }) 

        this.canvas.pop()
    }
}


