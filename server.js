import express from 'express';

const app = express();

app.get('/test-sync', syncFunc);
function syncFunc (req, res) {
    res.send('Hello sync');
}

// comment to disable error throws
app.get('/test-async', asyncFunc);
async function asyncFunc (req, res) {
    const value = await someAPICallMock();
    res.send(value);
}

function someAPICallMock () {
    return new Promise(resolve => {
        setTimeout(() => resolve('Success'), 500);
    });
}

app.listen(8080);
console.log('Server is started on 8080');
