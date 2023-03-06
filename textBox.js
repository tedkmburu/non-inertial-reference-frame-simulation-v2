class TextBox extends Particle
{
    constructor(props)
    {
        super(props)

        this.reset()
    }

    display()
    {
        this.canvas.push()
            prepareCanvas(this)

            if (this.showBorder) this.canvas.rect(0, 0, this.size.x, this.size.y)
            this.canvas.text(this.text, 0, 0, this.size.x, this.size.y)
            
        this.canvas.pop()
    }
}