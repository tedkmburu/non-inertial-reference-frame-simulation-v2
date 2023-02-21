function createLeftScenes(canvas)
{
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
                    pos: new p5.Vector(0, 0, 0),
                    size: new p5.Vector(200, 200, 0),
                    canvas: canvas,
                })
            ], 
            images: [
                new MyImage({
                    image: leftBackgroundImage,
                    pos: new p5.Vector(0, 750, -10),
                    scaleFactor: 2,
                    canvas: canvas,
                }),
                new MyImage({
                    image: leftTruckImage,
                    pos: new p5.Vector(0, 0, -9),
                    vel: new p5.Vector(10, 0, 0),
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
                    pos: new p5.Vector(-1020, 600, 0),
                    size: new p5.Vector(150, 150, 0),
                    vel: new p5.Vector(20, -15, 0),
                    acc: new p5.Vector(0, 0.5, 0),
                    canvas: canvas,
                })
            ], 
            images: [
                new MyImage({
                    image: leftBackgroundImage,
                    pos: new p5.Vector(0, 1500, -10),
                    scaleFactor: 2,
                    canvas: canvas,
                }),
                new MyImage({
                    image: leftCannon3,
                    pos: new p5.Vector(-1670, 1130, -9),
                    scaleFactor: 0.6,
                    canvas: canvas,
                }), 
                new MyImage({
                    image: leftCannon1,
                    pos: new p5.Vector(-1450, 850, -8),
                    scaleFactor: 0.6,
                    angle: new p5.Vector(0, 0, -30),
                    canvas: canvas,
                }), 
                new MyImage({
                    image: leftCannon2,
                    pos: new p5.Vector(-1700, 1130, -7),
                    scaleFactor: 0.6,
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
                    pos: new p5.Vector(0, 0, 0),
                    size: new p5.Vector(2200, 2200, 0),
                    omega: new p5.Vector(0, 0, 0.5),
                    canvas: canvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(0, 0, 0),
                    size: new p5.Vector(150, 150, 0),
                    canvas: canvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "red",
                    stroke: "black",
                    pos: new p5.Vector(0, -1000, 0),
                    vel: new p5.Vector(5, 5, 0),
                    size: new p5.Vector(150, 150, 0),
                    canvas: canvas,
                }),
            ], 
            images: [
                new MyImage({
                    image: leftGrid,
                    scaleFactor: 5,
                    pos: new p5.Vector(0, 0, 0, 0),
                    canvas: canvas,
                }),
            ]
        }))





    // // scene 4
    leftScenes.push(new Scene({
        referenceFrame: new ReferenceFrame({
            canvas: canvas,
        }),
        shapes: [
            new Shape({
                shape: "rect",
                fill: "white",
                stroke: "black",
                pos: new p5.Vector(0, 0, 0),
                size: new p5.Vector(2200, 2200, 0),
                omega: new p5.Vector(0, 0, 0.5),
                canvas: canvas,
            }),
            new Shape({
                shape: "ellipse",
                fill: "white",
                stroke: "black",
                pos: new p5.Vector(0, 0, 0),
                size: new p5.Vector(150, 150, 0),
                canvas: canvas,
            }),
            new Shape({
                shape: "ellipse",
                fill: "red",
                stroke: "black",
                pos: new p5.Vector(0, -1000, 0),
                vel: new p5.Vector(5, 5, 0),
                size: new p5.Vector(150, 150, 0),
                canvas: canvas,
            }),
        ], 
        images: [
            new MyImage({
                image: leftGrid,
                scaleFactor: 4,
                pos: new p5.Vector(0, 0, 0),
                canvas: canvas,
            }),
        ]
    }))
}







































































