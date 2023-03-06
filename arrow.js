function createArrow(start, end, angle, color, scale, canvas, vectorImage)
{
    if (p5.Vector.sub(end, start).mag() > 1)
    {
        canvas.push();
            canvas.stroke(color);
            canvas.strokeWeight(3 * scale);
            canvas.noFill();
            canvas.line(start.x, start.y, end.x, end.y);

            canvas.translate(end.x, end.y);
            canvas.angleMode(canvas.RADIANS);
            canvas.rotate(angle);
            canvas.fill(color);
            canvas.noStroke()

            canvas.triangle(0, 0, -10 * scale, -5 * scale, -10 * scale, 5 * scale);

            canvas.rotate(-angle);
            canvas.image(vectorImage, 0, 0, 50, 50)
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
            this.image)
    }
}