const fs = require('fs');

let itensJson = fs.readFileSync('modelo-resposta-api.json');
let itens = JSON.parse(itensJson);

exports.get = (req, res) => {
    res.send(itens);
};

exports.getRecommendation = (req, res) => {
    let filterItem = itens.data.recommendation.filter(elem => elem.businessId === req.params.id);
    res.send(filterItem);
}