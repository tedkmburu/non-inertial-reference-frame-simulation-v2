
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
        super(props)

        this.hovering = false;
        this.hoverText = props.hoverText;
        this.showText = props.showText || true;  

        this.onClick = props.onClick;
        this.reset()
    }

    display()
    {
        this.canvas.push()

            prepareCanvas(this)

            if (this.showBorder && this.visible && !this.showText) this.canvas.rect(0, 0, this.size.x, this.size.y)

            if (this.image != undefined && this.visible && !this.showText) this.canvas.image(this.image, 0, 0, this.size.y, this.size.y)

            if (this.text != undefined && this.visible && this.image == undefined && !this.showText) 
            {
                this.canvas.fill(this.stroke)
                this.canvas.stroke(this.stroke)
                let imageOffset = new p5.Vector(0, 10)
                this.canvas.text(this.text, 0, 0, this.size.x + imageOffset.x, this.size.y + imageOffset.y)
            }

            if (this.text != undefined && this.showText && this.visible && this.showBorder)
            {
                this.canvas.rect(35, 0, this.size.x, this.size.y + 20)
                this.canvas.fill(darkBlueColor)
                this.canvas.stroke(this.stroke)

                let imageOffset = new p5.Vector(210, 65)
                this.canvas.image(this.image, -30, 0, this.size.y, this.size.y)
                this.canvas.textSize(24)
                this.canvas.textAlign(this.canvas.LEFT)
                this.canvas.fill(0)
                this.canvas.text(this.text, imageOffset.x, imageOffset.y, this.size.x + imageOffset.x, this.size.y + imageOffset.y)
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

    hover()
    {
        // this.canvas.push()
        // prepareCanvas(this)
        // if (this.text != undefined && this.visible) 
        // {
        //     this.canvas.fill(this.stroke)
        //     this.canvas.stroke(this.stroke)
        //     let imageOffset = new p5.Vector(0, 10, 0)
        //     this.canvas.text(this.text, 0, 0, this.size.x + imageOffset.x, this.size.y + imageOffset.y)
        // }
        // this.canvas.pop()
    }
  
}


