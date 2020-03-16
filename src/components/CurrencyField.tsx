import * as React from "react";
import * as cheerio from "cheerio";
import * as request from "request";

const $ = cheerio.load("https://гривна.online");
type CurrencyInput = {
    currency: string;
    type: string;
}

request({
    method: 'GET',
    url: 'https://гривна.online'
}, (err: any, res: any, body: any) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let title = $('title');

    console.log(title.text());
});

export class CurrencyField extends React.Component<CurrencyInput, any> {
    
    render() {
        return (
            <>
                <h1>{$('title').toArray()}</h1>
                <p>{this.props.type} -- {this.props.currency}333</p>
            </>
        )
    }
}
