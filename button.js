
function displayButtons() // displays all the buttons
{
    buttons.forEach(button => {
        if (button.visible) 
        {
            button.display();
        }
    })
}

class Button extends Particle
{
    constructor(props)
    {
        super(props.canvas, props.myFill, props.myStroke, props.size, props.startingSize, props.scaleFactor, props.pos, props.vel, props.acc, props.startingPos, props.startingVel, props.startingAcc, props.angle, props.omega, props.angularAcc, props.startingAngle, props.startingVel, props.startingAcc, props.referenceFrame, props.offset, props.bounces, props.text, props.font, props.textSize, props.textAlign)

        this.canvas = props.canvas;

        this.hovering = false;
        this.hoverText = props.hoverText;

        this.image = props.image;

        this.onClick = props.onClick;
        this.reset()
    }

    display()
    {
        this.canvas.push()
            this.canvas.translate(this.pos.x, this.pos.y, this.pos.z)
            this.canvas.angleMode(this.canvas.DEGREES)
            this.canvas.fill(this.myFill)
            this.canvas.stroke(this.myStroke)
            this.canvas.rectMode(this.canvas.CENTER)
            this.canvas.imageMode(this.canvas.CENTER)
            this.canvas.ellipseMode(this.canvas.CENTER)
            this.canvas.textAlign(this.canvas.CENTER)
            this.canvas.textAlign(this.textAlign);
            this.canvas.textSize(this.textSize);
            this.canvas.textFont(this.font);

            if (this.showBorder && this.visible) this.canvas.rect(0, 0, this.size.x, this.size.y)

            if (this.image != undefined && this.visible) this.canvas.image(this.image, 0, 0, this.size.x, this.size.y)

            if (this.text != undefined && this.visible) 
            {
                this.canvas.fill(this.myStroke)
                this.canvas.stroke(this.myStroke)
                this.canvas.text(this.text, 0, 0, this.size.x, this.size.y)
            }

        this.canvas.pop()  
    }

    clicked()
    {
        let button = this;
        if (button.visible && button.onClick != null) 
        {
            button.onClick();
        }
        if (button.onClick == null) 
        {
            console.log(button.text, " is unassigned");
        }
    }
  
}


