function createLeftScenes(canvas)
{
    scale = canvas.width / 5000;

    // scene 1
    leftScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                canvas: canvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "green",
                    stroke: "white",
                    pos: new p5.Vector(3000, 1700),
                    size: new p5.Vector(200, 200),
                    canvas: canvas,
                })
            ], 
            images: [
                new MyImage({
                    image: backgroundImage,
                    pos: new p5.Vector(0, 0),
                    sourceOffset: new p5.Vector(0, 95),
                    scaleFactor: 2,
                    canvas: canvas,
                }),
                new MyImage({
                    image: truckImage,
                    pos: new p5.Vector(5000, 1730),
                    vel: new p5.Vector(10, 0),
                    scaleFactor: 0.7,
                    canvas: canvas,
                })
            ]
        }))











    // scene 2
    leftScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                canvas: canvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "green",
                    stroke: "white",
                    pos: new p5.Vector(1300, 1810),
                    size: new p5.Vector(150, 150),
                    vel: new p5.Vector(20, -15),
                    acc: new p5.Vector(0, 0.5),
                    canvas: canvas,
                })
            ], 
            images: [
                new MyImage({
                    image: backgroundImage,
                    pos: new p5.Vector(0, 0),
                    sourceOffset: new p5.Vector(0, 95),
                    scaleFactor: 2,
                    canvas: canvas,
                }),
                new MyImage({
                    image: cannon3,
                    pos: new p5.Vector(830, 2180),
                    scaleFactor: 0.4,
                    canvas: canvas,
                }), 
                new MyImage({
                    image: cannon1,
                    pos: new p5.Vector(1000, 1970),
                    scaleFactor: 0.4,
                    angle: -30,
                    canvas: canvas,
                }), 
                new MyImage({
                    image: cannon2,
                    pos: new p5.Vector(790, 2180),
                    scaleFactor: 0.4,
                    canvas: canvas,
                })
            ]
        })),













    // scene 3
    leftScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                canvas: canvas,
            }),
            shapes: [
                new Shape({
                    shape: "rect",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(2500, 1290),
                    size: new p5.Vector(2200, 2200),
                    omega: 0.5,
                    canvas: canvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(2500, 1290),
                    size: new p5.Vector(150, 150),
                    canvas: canvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "red",
                    stroke: "black",
                    pos: new p5.Vector(2500, 300),
                    vel: new p5.Vector(5, 5),
                    size: new p5.Vector(150, 150),
                    canvas: canvas,
                }),
            ], 
            images: [
                new MyImage({
                    image: grid,
                    scaleFactor: 4,
                    pos: new p5.Vector(2500, 1290),
                    canvas: canvas,
                }),
            ]
        }))





    // // scene 4
    // scenes.push({
    //     left: "left4",
    //     right: "right4"
    // })
}







































































function createRightScenes(canvas)
{
    scale = canvas.width / 5000;

    // scene 1
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                vel: new p5.Vector(-10, 0),
                canvas: canvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "blue",
                    stroke: "white",
                    pos: new p5.Vector(3000, 1700),
                    size: new p5.Vector(200, 200),
                    canvas: canvas,
                })
            ], 
            images: [
                new MyImage({
                    image: backgroundImage,
                    pos: new p5.Vector(0, 0),
                    sourceOffset: new p5.Vector(0, 95),
                    scaleFactor: 2 ,
                    canvas: canvas,
                }),
                new MyImage({
                    image: truckImage,
                    pos: new p5.Vector(5000, 1730),
                    vel: new p5.Vector(10, 0),
                    scaleFactor: 0.7,
                    canvas: canvas,
                })
            ]
        })),










    // scene 2
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                vel: new p5.Vector(-20, 0),
                canvas: canvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "blue",
                    stroke: "white",
                    pos: new p5.Vector(1300, 1810),
                    size: new p5.Vector(150, 150),
                    vel: new p5.Vector(20, -15),
                    acc: new p5.Vector(0, 0.5),
                    canvas: canvas,
                })
            ], 
            images: [
                new MyImage({
                    image: backgroundImage,
                    pos: new p5.Vector(0, 0),
                    sourceOffset: new p5.Vector(0, 95),
                    scaleFactor: 2,
                    canvas: canvas,
                }),
                new MyImage({
                    image: cannon3,
                    pos: new p5.Vector(830, 2180),
                    scaleFactor: 0.4,
                    canvas: canvas,
                }), 
                new MyImage({
                    image: cannon1,
                    pos: new p5.Vector(1000, 1970),
                    scaleFactor: 0.4,
                    angle: -30,
                    canvas: canvas,
                }), 
                new MyImage({
                    image: cannon2,
                    pos: new p5.Vector(790, 2180),
                    scaleFactor: 0.4,
                    canvas: canvas,
                })
            ]
        })),













    // scene 3
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                // vel: new p5.Vector(-20, 0)
            }),
            shapes: [
                new Shape({
                    shape: "rect",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(2500, 1290),
                    size: new p5.Vector(2200, 2200),
                    canvas: canvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(2500, 1290),
                    size: new p5.Vector(150, 150),
                    canvas: canvas,
                })
            ], 
            images: [
                new MyImage({
                    image: grid,
                    scaleFactor: 4,
                    omega: 0.5,
                    pos: new p5.Vector(2500, 1290),
                    canvas: canvas,
                }),
            ]
        }))





    // // scene 4
    // scenes.push({
    //     left: "left4",
    //     right: "right4"
    // })
}

class Scene
{
    constructor(props)
    {
        this.shapes = props.shapes;
        this.images = props.images;
        this.referenceFrame = props.referenceFrame;
        this.backGround = props.backGround || "blue";
        this.canvas = props.canvas;
    }

    display()
    {
        this.images.forEach(image => {
            image.referenceFrame = this.referenceFrame;
            if (playState) image.move()
            image.display()
        });

        this.shapes.forEach(shape => {
            shape.referenceFrame = this.referenceFrame;
            if (playState) shape.move()
            shape.display()
        });    
        
        sceneControls()
    }
}