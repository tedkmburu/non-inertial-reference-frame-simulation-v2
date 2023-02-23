function prepareCanvas(canvas)
{
    canvas.canvas.translate(canvas.pos.x, canvas.pos.y, canvas.pos.z)
    canvas.canvas.angleMode(canvas.canvas.DEGREES)
    canvas.canvas.rotateX(canvas.angle.x)
    canvas.canvas.rotateY(canvas.angle.y)
    canvas.canvas.rotateZ(canvas.angle.z)
    canvas.canvas.translate(canvas.offset.x, canvas.offset.y, canvas.offset.z)
    canvas.canvas.fill(canvas.fill)
    canvas.canvas.stroke(canvas.stroke)
    canvas.canvas.rectMode(canvas.canvas.CENTER)
    canvas.canvas.ellipseMode(canvas.canvas.CENTER)
    canvas.canvas.imageMode(canvas.canvas.CENTER)
    canvas.canvas.textAlign(canvas.textAlign);
    canvas.canvas.textSize(canvas.textSize);
    canvas.canvas.textFont(canvas.font);
}

class Particle
{
    constructor(props)
    {
        this.canvas = props.canvas;
        this.fill = props.fill || "rgba(0,0,0,0)";
        this.stroke = props.stroke || "black";

        this.image = props.image;
        this.size = props.size || new p5.Vector(50, 50);

        this.scaleFactor = props.scaleFactor || 1;

        this.pos = props.pos || new p5.Vector(0, 0, 0);
        this.vel = props.vel || new p5.Vector(0, 0, 0);
        this.acc = props.acc || new p5.Vector(0, 0, 0);

        this.relPos = new p5.Vector(0, 0, 0);
        this.relVel = new p5.Vector(0, 0, 0);
        this.relAcc = new p5.Vector(0, 0, 0);

        this.startingPos = props.pos || this.pos.copy();
        this.startingVel = props.vel || this.vel.copy();
        this.startingAcc = props.acc || this.acc.copy();

        this.angle = props.angle || new p5.Vector(0, 0, 0);
        this.omega = props.omega || new p5.Vector(0, 0, 0);
        this.angularAcc = props.angularAcc || new p5.Vector(0, 0, 0);

        this.startingAngle = props.angle || this.angle.copy();
        this.startingOmega = props.omega || this.omega.copy();
        this.startingAngularAcc = props.angularAcc || this.angularAcc.copy();

        if (this.image != undefined) 
        {
            this.size = new p5.Vector(props.image.width, props.image.height, 0)
            this.pos = new p5.Vector(props.image.width / 2, props.image.height / 2, 0)
        }
        this.startingSize = props.size || this.size.copy();

        this.offset = props.offset || new p5.Vector(0, 0, 0)
        this.startingOffset = props.offset || new p5.Vector(0, 0, 0)

        this.bounces = 0;
        this.showTrail = props.showTrail || false;
        this.showBorder = props.showBorder || false;
        this.visible = props.visible || true;
        this.trail = []
        this.showForces = props.showForces || false;

        this.text = props.text || "no text";
        this.font = props.font || regularFont;
        this.textSize = props.textSize || 12;
        this.textAlign = props.textAlign || this.canvas.CENTER;

        this.opacity = props.opacity || 1;
        this.referenceFrame = new p5.Vector(0, 0, 0);
        
        this.nonInertial = props.nonInertial || false;
        this.centForce = new p5.Vector(0, 0, 0);
        this.corForce = new p5.Vector(0, 0, 0);

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
        let netAcc = new p5.Vector(0, 0, 0);
        if (this.nonInertial)
        {
            // calculate the Coriolis and centrifugal forces for a particle
            let omega = rightScenes[2].images[0].omega;
            this.corForce = p5.Vector.mult(p5.Vector.cross(this.vel, omega), (-2 * this.mass));
            let rho = this.pos.div(1);
            this.centForce = p5.Vector.mult(rho, p5.Vector.dot(omega, omega) * this.mass);

            // combine the Coriolis and centrifugal forces and divide by mass to get net force
            this.acc = p5.Vector.add(this.corForce, this.centForce).div(this.mass);

            // console.log(this.omega);
            netAcc.add(this.acc)

            this.acc = netAcc.copy()
            this.vel.add(this.acc)
            this.pos.add(this.vel)

            console.log(this.pos);


            // console.log(this.centForce, this.corForce);
        }
        else
        {
            this.vel.add(this.acc).add(this.referenceFrame.acc);
            this.pos.add(this.vel).add(this.referenceFrame.vel);
    
            this.omega.add(this.angularAcc).add(this.referenceFrame.angularAcc);
            this.angle.add(this.omega).add(this.referenceFrame.omega);
        }

        if (this.canvas.frameCount % 10 == 0 && this.showTrail) 
        {
            this.trail.push(this.pos.copy().add(this.offset))
        }
    }
}