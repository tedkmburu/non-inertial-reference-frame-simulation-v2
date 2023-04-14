class Shape extends Particle
{
    constructor(props)
    {
        super(props)

        this.shape = props.shape;
        
        this.reset()
    }

    display()
    {
        this.canvas.push()
            this.canvas.ellipseMode(this.canvas.CENTER)
            if (this.showTrail) 
            {
                this.canvas.fill(0)

                this.trail.forEach(dot => {
                    this.canvas.ellipse(dot.x, dot.y, 5, 5)
                }) 

                if (!this.nonInertial)
                {
                    this.canvas.fill(redColor)
                    this.canvas.stroke(redColor)
                    this.canvas.rotate(-leftScenes[2].shapes[0].angle / -57)
                    this.trail2.forEach(dot => {
                    this.canvas.ellipse(dot.x, dot.y, 5, 5)
                    }) 
                }

            }
        this.canvas.pop()

        this.canvas.push()
            prepareCanvas(this)

            switch(this.shape)
            {
                case "ellipse":
                    this.canvas.ellipse(0, 0, this.size.x * this.mass, this.size.y * this.mass)
                break;
                case "rect":
                    this.canvas.rect(this.offset.x, this.offset.y, this.size.x, this.size.y)
                break;
                default:
                   
                    this.canvas.rect(
                        this.offset.x, this.offset.y,
                        this.size.x, this.size.y)
            }
            // let start = this.pos.copy();
            // let end = this.pos.copy().add(this.corForce);
            // let angle = this.vel.heading();
            // let color = "red";
            // let scale = 1;
            // // createArrow(this.pos, this.pos.copy().add(this.corForce))
            // createArrow(start, end, angle, color, scale, this.canvas)
        this.canvas.pop()
    }
}