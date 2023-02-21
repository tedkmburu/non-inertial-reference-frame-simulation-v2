class MyImage
{
    constructor(props)
    {
        this.canvas = props.canvas;
        this.image = props.image;
        this.size = props.size || new p5.Vector(props.image.width, props.image.height);
        this.scaleFactor = props.scaleFactor || 1;

        this.pos = props.pos || this.size.copy().div(2);
        this.vel = props.vel || new p5.Vector(0, 0);
        this.acc = props.acc || new p5.Vector(0, 0);

        this.startingPos = props.pos || this.size.copy().div(2);
        this.startingVel = props.vel || new p5.Vector(0, 0);
        this.startingAcc = props.acc || new p5.Vector(0, 0);

        this.angle = props.angle || 0;
        this.omega = props.omega || 0;
        this.alpha = props.alpha || 0;

        this.startingAngle = props.angle || 0;
        this.startingOmega = props.omega || 0;
        this.startingAlpha = props.alpha || 0;

        this.referenceFrame = new p5.Vector(0, 0);
        this.offset = props.offset || new p5.Vector(0, 0)

        this.bounces = 0;

        this.reset()
    }

    reset()
    {
        this.pos = this.startingPos.copy().add(this.offset);
        this.vel = this.startingVel.copy();
        this.acc = this.startingAcc.copy();

        this.angle = this.startingAngle;
        this.omega = this.startingOmega;
        this.alpha = this.startingAlpha;

        this.bounces = 0;

        this.scale();
    }

    scale()
    {
        this.size.mult(scale).mult(this.scaleFactor);
        this.pos.mult(scale);
        this.vel.mult(scale);
        this.acc.mult(scale);
    }

    move()
    {
        this.vel.add(this.acc).add(this.referenceFrame.acc);
        this.pos.add(this.vel).add(this.referenceFrame.vel);

        this.omega += (this.alpha + this.referenceFrame.alpha);
        this.angle += (this.omega + this.referenceFrame.omega);
    }

    display()
    {
        this.canvas.push()
            this.canvas.translate(this.pos.x, this.pos.y);
            this.canvas.angleMode(this.canvas.DEGREES)
            this.canvas.rotate(this.angle);
            this.canvas.rectMode(this.canvas.CENTER);
            this.canvas.ellipseMode(this.canvas.CENTER);
            this.canvas.imageMode(this.canvas.CENTER);

            this.canvas.image(this.image, 0, 0, this.size.x, this.size.y);
        this.canvas.pop()
    }
}