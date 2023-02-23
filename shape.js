class Shape extends Particle
{
    constructor(props)
    {
        super(props)

        this.shape = props.shape;
        this.mass = props.mass || 1;
        
        this.reset()
    }

    display()
    {
        this.canvas.push()
            this.canvas.ellipseMode(this.canvas.CENTER)
            if (this.showTrail) 
            {
                this.canvas.fill(0)

                switch(this.shape)
                {
                    case "ellipse":
                        this.trail.forEach(dot => {
                            this.canvas.ellipse(dot.x, dot.y, 5, 5)
                        }) 
                    break;
                    default:
                        // prepareCanvas(this)
                        
                        this.trail.forEach(dot => {
                            // this.canvas.translate(dot.x, dot.y, dot.z)
                            this.canvas.sphere(10)
                        }) 
                        
                } 
            }
        this.canvas.pop()

        this.canvas.push()
            prepareCanvas(this)

            switch(this.shape)
            {
                case "ellipse":
                    if (this.nonInertial) this.canvas.ellipse(0, 0, this.size.x / 2, this.size.y / 2)
                    else this.canvas.ellipse(0, 0, this.size.x, this.size.y)
                break;
                case "sphere":
                    this.canvas.sphere(this.size.x)
                break;
                case "box":
                    this.canvas.box(this.size.x, this.size.y, this.size.z)
                break;
                default:
                    // this.canvas.rect(this.offset.x, this.offset.y, this.size.x, this.size.y)
                    this.canvas.rect(
                        this.offset.x, this.offset.y,
                        this.size.x, this.size.y
                        )
            }
            let start = this.pos.copy();
            let end = this.pos.copy().add(this.corForce);
            let angle = this.vel.heading();
            let color = "red";
            let scale = 1;
            // createArrow(this.pos, this.pos.copy().add(this.corForce))
            createArrow(start, end, angle, color, scale, this.canvas)
        this.canvas.pop()
    }
}