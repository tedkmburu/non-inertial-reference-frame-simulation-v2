class TextBox
{
    constructor(props)
    {
        this.canvas = props.canvas;
        this.fill = props.fill || "red";
        this.stroke = props.stroke || "green";

        this.size = props.size || new p5.Vector(300, 100);
        this.startingSize = props.size || new p5.Vector(10, 10);

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

        this.text = props.text || "fdsa";
        this.showBorder = props.showBorder || true;
        this.font = props.font || regularFont;
        this.textSize = props.textSize || 12;
        this.textAlign = props.textAlign || this.canvas.CENTER;

        this.reset()
    }

    reset()
    {
        this.size = this.startingSize.copy()
        
        this.pos = this.startingPos.copy().add(this.offset)
        this.vel = this.startingVel.copy()
        this.acc = this.startingAcc.copy()

        this.angle = this.startingAngle.copy()
        this.omega = this.startingOmega.copy()
        this.angularAcc = this.startingAngularAcc.copy()

        this.size.mult(this.scaleFactor)
    }

    move()
    {
        this.vel.add(this.acc).add(this.referenceFrame.acc);
        this.pos.add(this.vel).add(this.referenceFrame.vel);

        this.omega.add(this.angularAcc).add(this.referenceFrame.angularAcc);
        this.angle.add(this.omega).add(this.referenceFrame.omega);
    }

    display()
    {
        this.canvas.push()
            // this.canvas.translate(this.pos.x, this.pos.y, this.pos.z);
            // this.canvas.angleMode(this.canvas.DEGREES);
            // this.canvas.rotateX(this.angle.x);
            // this.canvas.rotateY(this.angle.y);
            // this.canvas.rotateZ(this.angle.z);
            // this.canvas.fill(this.fill)
            // this.canvas.stroke(this.stroke);
            // this.canvas.rectMode(this.canvas.CENTER);
            // this.canvas.ellipseMode(this.canvas.CENTER);
            // this.canvas.textAlign(this.textAlign);
            // this.canvas.textSize(this.textSize);
            // this.canvas.textFont(this.font);
            prepareCanvas(this)

            
            if (this.showBorder) this.canvas.rect(0, 0, this.size.x, this.size.y)
            this.canvas.text(this.text, 0, 0, this.size.x, this.size.y)
                
            
        this.canvas.pop()
    }
}