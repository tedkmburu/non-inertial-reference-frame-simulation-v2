function createScenes()
{
    scenes.push({
        left: new Scene({
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "green",
                    stroke: "white",
                    pos: createVector(100, 100),
                    size: createVector(25, 25)
                })
            ], 
            images: [
                new Image({
                    image: truckImage
                })
            ]
        }),
        right: new Scene({
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "blue",
                    stroke: "white",
                    pos: createVector(100, 100)
                })
            ]
        }),
    })

    scenes.push({
        left: "left2",
        right: "right2"
    })

    scenes.push({
        left: "left3",
        right: "right3"
    })

    scenes.push({
        left: "left4",
        right: "right4"
    })
}

class Scene
{
    constructor(props)
    {
        this.shapes = props.shapes;
        this.backGround = props.backGround;
    }

    display()
    {
        this.shapes.forEach(shape => {
            if (playState) shape.move()
            shape.display()
        });
    }
}