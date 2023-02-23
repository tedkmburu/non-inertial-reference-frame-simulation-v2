class Particle
{
    constructor(props)
    {
        this.canvas = props.canvas;
        this.myFill = props.myFill || "red";
        this.myStroke = props.myStroke || "green";

        this.size = props.size || new p5.Vector(100, 100);
        if (props.image != undefined) 
        {
            this.size = props.size || new p5.Vector(props.image.width, props.image.height);
        }
        this.startingSize = props.size || this.size.copy();
        this.scaleFactor = props.scaleFactor || 1;

        this.pos = props.pos || new p5.Vector(0, 0, 0);
        this.vel = props.vel || new p5.Vector(0, 0, 0);
        this.acc = props.acc || new p5.Vector(0, 0, 0);

        this.startingPos = props.pos || new p5.Vector(0, 0, 0);
        this.startingVel = props.vel || new p5.Vector(0, 0, 0);
        this.startingAcc = props.acc || new p5.Vector(0, 0, 0);

        this.angle = props.angle || new p5.Vector(0, 0, 0);
        this.omega = props.omega || new p5.Vector(0, 0, 0);
        this.angularAcc = props.angularAcc || new p5.Vector(0, 0, 0);
        this.startingAngle = props.angle || new p5.Vector(0, 0, 0);
        this.startingOmega = props.omega || new p5.Vector(0, 0, 0);
        this.startingAngularAcc = props.angularAcc || new p5.Vector(0, 0, 0);

        this.offset = props.offset || new p5.Vector(0, 0, 0)
        this.startingOffset = props.offset || new p5.Vector(0, 0, 0)

        this.bounces = 0;
        this.showTrail = props.showTrail || false;
        this.showBorder = props.showBorder || true;
        this.visible = props.visible || true;
        this.trail = []

        this.text = props.text || "no text";
        this.font = props.font || regularFont;
        this.textSize = props.textSize || 12;
        this.textAlign = props.textAlign || this.canvas.CENTER;

        this.referenceFrame = new p5.Vector(0, 0, 0)
        
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
        this.angularAcc = this.startingAngularAcc.copy()

        this.bounces = 0;
        this.trail = []

        this.size.mult(this.scaleFactor)
    }

    move()
    {
        this.vel.add(this.acc).add(this.referenceFrame.acc);
        this.pos.add(this.vel).add(this.referenceFrame.vel);

        this.omega.add(this.angularAcc).add(this.referenceFrame.angularAcc);
        this.angle.add(this.omega).add(this.referenceFrame.omega);

        if (this.canvas.frameCount % 5 == 0 && this.showTrail) 
        {
            this.trail.push(this.pos.copy().add(this.offset))
        }
    }
}