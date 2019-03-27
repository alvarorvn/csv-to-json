const csvToJson = require('csvtojson')

const fileCSV = './customer-data.csv'

csvToJson()
    .fromFile(fileCSV)
    .then((jsonObj) => {
        console.log(jsonObj)
    })