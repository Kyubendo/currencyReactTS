import * as React from "react";
import {CurrencyField} from "./CurrencyField";

type Currency = {
    currency: string;
}

export class Exchange extends React.Component<Currency, any> {
    render() {
        return (
            <div className={"exchange"}>
                <h2 className={"exchange-title"}>{this.props.currency.toLocaleUpperCase()}</h2>
                <CurrencyField currency={this.props.currency} buyOrSell="buy"/>
                <CurrencyField currency={this.props.currency} buyOrSell="sell"/>
            </div>
        )
    }
}
