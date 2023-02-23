// class MyImage
// {
//     constructor(props)
//     {
//         this.canvas = props.canvas;
//         this.image = props.image;
//         this.size = props.size || new p5.Vector(props.image.width, props.image.height);
//         this.startingSize = props.startingSize || this.size.copy()
        
//         this.scaleFactor = props.scaleFactor || 1;

//         this.pos = props.pos || this.size.copy().div(2);
//         this.vel = props.vel || new p5.Vector(0, 0, 0);
//         this.acc = props.acc || new p5.Vector(0, 0, 0);

//         this.startingPos = props.pos || this.size.copy().div(2);
//         this.startingVel = props.vel || new p5.Vector(0, 0, 0);
//         this.startingAcc = props.acc || new p5.Vector(0, 0, 0);

//         this.angle = props.angle || new p5.Vector(0, 0, 0);
//         this.omega = props.omega || new p5.Vector(0, 0, 0);
//         this.alpha = props.alpha || new p5.Vector(0, 0, 0);

//         this.startingAngle = props.angle || new p5.Vector(0, 0, 0);
//         this.startingOmega = props.omega || new p5.Vector(0, 0, 0);
//         this.startingAlpha = props.alpha || new p5.Vector(0, 0, 0);

//         this.referenceFrame = new p5.Vector(0, 0, 0);
//         this.offset = props.offset || new p5.Vector(0, 0, 0)

//         this.bounces = 0;

//         this.reset()
//     }

//     reset()
//     {
//         this.pos = this.startingPos.copy().add(this.offset);
//         this.vel = this.startingVel.copy();
//         this.acc = this.startingAcc.copy();

//         this.angle = this.startingAngle.copy();
//         this.omega = this.startingOmega.copy();
//         this.alpha = this.startingAlpha.copy();

//         this.bounces = 0;

//         this.size = this.startingSize.copy()

//         this.scale();
//     }

//     scale()
//     {
//         this.size.mult(scale).mult(this.scaleFactor);
//         this.pos.mult(scale);
//         this.vel.mult(scale);
//         this.acc.mult(scale);
//     }

//     move()
//     {
//         this.vel.add(this.acc).add(this.referenceFrame.acc);
//         this.pos.add(this.vel).add(this.referenceFrame.vel);

//         this.omega.add(this.alpha).add(this.referenceFrame.alpha);
//         this.angle.add(this.omega).add(this.referenceFrame.omega);
//     }

//     display()
//     {
//         this.canvas.push()
//             this.canvas.translate(this.pos.x, this.pos.y, this.pos.z);
//             this.canvas.angleMode(this.canvas.DEGREES)
//             this.canvas.rotateX(this.angle.x)
//             this.canvas.rotateY(this.angle.y)
//             this.canvas.rotateZ(this.angle.z)
//             this.canvas.rectMode(this.canvas.CENTER);
//             this.canvas.ellipseMode(this.canvas.CENTER);
//             this.canvas.imageMode(this.canvas.CENTER);

//             this.canvas.image(this.image, 0, 0, this.size.x, this.size.y);
//         this.canvas.pop()
//     }
// }




class MyImage extends Particle
{
    constructor(props)
    {
        super(props)

        // this.canvas = props.canvas;

        this.reset()
    }

    display()
    {
        this.canvas.push()
            prepareCanvas(this)

            this.canvas.image(this.image, 0, 0, this.size.x, this.size.y);
        this.canvas.pop()
    }
}