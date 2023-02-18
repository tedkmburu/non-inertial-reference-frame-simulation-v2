class MyImage
{
    constructor(props)
    {
        this.image = props.image;
        this.size = props.size || createVector(props.image.width, props.image.height);
        this.scaleFactor = props.scaleFactor || 1;

        this.pos = props.pos || this.size.copy().div(2);
        this.vel = props.vel || createVector();
        this.acc = props.acc || createVector();

        this.startingPos = props.pos || this.size.copy().div(2);
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
        this.pos = this.startingPos.copy();
        this.vel = this.startingVel.copy();
        this.acc = this.startingAcc.copy();

        this.angle = this.startingAngle;
        this.omega = this.startingOmega;
        this.alpha = this.startingAlpha;

        this.scale();
    }

    scale()
    {
        this.size.mult(scale).mult(this.scaleFactor);
        this.pos.mult(scale);
        this.vel.mult(scale);
        this.acc.mult(scale);
    }

    move(referenceFrame)
    {
        this.vel.add(this.acc).add(referenceFrame.acc);
        this.pos.add(this.vel).add(referenceFrame.vel);

        this.omega += (this.alpha + referenceFrame.alpha);
        this.angle += (this.omega + referenceFrame.omega);
    }

    display()
    {
        push()
            translate(this.pos.x, this.pos.y);
            rotate(this.angle);
            rectMode(CENTER);
            ellipseMode(CENTER);
            imageMode(CENTER);

            let sourcePos = canvasSize.copy().sub(this.size);
            sourcePos = createVector()

            let sourceX = 0;
            let sourceY = 0;
            let sourceWidth = 0;
            let sourceHeight = 0
            image(this.image, 0, 0, this.size.x, this.size.y, sourcePos.x, sourcePos.y);
        pop()
    }
}