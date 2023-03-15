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
        end.sub(start);
        canvas.push();
            canvas.stroke(color);
            canvas.noFill();
            canvas.translate(start.x, start.y, start.z);

            let angle = end.copy().normalize()
            canvas.rotateX((angle.x * 360) + 180)
            canvas.rotateY((angle.y * 360) + 180)
            canvas.rotateZ((angle.z * 360) + 180)
            
            canvas.cylinder(2 * scale, end.mag() / 2, 24);

            // canvas.translate(end.x, end.y);
            // canvas.angleMode(canvas.RADIANS);
            // canvas.rotate(angle);
            // canvas.fill(color);
            // canvas.strokeWeight(2 * scale)

            // canvas.triangle(0, 0, -5 * scale, -2.5 * scale, -5 * scale, 2.5 * scale);

            // canvas.rotate(-angle);
            // canvas.image(vectorImage, 0, 0, 50, 50)
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

