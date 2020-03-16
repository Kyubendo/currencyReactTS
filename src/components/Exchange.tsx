import * as React from "react";
import {CurrencyField} from "./CurrencyField";

type Currency = {
    currency: string;
}

export class Exchange extends React.Component<Currency, any> {
    constructor(props: Currency) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.currency}</h2>
                <CurrencyField currency={this.props.currency} type="buy"/>
                <CurrencyField currency={this.props.currency} type="sell"/>
            </div>
        )
    }
}
