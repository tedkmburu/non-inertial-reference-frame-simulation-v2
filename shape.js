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

                switch(this.shape)
                {
                    case "ellipse":
                        this.trail.forEach(dot => {
                            this.canvas.ellipse(dot.x, dot.y, 5, 5)
                        }) 

                        if (!this.nonInertial)
                        {
                            this.canvas.fill("red")
                            this.canvas.stroke("red")
                            this.canvas.rotate(leftScenes[2].shapes[0].angle.z / 57)
                            this.trail2.forEach(dot => {
                            this.canvas.ellipse(dot.x, dot.y, 5, 5)
                            }) 
                        }
                        
                    break;

                    case "sphere":
                        this.trail.forEach(dot => {
                            this.canvas.push()
                            this.canvas.translate(dot.x, dot.y, dot.z)
                            this.canvas.sphere(5)
                            this.canvas.pop()
                        }) 
                        if (!this.nonInertial)
                        {
                            // let omega = 1
                            // let angle = 0
                            // // console.log(omega);
                            // let r = 500;
                            // let a = 0
                            

                            // this.trail2.forEach(dot => {
                            //     this.canvas.push()
                            //     this.canvas.translate(0, 0, -500)
                            //     this.canvas.rotateY(a * this.pos.display)
                            //     this.canvas.translate(0, 0, 500)
                            //     // let x = Math.sin(a) * -r;
                            //     // dot.x += x
                            //     this.canvas.translate(dot.x, dot.y, dot.z)
                            //     this.canvas.fill("red")
                            //     this.canvas.stroke("red")
                            //     this.canvas.sphere(5)
                            //     this.canvas.pop()

                            //     a+=0.05
                            // }) 
                        }
                        
                    break;
                    
                    default:
                        console.log("no trail");
                        // prepareCanvas(this)
                        
                        
                        
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