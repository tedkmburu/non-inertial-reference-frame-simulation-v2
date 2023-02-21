
function displayButtons() // displays all the buttons
{
    buttons.forEach(button => {
        if (button.visible) 
        {
            button.display();
        }
    })
}

class Button
{
    constructor(props)
    {
        this.canvas = props.canvas;
        this.pos = props.pos || new p5.Vector(0, 0);
        this.startingPos = props.pos || this.pos.copy();
        this.size = props.size || new p5.Vector(300, 300);

        this.visible = props.visible || true;
        this.hovering = false;
        this.hoverText = props.hoverText;

        this.text = props.text;
        this.image = props.image;
        this.imageSize = props.size || this.size.copy();

        this.fill = props.fill || "white";
        this.stroke = props.stroke || "black";
        this.showBorder = props.showBorder || true;

        this.onClick = props.onClick;
        this.reset()
    }

    reset()
    {
        this.pos = this.startingPos.copy()

        this.scale()
    }

    scale()
    {
        this.size.mult(scale).mult(this.scaleFactor)
        this.imageSize.mult(scale).mult(this.scaleFactor)
        this.pos.mult(scale)
    }

    display()
    {
        this.canvas.push()
            this.canvas.translate(this.pos.x, this.pos.y)
            this.canvas.angleMode(this.canvas.DEGREES)
            this.canvas.rotate(this.angle)
            this.canvas.fill(this.fill)
            this.canvas.stroke(this.stroke)
            this.canvas.rectMode(this.canvas.CENTER)
            this.canvas.imageMode(this.canvas.CENTER)
            this.canvas.ellipseMode(this.canvas.CENTER)
            this.canvas.textAlign(this.canvas.CENTER)

            if (this.showBorder) this.canvas.rect(0, 0, this.size.x, this.size.y)

            if (this.image != undefined) this.canvas.image(this.image, 0, 0, this.imageSize.x, this.imageSize.y)

            if (this.text != undefined) 
            {
                this.canvas.fill(this.stroke)
                this.canvas.stroke(this.stroke)
                this.canvas.text(this.text, 0, 0, this.size.x, this.size.y)
            }

        this.canvas.pop()  
    }

    clicked()
    {
        let button = this;
        if (button.visible) 
        {
            button.onClick();
        }
    }
  
}