function createRightScenes(canvas)
{
    // scene 1
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                vel: new p5.Vector(-10, 0, 0),
                canvas: canvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "blue",
                    stroke: "white",
                    pos: new p5.Vector(0, 0, 0),
                    size: new p5.Vector(200, 200, 0),
                    canvas: canvas,
                })
            ], 
            images: [
                new MyImage({
                    image: rightBackgroundImage,
                    pos: new p5.Vector(0, 750, -10),
                    scaleFactor: 2 ,
                    canvas: canvas,
                }),
                new MyImage({
                    image: rightTruckImage,
                    pos: new p5.Vector(3000, 0, -9),
                    vel: new p5.Vector(10, 0, 0),
                    scaleFactor: 0.7,
                    canvas: canvas,
                })
            ]
        })),










    // scene 2
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                vel: new p5.Vector(-20, 0, 0),
                canvas: canvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "blue",
                    stroke: "white",
                    pos: new p5.Vector(680, 610, 0),
                    size: new p5.Vector(150, 150, 0),
                    vel: new p5.Vector(20, -15, 0),
                    acc: new p5.Vector(0, 0.5, 0),
                    canvas: canvas,
                })
            ], 
            images: [
                new MyImage({
                    image: rightBackgroundImage,
                    pos: new p5.Vector(0, 1500, -10),
                    scaleFactor: 2,
                    canvas: canvas,
                }),
                new MyImage({
                    image: rightCannon3,
                    pos: new p5.Vector(30, 1130, -9),
                    scaleFactor: 0.6,
                    canvas: canvas,
                }), 
                new MyImage({
                    image: rightCannon1,
                    pos: new p5.Vector(250, 850, -8),
                    scaleFactor: 0.6,
                    angle: new p5.Vector(0, 0, -30),
                    canvas: canvas,
                }), 
                new MyImage({
                    image: rightCannon2,
                    pos: new p5.Vector(0, 1130, -7),
                    scaleFactor: 0.6,
                    canvas: canvas,
                })
            ]
        })),













    // scene 3
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                // vel: new p5.Vector(-20, 0, 0)
            }),
            shapes: [
                new Shape({
                    shape: "rect",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(0, 0, -9),
                    size: new p5.Vector(2200, 2200, 0),
                    canvas: canvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(0, 0, -5),
                    size: new p5.Vector(150, 150, 0),
                    canvas: canvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "red",
                    stroke: "black",
                    pos: new p5.Vector(0, 0, -2),
                    offset: new p5.Vector(0, -200, 0),
                    // vel: new p5.Vector(5, 5, 0),
                    size: new p5.Vector(150, 150, 0),
                    omega: new p5.Vector(0, 0, 0.5),
                    canvas: canvas,
                }),

                
            ], 
            images: [
                new MyImage({
                    image: rightGrid,
                    scaleFactor: 5,
                    omega: new p5.Vector(0, 0, -0.5),
                    pos: new p5.Vector(0, 0, -11),
                    canvas: canvas,
                }),
            ]
        }))








    // // scene 4
    rightScenes.push(new Scene({
        referenceFrame: new ReferenceFrame({
            // vel: new p5.Vector(-20, 0)
        }),
        shapes: [
            new Shape({
                shape: "sphere",
                fill: "white",
                stroke: "black",
                pos: new p5.Vector(0, 0, -400),
                size: new p5.Vector(1000, 1000),
                canvas: canvas,
            }),
            new Shape({
                shape: "sphere",
                fill: "red",
                stroke: "black",
                // pos: new p5.Vector(2500, 300, 0),
                pos: new p5.Vector(0, 0, 0),
                offset: new p5.Vector(0, -200, 0),
                // vel: new p5.Vector(5, 5, 0),
                size: new p5.Vector(150, 150, 0),
                omega: new p5.Vector(0, 0, 0.5),
                canvas: canvas,
            }),

            
        ], 
        images: [
            new MyImage({
                image: rightGrid,
                scaleFactor: 4,
                // omega: new p5.Vector(0, 0, -0.5),
                pos: new p5.Vector(0, 0, 0),
                canvas: canvas,
            }),
        ]
    }))
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