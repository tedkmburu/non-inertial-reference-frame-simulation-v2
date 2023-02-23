
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

        this.onClick = props.onClick;
        this.reset()
    }

    display()
    {
        this.canvas.push()

            prepareCanvas(this)

            if (this.showBorder && this.visible) this.canvas.rect(0, 0, this.size.x, this.size.y)

            if (this.image != undefined && this.visible) this.canvas.image(this.image, 0, 0, this.size.x, this.size.y)

            if (this.text != undefined && this.visible) 
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


