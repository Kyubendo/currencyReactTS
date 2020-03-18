const request = require("request");
const cheerio = require("cheerio");


export function getData() {
    request("https://finance.ua/ua/currency", (err, response, html)=> {
        if (!err && response.statusCode === 200) {
            const $ = cheerio.load(html);
            const value = $('.b-market-table_currency-cash .major:nth-child(3) .c2');
            return(value.text())
        }
        return 0;
    });
}




