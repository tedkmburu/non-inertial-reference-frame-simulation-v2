function createScenes()
{
    scale = width / 5000;

    // scene 1
    scenes.push({
        left: new Scene({
            referenceFrame: new ReferenceFrame({

            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "green",
                    stroke: "white",
                    pos: createVector(3000, 1910),
                    size: createVector(200, 200)
                })
            ], 
            images: [
                new MyImage({
                    image: backgroundImage,
                    pos: createVector(0, 100),
                    scaleFactor: 2
                }),
                new MyImage({
                    image: truckImage,
                    pos: createVector(4000, 1970),
                    scaleFactor: 0.4
                })
            ]
        }),


        right: new Scene({
            referenceFrame: new ReferenceFrame({
                vel: createVector(-10, 0)
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "blue",
                    stroke: "white",
                    pos: createVector(3000, 1910),
                    size: createVector(200, 200)
                })
            ], 
            images: [
                new MyImage({
                    image: backgroundImage,
                    pos: createVector(0, 95),
                    scaleFactor: 2
                }),
                new MyImage({
                    image: truckImage,
                    pos: createVector(4000, 1970),
                    vel: createVector(10, 0),
                    scaleFactor: 0.4
                })
            ]
        }),
    })






    // scene 2
    scenes.push({
        left: "left2",
        right: "right2"
    })





    // scene 3
    scenes.push({
        left: "left3",
        right: "right3"
    })





    // scene 4
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
        this.images = props.images;
        this.referenceFrame = props.referenceFrame;
        this.backGround = props.backGround || "blue";
    }

    display()
    {
        this.images.forEach(image => {
            if (playState) image.move(this.referenceFrame)
            image.display()
        });

        this.shapes.forEach(shape => {
            if (playState) shape.move(this.referenceFrame)
            shape.display()
        });        
    }
}