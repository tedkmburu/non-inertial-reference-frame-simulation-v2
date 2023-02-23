function createLeftScenes(theCanvas)
{
    // scene 1
    leftScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                canvas: theCanvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "green",
                    stroke: "white",
                    pos: new p5.Vector(0, 55, 1),
                    size: new p5.Vector(50, 50, 0),
                    canvas: theCanvas,
                })
            ], 
            images: [
                new MyImage({
                    image: leftBackgroundImage,
                    pos: new p5.Vector(0, 200, -10),
                    scaleFactor: 0.5,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: leftTruckImage,
                    pos: new p5.Vector(0, 70, -9),
                    vel: new p5.Vector(5, 0, 0),
                    scaleFactor: 0.1,
                    canvas: theCanvas,
                })
            ], 
        }))











    // scene 2
    leftScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                canvas: theCanvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "green",
                    stroke: "white",
                    pos: new p5.Vector(-140, -60, 0),
                    size: new p5.Vector(50, 50, 0),
                    vel: new p5.Vector(20, -15, 0),
                    acc: new p5.Vector(0, 0.5, 0),
                    canvas: theCanvas,
                })
            ], 
            images: [
                new MyImage({
                    image: leftBackgroundImage,
                    pos: new p5.Vector(0, 200, -10),
                    scaleFactor: 0.5,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: leftCannon3,
                    pos: new p5.Vector(-270, 105, -9),
                    scaleFactor: 0.15,
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: leftCannon1,
                    pos: new p5.Vector(-240, 20, -8),
                    scaleFactor: 0.15,
                    angle: new p5.Vector(0, 0, -40),
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: leftCannon2,
                    pos: new p5.Vector(-300, 105, -7),
                    scaleFactor: 0.15,
                    canvas: theCanvas,
                })
            ]
        })),













    // scene 3
    leftScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                canvas: theCanvas,
            }),
            shapes: [
                new Shape({
                    shape: "box",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(0, 0, -9),
                    size: new p5.Vector(350, 350, 1),
                    omega: new p5.Vector(0, 0, 0.5),
                    canvas: theCanvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(0, 0, -7),
                    size: new p5.Vector(25, 25, 0),
                    canvas: theCanvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "red",
                    stroke: "black",
                    pos: new p5.Vector(0, -150, -5),
                    vel: new p5.Vector(1, 1, 0),
                    size: new p5.Vector(25, 25, 0),
                    showTrail: true,
                    canvas: theCanvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "blue",
                    stroke: "black",
                    pos: new p5.Vector(0, -150, -5),
                    vel: new p5.Vector(1, 1, 0),
                    size: new p5.Vector(25, 25, 0),
                    showTrail: true,
                    nonInertial: true,
                    canvas: theCanvas,
                }),
            ], 
            images: [
                new MyImage({
                    image: leftGrid,
                    scaleFactor: 1,
                    pos: new p5.Vector(0, 0, -10),
                    canvas: theCanvas,
                }),
            ]
        }))





    // // scene 4
    leftScenes.push(new Scene({
        referenceFrame: new ReferenceFrame({
            // vel: new p5.Vector(-20, 0)
        }),
        shapes: [
            new Shape({
                shape: "sphere",
                fill: "white",
                stroke: "black",
                pos: new p5.Vector(0, 0, -400),
                size: new p5.Vector(400, 400, 0),
                omega:  new p5.Vector(0, 1, 0),
                canvas: theCanvas,
            }),
            new Shape({
                shape: "sphere",
                fill: "red",
                stroke: "black",
                // pos: new p5.Vector(2500, 300, 0),
                pos: new p5.Vector(0, 500, -400),
                offset: new p5.Vector(0, -500, 0),
                // vel: new p5.Vector(5, 5, 0),
                size: new p5.Vector(50, 50, 0),
                omega: new p5.Vector(-1, 1, 0),
                showTrail: true,
                canvas: theCanvas,
            }),
        ], 
        images: [
            new MyImage({
                image: leftGrid,
                scaleFactor: 2,
                // omega: new p5.Vector(0, 0, -0.5),
                pos: new p5.Vector(0, 0, -1000),
                canvas: theCanvas,
            }),
        ]
    }))
}







































































