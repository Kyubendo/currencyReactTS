import * as React from "react";

type TimeState = {
    time: Date;
}

export class Hello extends React.Component<{}, TimeState> {

    constructor() {
        super({});
        this.state = {time: new Date()};
    }

    render(){
        return (
            <h1>Hello, it's {this.state.time.toLocaleDateString()}.</h1>
        )
    }
}

