const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(req, res) {
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let result;
    let symbol;

    switch (method) {
        case 'add':
            result = x + y;
            symbol = '+';
            break;
        case 'subtract':
            result = x - y;
            symbol = '-';
            break;
        case 'multiply':
            result = x * y;
            symbol = '*';
            break;
        case 'divide':
            result = x / y;
            symbol = '/';
            break;
        default:
            res.end('Invalid method parameter. Please provide one of: add, subtract, multiply, divide');
            return;
    }

    res.end(`${x} ${symbol} ${y} = ${result}`);
}

app.use('/lab2', calculate);

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});