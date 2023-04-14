class MyImage extends Particle
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
            this.canvas.image(this.image, 0, 0, this.size.x * (this.mass), this.size.y * (this.mass));
        this.canvas.pop()
    }
}