
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

        this.onClick = props.onClick;
        this.reset()
    }

    display()
    {
        this.canvas.push()

            prepareCanvas(this)

            if (this.showBorder && this.visible && !this.showText) this.canvas.rect(0, 0, this.size.x, this.size.y)

            

            if (this.text != undefined && this.visible && this.image == undefined && !this.showText) 
            {
                this.canvas.fill(this.stroke)
                this.canvas.stroke(this.stroke)
                let imageOffset = new p5.Vector(0, 10)
                this.canvas.text(this.text, 0, 0, this.size.x + imageOffset.x, this.size.y + imageOffset.y)
            }

            if (this.text == "no text")
            {
                this.canvas.rect(35, 0, this.size.x, this.size.y + 20)
                this.canvas.fill(darkBlueColor)
                this.canvas.stroke(this.stroke)
                this.canvas.image(this.image, 35, 0, this.size.y * 0.9, this.size.y * 0.9)
            } 
            else if (this.text != undefined && this.showText && this.visible && this.showBorder)
            {
                this.canvas.rect(35, 0, this.size.x, this.size.y + 20)
                this.canvas.fill(darkBlueColor)
                this.canvas.stroke(this.stroke)

                let buttonGroup1 = (this.text != "Omega" && this.text != "Mass")
                let imageOffset = new p5.Vector(220, 30)
                if (buttonGroup1) this.canvas.image(this.image, -20, 0, 40, 40)
                else this.canvas.image(this.image, -15, -20, 40, 40)
                
                this.canvas.textAlign(this.canvas.LEFT)
                this.canvas.fill(0)
                this.canvas.noStroke()
                this.canvas.textSize(24)
                if (buttonGroup1) this.canvas.text(this.text, imageOffset.x, imageOffset.y, this.size.x + imageOffset.x, this.size.y + imageOffset.y)
                else this.canvas.text(this.text, imageOffset.x, imageOffset.y + 15, this.size.x + imageOffset.x, this.size.y + imageOffset.y)
                
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


