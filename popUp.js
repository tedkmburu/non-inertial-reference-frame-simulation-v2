function createPopUps(canvas)
{
    popUps.push(new PopUp({
        canvas: canvas,
        textBoxes: [
            new TextBox({
                text: "asdf",
                fill: "black",
                canvas: canvas,
            })
        ],
        buttons: [
            new Button({
                text: "Close", 
                image: closeImage,
                pos: new p5.Vector(400, 0),
                size: new p5.Vector(25, 25),
                canvas: canvas,
                onClick: () => {
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
        
        this.fill = props.fill || "rgba(255, 255, 255, 0.95)";
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


