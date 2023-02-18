class Shape
{
    constructor(props)
    {
        this.fill = props.fill || "red";
        this.stroke = props.stroke || "green";

        this.shape = props.shape;
        this.size = props.size || createVector(10, 10);

        this.pos = props.pos || createVector();
        this.vel = props.vel || createVector();
        this.acc = props.acc || createVector();

        this.startingPos = props.pos || createVector();
        this.startingVel = props.vel || createVector();
        this.startingAcc = props.acc || createVector();

        this.angle = props.angle || 0;
        this.omega = props.omega || 0;
        this.alpha = props.alpha || 0;

        this.startingAngle = props.angle || 0;
        this.startingOmega = props.omega || 0;
        this.startingAlpha = props.alpha || 0;

        this.reset()
    }

    reset()
    {
        this.pos = this.startingPos.copy()
        this.vel = this.startingVel.copy()
        this.acc = this.startingAcc.copy()

        this.angle = this.startingAngle
        this.omega = this.startingOmega
        this.alpha = this.startingAlpha
        this.scale()
    }

    scale()
    {
        this.size.mult(scale).mult(this.scaleFactor)
        this.pos.mult(scale)
        this.vel.mult(scale)
        this.acc.mult(scale)
    }

    move(referenceFrame)
    {
        this.vel.add(this.acc).add(referenceFrame.acc)
        this.pos.add(this.vel).add(referenceFrame.vel)

        this.omega += (this.alpha + referenceFrame.alpha)
        this.angle += (this.omega + referenceFrame.omega)
    }

    display()
    {
        push()
            
            translate(this.pos.x, this.pos.y)
            rotate(this.angle)
            fill(this.fill)
            stroke(this.stroke)
            rectMode(CENTER)
            ellipseMode(CENTER)

            switch(this.shape)
            {
                case "ellipse":
                    ellipse(0, 0, this.size.x, this.size.y)
                break;
                default:
                    rect(0, 0, this.size.x, this.size.y)
            }

        pop()
    }
}