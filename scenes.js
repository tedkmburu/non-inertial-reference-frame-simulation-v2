function createLeftScenes(theCanvas)
{
    // scene 1
    leftScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                canvas: theCanvas,
            }),
            shapes: [], 
            images: [
                new MyImage({
                    image: leftBackgroundImage,
                    pos: backGroundImagePosition,
                    scaleFactor: 2,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: leftTruckImage,
                    pos: new p5.Vector(0, 70),
                    vel: initialContitions[0].vel,
                    scaleFactor: 0.1,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: leftBallImage,
                    pos: new p5.Vector(0, 55),
                    size: new p5.Vector(25, 25),
                    omega: initialContitions[0].omega,
                    scaleFactor: 1.9,
                    showVelVector: true,
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
                    fill: "rgb(25, 25, 25)",
                    stroke: "gray",
                    pos: new p5.Vector(-140, -60),
                    size: new p5.Vector(25, 25),
                    vel: initialContitions[1].vel,
                    acc: initialContitions[1].acc,
                    showTrail: true,
                    canvas: theCanvas,
                })
            ], 
            images: [
                new MyImage({
                    image: leftBackgroundImage,
                    pos: backGroundImagePosition,
                    scaleFactor: 2,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: leftCannon3,
                    pos: new p5.Vector(-270, 105),
                    scaleFactor: 0.15,
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: leftCannon1,
                    pos: new p5.Vector(-240, 20),
                    scaleFactor: 0.15,
                    angle: new p5.Vector(0, 0),
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: leftCannon2,
                    pos: new p5.Vector(-300, 105),
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
                    fill: "#FAF9F6",
                    stroke: "black",
                    pos: new p5.Vector(0, 0),
                    size: initialContitions[2].tableSize,
                    omega: initialContitions[2].omega,
                    canvas: theCanvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(0, 0),
                    size: new p5.Vector(25, 25),
                    canvas: theCanvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: redColor,
                    stroke: "black",
                    pos: initialContitions[2].pos,
                    vel: initialContitions[2].vel,
                    size: initialContitions[2].ballSize,
                    showTrail: true,
                    showVelVector: true,
                    canvas: theCanvas,
                })
            ], 
            images: [
                new MyImage({
                    image: leftGrid,
                    scaleFactor: 0.5,
                    pos: new p5.Vector(0, 0),
                    canvas: theCanvas,
                }),
            ]
        }))





    // // scene 4
    // leftScenes.push(new Scene({
    //     referenceFrame: new ReferenceFrame({
    //         // vel: new p5.Vector(-20, 0)
    //         pos: new p5.Vector(0, 0, 500),
    //     }),
    //     shapes: [
    //         new Shape({
    //             shape: "sphere",
    //             fill: "rgba(255, 255, 255, 0.5)",
    //             stroke: "black",
    //             pos: new p5.Vector(0, 0),
    //             size: new p5.Vector(200, 200, 0),
    //             omega:  new p5.Vector(0, 1, 0),
    //             canvas: theCanvas,
    //         }),
    //         new Shape({
    //             shape: "sphere",
    //             fill: "red",
    //             stroke: "black",
    //             pos: new p5.Vector(0, -500, 0),
    //             size: new p5.Vector(50, 50, 0),
    //             // omega: new p5.Vector(-1, 1, 0),
    //             showTrail: true,
    //             showVelVector: true,
    //             revolve: true, 
    //             revolveRadius: 500,
    //             revolvePeriod: 4,  
    //             canvas: theCanvas,
    //         }),
    //     ], 
    //     images: [
    //         new MyImage({
    //             image: leftGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(0, 0, -2400),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(0, 2400, 0),
    //             angle: new p5.Vector(90, 0, 0),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(0, -2400, 0),
    //             angle: new p5.Vector(90, 0, 0),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(0, 0, 2400),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(2400, 0, 0),
    //             angle: new p5.Vector(90, 90, 0),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(-2400, -0, 0),
    //             angle: new p5.Vector(90, 90, 0),
    //             canvas: theCanvas,
    //         }),
    //     ]
    // }))

    leftScenes.forEach(scene => {
        scene.leftOrRight = "left"
    })
}







































































