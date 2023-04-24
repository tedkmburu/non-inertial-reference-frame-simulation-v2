class MyImage extends Particle
{
    constructor(props)
    {
        super(props)

        this.cannon = props.cannon || false; 

        this.reset()
    }

    display()
    {
        this.canvas.push()
            prepareCanvas(this)
            // if (this.cannon) 
            // {
                this.canvas.image(this.image, 0, 0, this.size.x * (this.mass), this.size.y * (this.mass));
            // }
            // else 
            // {
            //     let slider1Value = slider1.value();
            //     let angle = (slider1Value + 1) * 40;
            //     // let newX = 
            //     this.canvas.image(this.image, angle / 2, (angle / 4), this.size.x * (this.mass), this.size.y * (this.mass));
            //     // this.canvas.image(this.image, , 0, this.size.x * (this.mass), this.size.y * (this.mass));
            //     // console.log(this.angle);
            // }

        this.canvas.pop()
    }
}