function createPopUps(canvas)
{
    popUps.push(new PopUp({
        canvas: canvas,
        textBoxes: [
            new TextBox({
                text: "The same physical situation can look different depending on the reference frame it is viewed from",
                fill: "black",
                size: new p5.Vector(innerWidth * 0.5, innerHeight * 0.5, 0),
                textSize: 30,
                canvas: canvas,
            })
        ],
        buttons: [
            new Button({
                text: "Close", 
                image: closeImage,
                pos: new p5.Vector(250, -250),
                size: new p5.Vector(125, 25),
                fill: "rgba(255, 0, 0, 1)",
                showBorder: true,
                showText: true,
                textSize: 24,
                canvas: canvas,
                onClick: () => {
                    popUpVisible = false;
                }
            }), 
            new Button({
                text: "Next", 
                image: closeImage,
                pos: new p5.Vector(0, 0),
                size: new p5.Vector(125, 25),
                fill: "#5BBCC0",
                showBorder: true,
                showText: true,
                textSize: 24,
                canvas: canvas,
                onClick: () => {
                    currentScene++;
                    popUpVisible = false;
                }
            }), 
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
        
        this.fill = props.fill || "rgba(255, 255, 255, 0.97)";
        this.stroke = props.stroke || "black";
        this.canvas = props.canvas;
    }

    display()
    {
        this.canvas.push()
        this.canvas.fill(this.fill)
        this.canvas.stroke(this.stroke)

        this.canvas.background(this.fill)

        this.images.forEach(image => {
            image.display()
        });

        this.shapes.forEach(shape => {
            shape.display()
        });

        this.textBoxes.forEach(textBox => {
            textBox.display()
        }) 
        
        this.buttons.forEach(button => {
            if (button.visible) button.display()
        }) 

        this.canvas.pop()
    }
}


