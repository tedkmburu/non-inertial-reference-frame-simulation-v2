class Shape
{
    constructor(props)
    {
        this.canvas = props.canvas;
        this.fill = props.fill || "red";
        this.stroke = props.stroke || "green";

        this.shape = props.shape;
        this.size = props.size || new p5.Vector(10, 10);
        this.startingSize = props.size || new p5.Vector(10, 10);

        this.pos = props.pos || new p5.Vector(0, 0, 0);
        this.vel = props.vel || new p5.Vector(0, 0, 0);
        this.acc = props.acc || new p5.Vector(0, 0, 0);

        this.startingPos = props.pos || new p5.Vector(0, 0, 0);
        this.startingVel = props.vel || new p5.Vector(0, 0, 0);
        this.startingAcc = props.acc || new p5.Vector(0, 0, 0);

        this.angle = props.angle || new p5.Vector(0, 0, 0);
        this.omega = props.omega || new p5.Vector(0, 0, 0);
        this.alpha = props.alpha || new p5.Vector(0, 0, 0);

        this.startingAngle = props.angle || new p5.Vector(0, 0, 0);
        this.startingOmega = props.omega || new p5.Vector(0, 0, 0);
        this.startingAlpha = props.alpha || new p5.Vector(0, 0, 0);

        this.referenceFrame = new p5.Vector(0, 0, 0)

        this.bounces = 0;
        this.showTrail = true;
        this.trail = []
        this.offset = props.offset || new p5.Vector(0, 0, 0)
        this.startingOffset = props.offset || new p5.Vector(0, 0, 0)

        this.reset()
    }

    reset()
    {
        this.offset = this.startingOffset.copy()

        this.size = this.startingSize.copy()
        
        this.pos = this.startingPos.copy().add(this.offset)
        this.vel = this.startingVel.copy()
        this.acc = this.startingAcc.copy()

        this.angle = this.startingAngle.copy()
        this.omega = this.startingOmega.copy()
        this.alpha = this.startingAlpha.copy()

        this.bounces = 0;
        this.trail = []

        this.scale()
    }

    scale()
    {
        this.size.mult(scale).mult(this.scaleFactor)
        this.pos.mult(scale)
        this.vel.mult(scale)
        this.acc.mult(scale)
    }

    move()
    {
        this.vel.add(this.acc).add(this.referenceFrame.acc);
        this.pos.add(this.vel).add(this.referenceFrame.vel);

        this.omega += (this.alpha + this.referenceFrame.alpha);
        this.angle += (this.omega + this.referenceFrame.omega);

        if (this.canvas.frameCount % 5 == 0) this.trail.push(this.pos.copy().add(this.offset))
    }

    display()
    {
        this.canvas.push()
            this.canvas.ellipseMode(this.canvas.CENTER)
            if (this.showTrail) 
            {
                this.trail.forEach(dot => {
                    
                    this.canvas.fill(0)
                    this.canvas.ellipse(dot.x, dot.y, 10 * scale, 10 * scale)
                })    
            }
        this.canvas.pop()

        this.canvas.push()
            this.canvas.translate(this.pos.x, this.pos.y, this.pos.z)
            this.canvas.angleMode(this.canvas.DEGREES)
            this.canvas.rotateX(this.angle.x)
            this.canvas.rotateY(this.angle.y)
            this.canvas.rotateZ(this.angle.z)
            this.canvas.fill(this.fill)
            this.canvas.stroke(this.stroke)
            this.canvas.rectMode(this.canvas.CENTER)
            this.canvas.ellipseMode(this.canvas.CENTER)

            switch(this.shape)
            {
                case "ellipse":
                    this.canvas.ellipse(this.offset.x, this.offset.y, this.size.x, this.size.y)
                break;
                case "sphere":
                    this.canvas.sphere(this.size.x)
                break;
                default:
                    // this.canvas.rect(this.offset.x, this.offset.y, this.size.x, this.size.y)
                    this.canvas.quad(
                        this.offset.x, this.offset.y,
                        this.offset.x + this.size.x, this.offset.y,
                        this.offset.x + this.size.x, this.offset.y + this.size.y,
                        this.offset.x, this.offset.y + this.size.y
                        )
            }
        this.canvas.pop()
    }
}