import * as React from "react";
import {Exchange} from "./Exchange";

export class Container extends React.Component<any, any> {

    render() {
        return (
            <div className={"container"}>
                <Exchange currency={"usd"}/>
                <Exchange currency={"eur"}/>
                <Exchange currency={"rub"}/>
            </div>
        )
    }
}
