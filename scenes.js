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
                    pos: new p5.Vector(halfCanvas.x, halfCanvas.y + 87),
                    acc: initialContitions[0].acc.copy(),
                    // cannon: new p5.Vector(0, 0),
                    scaleFactor: 0.1,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: leftBallImage,
                    pos: new p5.Vector(halfCanvas.x,  halfCanvas.y + 75),
                    size: new p5.Vector(25, 25),
                    omega: initialContitions[0].omega,
                    scaleFactor: 1.9,
                    showVelVector: true,
                    velVectorScale: 0.25,
                    showTrail: true,
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
                    pos: new p5.Vector(240, halfCanvas.y - 20),
                    size: new p5.Vector(25, 25),
                    vel: initialContitions[1].vel.copy(),
                    acc: initialContitions[1].acc.copy(),
                    showTrail: true,
                    showVelVector: true,
                    velVectorScale: 0.08,
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
                    pos: new p5.Vector(100, halfCanvas.y + 120),
                    scaleFactor: 0.15,
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: leftCannon1,
                    pos: new p5.Vector(130, halfCanvas.y + 45),
                    scaleFactor: 0.15,
                    angle: -30,
                    cannon: true,
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: leftCannon2,
                    pos: new p5.Vector(70, halfCanvas.y + 120),
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
                    shape: "rect",
                    fill: "#FAF9F6",
                    stroke: "black",
                    pos: new p5.Vector(0, 0),
                    size: initialContitions[2].tableSize.copy(),
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
                    pos: initialContitions[2].pos.copy(),
                    vel: initialContitions[2].vel.copy(),
                    size: initialContitions[2].ballSize.copy(),
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
                acc: initialContitions[0].acc.copy().mult(-1),
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
                    pos: new p5.Vector(halfCanvas.x + 300, halfCanvas.y + 87),
                    // acc: initialContitions[0].acc.copy().mult(1),
                    scaleFactor: 0.1,
                    canvas: theCanvas,
                }),
                new MyImage({
                    image: rightBallImage,
                    pos: new p5.Vector(halfCanvas.x + 300,  halfCanvas.y + 75),
                    size: new p5.Vector(25, 25),
                    omega: initialContitions[0].omega,
                    showVelVector: true,
                    velVectorScale: 0.25,
                    showTrail: true,
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
                    pos: new p5.Vector(halfCanvas.x + 220,  halfCanvas.y - 20),
                    size: new p5.Vector(25, 25),
                    vel: initialContitions[1].vel.copy(),
                    acc: initialContitions[1].acc.copy(),
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
                    pos: new p5.Vector(halfCanvas.x + 80, halfCanvas.y + 120),
                    scaleFactor: 0.15,
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: rightCannon1,
                    pos: new p5.Vector(halfCanvas.x + 110, halfCanvas.y + 45),
                    scaleFactor: 0.15,
                    showTrail: true,
                    angle: -30,
                    cannon: true,
                    canvas: theCanvas,
                }), 
                new MyImage({
                    image: rightCannon2,
                    pos: new p5.Vector(halfCanvas.x + 50, halfCanvas.y + 120),
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
                canvas: theCanvas,
                omega: 0
            }),
            shapes: [
                new Shape({
                    shape: "rect",
                    fill: "#FAF9F6",
                    stroke: "black",
                    pos: new p5.Vector(0, 0),
                    size: initialContitions[2].tableSize.copy(),
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
                    pos: initialContitions[2].pos.copy(),
                    vel: initialContitions[2].vel.copy(),
                    size: initialContitions[2].ballSize.copy(),
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
                    omega: initialContitions[2].omega * -1,
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


function resetAllScenes()
{
    leftScenes.forEach(scene => {
        scene.shapes.forEach(shape => {
            shape.reset()
        })
        scene.images.forEach(image => {
            image.reset()
        })

        scene.referenceFrame.reset();
        
    })

    rightScenes.forEach(scene => {
        scene.shapes.forEach(shape => {
            shape.reset()
        })
        scene.images.forEach(image => {
            image.reset()
        })

        scene.referenceFrame.reset();
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
            image.displayForces(this.leftOrRight) 
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

        // vel
        // let velVector = new Arrow({
        //     pos: rightScenes[1].images[1].pos.copy(), 
        //     vel: rightScenes[1].referenceFrame.vel.copy(), 
        //     angle: rightScenes[1].referenceFrame.vel.copy().angle, 
        //     fill: redColor, 
        //     canvas: this.canvas,
        //     scaleFactor: 2.5,
        //     image: rightVelImage
        // })
        
        // velVector.display()
    }

    reset()
    {
        this.images.forEach(image => {
            image.reset()
        });

        this.shapes.forEach(shape => {
            shape.reset()
        });

        this.buttons.forEach(button => {
            button.reset()
        })   

        this.referenceFrame.reset()
    }
}