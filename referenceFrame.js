class ReferenceFrame
{
    constructor(props)
    {
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

        this.reset()
    }

    reset()
    {
        this.pos = this.startingPos.copy()
        this.vel = this.startingVel.copy()
        this.acc = this.startingAcc.copy()

        this.angle = this.startingAngle.copy()
        this.omega = this.startingOmega.copy()
        this.alpha = this.startingAlpha.copy()

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