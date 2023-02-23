function createPopUps(canvas)
{
    popUps.push(new PopUp({
        canvas: canvas,
        textBoxes: [
            new TextBox({
                text: "asdf",
                canvas: canvas,
            })
        ],
        buttons: [
            // new Button({
            //     text: "x", 
            //     pos: new p5.Vector(400, 0),
            //     canvas: canvas,
            // }), 
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


