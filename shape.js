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
    }

    reset()
    {
        this.pos = this.startingPos.copy()
        this.vel = this.startingVel.copy()
        this.acc = this.startingAcc.copy()

        this.angle = this.startingAngle.copy()
        this.omega = this.startingOmega.copy()
        this.alpha = this.startingAlpha.copy()
    }

    move()
    {
        this.vel.add(this.acc)
        this.pos.add(this.vel)

        this.omega += this.alpha
        this.angle += this.omega
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