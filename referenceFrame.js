class ReferenceFrame
{
    constructor(props)
    {
        this.pos = props.pos || createVector();
        this.vel = props.vel || createVector();
        this.acc = props.acc || createVector();

        this.angle = props.angle || 0;
        this.omega = props.omega || 0;
        this.alpha = props.alpha || 0;

        this.startingPos = props.pos || createVector();
        this.startingVel = props.vel || createVector();
        this.startingAcc = props.acc || createVector();

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
        this.pos.mult(scale)
        this.vel.mult(scale)
        this.acc.mult(scale)
    }

    preload()
    {
        console.log("preload");
    }

    setup()
    {
        console.log("setup");
    }

    move()
    {

    }

    draw()
    {

    }
}