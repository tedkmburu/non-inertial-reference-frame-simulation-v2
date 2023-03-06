function createInitialConditions()
{
    initialContitions[0] = {
        vel: new p5.Vector(5, 0, 0),
        omega: new p5.Vector(0, 0, -2)
    }

    initialContitions[1] = {
        vel: new p5.Vector(15, -10, 0),
        acc: new p5.Vector(0, 0.5, 0),
    }

    let tableSizeInt = landscape ? innerWidth * 0.4 : innerHeight * 0.4
    tableSize = new p5.Vector(tableSizeInt, tableSizeInt, 1)

    initialContitions[2] = {
        vel: new p5.Vector(0.5, 1, 0),
        omega: new p5.Vector(0, 0, 0.5),
        ballSize: new p5.Vector(25, 25, 0),
        tableSize: tableSize,
        pos: new p5.Vector(0, -150, 3),
    }
}