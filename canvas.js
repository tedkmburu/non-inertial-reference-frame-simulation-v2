class Canvas 
{
    constructor(props)
    {
        this.preload = props.preload
        this.setup = props.setup
        this.draw = props.draw
        this.windowResized = props.windowResized
        this.mouseClicked = props.mouseClicked
        this.classes = props.classes

        if (props.preload != null) props.preload()
        if (props.setup != null) props.setup()
        if (props.draw != null) props.draw()
        if (props.windowResized != null) props.windowResized()
        if (props.mouseClicked != null) props.mouseClicked()
    }

    loop()
    {
        this.draw()
    }


}