function createArrow(start, end, angle, color, scale, canvas, vectorImage)
{
    if (p5.Vector.sub(end, start).mag() > 1 && currentScene !=  3)
    {
        canvas.push();
            canvas.stroke(color);
            canvas.strokeWeight(2 * scale);
            canvas.noFill();
            canvas.line(start.x, start.y, end.x, end.y);

            canvas.translate(end.x, end.y);
            canvas.angleMode(canvas.RADIANS);
            canvas.rotate(angle);
            canvas.fill(color);
            canvas.strokeWeight(2 * scale)

            canvas.triangle(0, 0, -5 * scale, -2.5 * scale, -5 * scale, 2.5 * scale);

            canvas.rotate(-angle);
            canvas.image(vectorImage, 0, 0, 50, 50)
        canvas.pop();
    }
    else if (p5.Vector.sub(end, start).mag() > 1)
    {
        end.div(2);
        // start.add(new p5.Vector(-end.mag() / 4, 0,0))
        canvas.push();
            canvas.stroke(color);
            canvas.fill(color);

            // let r = 100
            // let a = canvas.frameCount / 50
            // let x = Math.sin(a) * r;
            
            canvas.translate(start.x, start.y, start.z);
            // canvas.rotateY( x )

            let x = canvas.degrees(leftScenes[3].shapes[1].pos.x) / 100
            console.log(x);

            // let rotationVector = leftScenes[3].shapes[1].pos.copy().mult(-0.005)
            // rotationVector = leftScenes[3].shapes[1].pos.copy()
            // canvas.rotateX(canvas.degrees(rotationVector.x))
            // canvas.rotateY(canvas.degrees(rotationVector.y))
            // canvas.rotateZ(canvas.degrees(rotationVector.z))
            // console.log(leftScenes[3].shapes[0].angle);

            

            canvas.rotateX(90)
            // canvas.rotateY(45)
            canvas.rotateZ(90)
            // canvas.rotateZ(x)
            canvas.cylinder(2 * scale, end.mag() / 2, 24);

            canvas.translate(0, end.mag() / 4, 0)
            canvas.stroke("rgba(0, 0, 0, 0.5)")
            canvas.cone(10 * scale, 40 * scale)
            

            canvas.rotateZ(-90)
            canvas.rotateX(-90)
            canvas.image(vectorImage, -200, -100, 200, 200)
        canvas.pop();
    }
}

class Arrow extends Particle
{
    constructor(props)
    {
        super(props)
    }  

    display()
    {
        createArrow(
            this.pos, 
            this.pos.copy().add(this.vel), 
            this.vel.heading(), 
            this.fill,
            this.scaleFactor, 
            this.canvas,
            this.image,
            )
    }
}

