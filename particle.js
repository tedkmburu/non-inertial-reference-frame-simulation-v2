function prepareCanvas(props)
{
    // console.log(props);
    props.canvas.translate(props.pos.x, props.pos.y, props.pos.z)
    props.canvas.angleMode(props.canvas.DEGREES)
    props.canvas.rotateX(props.angle.x)
    props.canvas.rotateY(props.angle.y)
    props.canvas.rotateZ(props.angle.z)
    props.canvas.translate(props.offset.x, props.offset.y, props.offset.z)
    props.canvas.fill(props.fill)
    props.canvas.stroke(props.stroke)
    props.canvas.rectMode(props.canvas.CENTER)
    props.canvas.ellipseMode(props.canvas.CENTER)
    props.canvas.imageMode(props.canvas.CENTER)
    props.canvas.textAlign(props.textAlign);
    props.canvas.textSize(props.textSize);
    props.canvas.textFont(props.font);
}

class Particle
{
    constructor(props)
    {
        this.canvas = props.canvas;
        this.fill = props.fill || "rgba(0,0,0,0)";
        this.stroke = props.stroke || "black";
        
        this.mass = props.mass || 1;

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
        this.displacement = props.displacement || 0; 

        this.bounces = 0;
        this.showTrail = props.showTrail || false;
        this.showBorder = props.showBorder || false;
        this.visible = props.visible || true;
        this.trail = []
        this.trail2 = []

        this.showVelVector = props.showVelVector || false;
        this.showCentVector = props.showCentVector || false;
        this.showCorVector = props.showCorVector || false;

        this.text = props.text || "no text";
        this.font = props.font || regularFont;
        this.textSize = props.textSize || 12;
        this.textAlign = props.textAlign || this.canvas.CENTER;

        this.opacity = props.opacity || 1;
        this.referenceFrame = new p5.Vector(0, 0, 0);
        
        this.nonInertial = props.nonInertial || false;
        this.centForce = new p5.Vector(0, 0, 0);
        this.corForce = new p5.Vector(0, 0, 0);

        this.previousPosition = this.pos.copy()

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
        this.trail = [this.pos.copy()]
        this.trail2 = [this.pos.copy()]

        this.size.mult(this.scaleFactor)
    }

    move()
    {
        if (this.nonInertial && this.canvas.frameCount > 2)
        {
            this.acc = new p5.Vector(0, 0, 0)
            // calculate the Coriolis and centrifugal forces for a particle
            let omega = rightScenes[2].images[0].omega.copy().mult(0.005)
            this.corForce = p5.Vector.mult(p5.Vector.cross(this.vel, omega), (-2 * this.mass));
            let rho = this.pos.copy();
            rho.z = 0
            // let rho = p5.Vector.sub(this.pos, rectangles[0].pos);
            omega = rightScenes[2].images[0].omega.copy().mult(0.005)
            this.centForce = p5.Vector.mult(rho, p5.Vector.dot(omega, omega) * this.mass);

            // combine the Coriolis and centrifugal forces and divide by mass to get net force
            this.acc = p5.Vector.add(this.corForce, this.centForce).div(this.mass);
        }

        this.previousPosition = this.pos.copy()
        if (!playBackwards) 
        {
            this.vel.add(this.acc).add(this.referenceFrame.acc);
            this.pos.add(this.vel).add(this.referenceFrame.vel);

            this.omega.add(this.angularAcc).add(this.referenceFrame.angularAcc);
            this.angle.add(this.omega).add(this.referenceFrame.omega);
        }
        else 
        {
            this.vel.sub(this.acc).sub(this.referenceFrame.acc);
            this.pos.sub(this.vel).sub(this.referenceFrame.vel);

            this.omega.sub(this.angularAcc).sub(this.referenceFrame.angularAcc);
            this.angle.sub(this.omega).sub(this.referenceFrame.omega);
        }

        let trailRate = (currentScene > 2) ? 10 : 5; 
        if (this.canvas.frameCount % trailRate == 0 && this.showTrail) 
        {
            this.trail.push(this.pos.copy().add(this.offset))

            let newPosition = this.pos.copy()
            
            let angleInRadians = this.canvas.radians(leftScenes[2].shapes[0].angle.copy().mult(-1).z)
            let rectPosition = newPosition.rotate(angleInRadians)
            // console.log(-leftScenes[2].images[0].angle);
            // this.rectangle.previousPositions.push(rectPosition)

            this.trail2.push(newPosition)
        }

        this.displacement = this.pos.copy().sub(this.startingPos).mag()
    }

    displayForces(leftOrRight)
    {   

        let velImage = (leftOrRight == "left") ? leftVelImage : rightVelImage;
        let corImage = (leftOrRight == "left") ? leftCorImage : rightCorImage;
        let centImage = (leftOrRight == "left") ? leftCentImage : rightCentImage;

        // vel
        let velVector = new Arrow({
            pos: this.pos.copy().add(this.offset), 
            vel: this.vel.copy().mult(100), 
            angle: this.vel.angle, 
            fill: "red", 
            canvas: this.canvas,
            scaleFactor: 1.5,
            image: velImage,
        })

        // cor
        let corVector = new Arrow({
            pos: this.pos.copy().add(this.offset), 
            vel: this.corForce.copy().mult(5000), 
            angle: this.corForce.angle, 
            fill: "blue", 
            canvas: this.canvas,
            scaleFactor: 1.5,
            image: corImage,
        })

        // cent
        let centVector = new Arrow({
            pos: this.pos.copy().add(this.offset), 
            vel: this.centForce.copy().mult(100000), 
            angle: this.centForce.angle, 
            fill: "green", 
            canvas: this.canvas,
            scaleFactor: 1.5,
            image: centImage,
        })

        if (this.showVelVector)  velVector.display()
        if (this.showCorVector)  corVector.display()
        if (this.showCentVector) centVector.display()

        // console.log(this.corForce.mag(), this.centForce.mag());
            
    }
}