function createRightScenes(theCanvas)
{
    // scene 1
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                vel: new p5.Vector(-5, 0, 0),
                canvas: theCanvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "blue",
                    stroke: "white",
                    pos: new p5.Vector(300, 55, 0),
                    size: new p5.Vector(50, 50, 0),
                    canvas: theCanvas,
                })
            ], 
            images: [
                new MyImage({
                    image: rightBackgroundImage,
                    pos: new p5.Vector(0, 200, -10),
                    scaleFactor: 0.5,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: rightTruckImage,
                    pos: new p5.Vector(300, 70, -9),
                    vel: new p5.Vector(5, 0, 0),
                    scaleFactor: 0.1,
                    canvas: theCanvas,
                })
            ]
        })),










    // scene 2
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                vel: new p5.Vector(-20, 0, 0),
                canvas: theCanvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "blue",
                    stroke: "white",
                    pos: new p5.Vector(160, -60, 0),
                    size: new p5.Vector(50, 50, 0),
                    vel: new p5.Vector(20, -15, 0),
                    acc: new p5.Vector(0, 0.5, 0),
                    canvas: theCanvas,
                })
            ], 
            images: [
                new MyImage({
                    image: rightBackgroundImage,
                    pos: new p5.Vector(0, 200, -10),
                    scaleFactor: 0.5,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: rightCannon3,
                    pos: new p5.Vector(30, 105, -9),
                    scaleFactor: 0.15,
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: rightCannon1,
                    pos: new p5.Vector(60, 20, -8),
                    scaleFactor: 0.15,
                    angle: new p5.Vector(0, 0, -40),
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: rightCannon2,
                    pos: new p5.Vector(0, 105, -7),
                    scaleFactor: 0.15,
                    canvas: theCanvas,
                })
            ]
        })),











        

    // scene 3
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                // vel: new p5.Vector(-20, 0, 0)
                omega: new p5.Vector(0, 0, -0.5)
            }),
            shapes: [
                new Shape({
                    shape: "box",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(0, 0, -9),
                    size: new p5.Vector(350, 350, 1),
                    omega: new p5.Vector(0, 0, 0),
                    canvas: theCanvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(0, 0, -7),
                    size: new p5.Vector(25, 25, 0),
                    canvas: theCanvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "red",
                    stroke: "black",
                    pos: new p5.Vector(0, 150, -5),
                    offset: new p5.Vector(0, -150, 0),
                    vel: new p5.Vector(1, 1, 0),
                    size: new p5.Vector(25, 25, 0),
                    omega: new p5.Vector(0, 0, 1 ),
                    showTrail: true,
                    canvas: theCanvas,
                }),

                
            ], 
            images: [
                new MyImage({
                    image: rightGrid,
                    scaleFactor: 1,
                    omega: new p5.Vector(0, 0, -0),
                    pos: new p5.Vector(0, 0, -10),
                    canvas: theCanvas,
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
                size: new p5.Vector(400, 400, 0),
                omega:  new p5.Vector(0, 0, 0),
                canvas: theCanvas,
            }),
            new Shape({
                shape: "sphere",
                fill: "red",
                stroke: "black",
                // pos: new p5.Vector(2500, 300, 0),
                pos: new p5.Vector(0, 500, -400),
                offset: new p5.Vector(0, -500, 0),
                // vel: new p5.Vector(5, 5, 0),
                size: new p5.Vector(50, 50, 0),
                omega: new p5.Vector(-1, 1, 0.5),
                showTrail: true,
                canvas: theCanvas,
            }),
        ], 
        images: [
            new MyImage({
                image: rightGrid,
                scaleFactor: 2,
                // omega: new p5.Vector(0, 0, -0.5),
                pos: new p5.Vector(0, 0, -1000),
                canvas: theCanvas,
            }),
        ]
    }))
}

class Scene
{
    constructor(props)
    {
        this.shapes = props.shapes || [];
        this.images = props.images || [];
        this.buttons = props.buttons || [];
        this.referenceFrame = props.referenceFrame;
        this.backGround = props.backGround || "blue";
        this.canvas = props.canvas;
    }

    display()
    {
        this.images.forEach(image => {
            image.referenceFrame = this.referenceFrame;
            if (playState && !popUpVisible) image.move()
            image.display()
        });

        this.shapes.forEach(shape => {
            shape.referenceFrame = this.referenceFrame;
            if (playState && !popUpVisible) shape.move()
            shape.display()
        });

        this.buttons.forEach(button => {
            if (button.visible) button.display()
        })    
    }
}