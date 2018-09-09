'use strict';

const fs = require('fs');

function listAll(request, response) {
    const rawData = fs.readFileSync('./data/books.json');

    return  response.json(JSON.parse(rawData));
}

module.exports = {
    listAll: listAll
};