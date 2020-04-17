const batchDao = require('./storage/batchStorage');

function initBatch(app, jsonParser) {

    //get batches by invoice id
    app.get('/batchinv/:id', function(req, res) {
        let invId = req.params.id;
        //TODO - check token + session 
        res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" });
        batchDao.getBatchesByInvoiceId(invId).then((data) => {
            let dataToSend = JSON.stringify(data[0]);
            res.write(dataToSend);
            res.end();
        }).catch(err => {
            res.write(err.stack);
            res.end();
        });
    });

}

module.exports = { initBatch }