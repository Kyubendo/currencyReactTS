import * as React from "react";
import {Exchange} from "./Exchange";

export class Container extends React.Component<any, any> {

    render() {
        return (
            <>
                <Exchange currency={"USD"}/>
                <Exchange currency={"EUR"}/>
            </>
        )
    }
}
