import * as React from "react";
import * as cheerio from "cheerio";
import axios from 'axios'

const currencyTypes: {[index: string]:any} = {usd: '1', eur: '2', rub: '3'};
const buyOrSellTypes: {[index: string]:any} = {buy: '2', sell: '3'};

type curr = {
    usd: string;
    eur: string;
    rub: string;
}

type Props = {
    currency: string;
    buyOrSell: string;
}

type State = {
    value: string;
}


export class CurrencyField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        axios
            .get('https://finance.ua/ua/currency', {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(res => {
                const $ = cheerio.load(res.data);
                const value = $(`.b-market-table_currency-cash .major:nth-child(${
                    currencyTypes[this.props.currency]
                    }) .c${buyOrSellTypes[this.props.buyOrSell]}`);
                this.setState({value: value.text()});
            })
            .catch(err => console.log(err));

        this.buyOrSell = this.buyOrSell.bind(this)
    }

    buyOrSell() {
        const text = this.props.buyOrSell;
        return (text.charAt(0).toUpperCase() + text.slice(1))
    }


    render() {
        let value = 'Loading..';
        if (this.state) value = this.state.value;



        return (
            <>
                <p>{this.buyOrSell()} &mdash; {value}</p>
            </>
        )
    }
}