function createRightScenes(theCanvas)
{
    // scene 1
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                vel: initialContitions[0].vel.copy().mult(-1),
                canvas: theCanvas,
            }),
            shapes: [], 
            images: [
                new MyImage({
                    image: rightBackgroundImage,
                    pos: backGroundImagePosition,
                    scaleFactor: 2,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: rightTruckImage,
                    pos: new p5.Vector(300, 70),
                    vel: initialContitions[0].vel,
                    scaleFactor: 0.1,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: rightBallImage,
                    pos: new p5.Vector(300, 55),
                    size: new p5.Vector(25, 25),
                    omega: initialContitions[0].omega,
                    scaleFactor: 1.9,
                    canvas: theCanvas,
                })
            ]
        })),










    // scene 2
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                vel: initialContitions[1].vel.copy().mult(-1),
                acc: initialContitions[1].acc.copy().mult(-1),
                canvas: theCanvas,
            }),
            shapes: [
                new Shape({
                    shape: "ellipse",
                    fill: "rgb(25, 25, 25)",
                    stroke: "gray",
                    pos: new p5.Vector(160, -60),
                    size: new p5.Vector(25, 25),
                    vel: initialContitions[1].vel,
                    acc: initialContitions[1].acc,
                    showTrail: true,
                    canvas: theCanvas,
                })
            ], 
            images: [
                new MyImage({
                    image: rightBackgroundImage,
                    pos: backGroundImagePosition,
                    scaleFactor: 2,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: rightCannon3,
                    pos: new p5.Vector(30, 105),
                    scaleFactor: 0.15,
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: rightCannon1,
                    pos: new p5.Vector(60, 20),
                    scaleFactor: 0.15,
                    angle: new p5.Vector(0, 0),
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: rightCannon2,
                    pos: new p5.Vector(0, 105),
                    scaleFactor: 0.15,
                    canvas: theCanvas,
                })
            ]
        })),











        

    // scene 3
    rightScenes.push(new Scene({
            referenceFrame: new ReferenceFrame({
                // vel: new p5.Vector(-20, 0, 0)
                // omega: new p5.Vector(0, 0, -0.5)
                omega: new p5.Vector(0, 0)
            }),
            shapes: [
                new Shape({
                    shape: "box",
                    fill: "#FAF9F6",
                    stroke: "black",
                    pos: new p5.Vector(0, 0),
                    size: initialContitions[2].tableSize,
                    // omega: new p5.Vector(0, 0, 0.5),
                    omega: new p5.Vector(0, 0),
                    canvas: theCanvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: "white",
                    stroke: "black",
                    pos: new p5.Vector(0, 0),
                    size: new p5.Vector(25, 25),
                    canvas: theCanvas,
                }),
                new Shape({
                    shape: "ellipse",
                    fill: redColor,
                    stroke: "black",
                    pos: initialContitions[2].pos,
                    size: initialContitions[2].ballSize,
                    showVelVector: true,
                    showCorVector: true,
                    showCentVector: true,
                    nonInertial: true,
                    showTrail: true,
                    canvas: theCanvas,
                })
                
            ], 
            images: [
                new MyImage({
                    image: rightGrid,
                    scaleFactor: 0.5,
                    omega: initialContitions[2].omega.copy().mult(-1),
                    pos: new p5.Vector(0, 0),
                    canvas: theCanvas,
                }),
            ]
        }))








    // // // scene 4
    // rightScenes.push(new Scene({
    //     referenceFrame: new ReferenceFrame({
    //         // vel: new p5.Vector(-20, 0)
    //     }),
    //     shapes: [
    //         new Shape({
    //             shape: "sphere",
    //             fill: "white",
    //             stroke: "black",
    //             size: new p5.Vector(200, 200, 0),
    //             canvas: theCanvas,
    //         }),
    //         new Shape({
    //             shape: "sphere",
    //             fill: "red",
    //             stroke: "black",
    //             pos: new p5.Vector(0, -500, 0),
    //             size: new p5.Vector(50, 50, 0),
    //             // omega: new p5.Vector(-1, 1, 0),
    //             showTrail: true,
    //             showVelVector: true,
    //             showCentVector: true,
    //             showCorVector: true,
    //             revolve: true, 
    //             revolveRadius: 500, 
    //             revolvePeriod: 4,  
    //             canvas: theCanvas,
    //         }),
    //     ], 
    //     images: [
    //         new MyImage({
    //             image: leftGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(0, 0, -2400),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(0, 2400, 0),
    //             angle: new p5.Vector(90, 0, 0),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(0, -2400, 0),
    //             angle: new p5.Vector(90, 0, 0),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(0, 0, 2400),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(2400, 0, 0),
    //             angle: new p5.Vector(90, 90, 0),
    //             canvas: theCanvas,
    //         }),
    //         new MyImage({
    //             image: rightGrid,
    //             scaleFactor: 3,
    //             // omega: new p5.Vector(0, 0, -0.5),
    //             pos: new p5.Vector(-2400, -0, 0),
    //             angle: new p5.Vector(90, 90, 0),
    //             canvas: theCanvas,
    //         }),
    //     ]
    // }))

    rightScenes.forEach(scene => {
        scene.leftOrRight = "right"
    })
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
        this.leftOrRight;
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
            shape.displayForces(this.leftOrRight) 
            shape.display()
        });

        this.buttons.forEach(button => {
            if (button.visible) button.display()
        })    
    }
}