const fs = require('fs');

exports.get = (req, res) => {
    let itensJson = fs.readFileSync('modelo-resposta-api.json');
    let itens = JSON.parse(itensJson);

    res.send(itens);
};

exports.getRecommendation = (req, res) => {
    let itensJson = fs.readFileSync('modelo-resposta-api.json');
    let itens = JSON.parse(itensJson);

    let filterItem = itens.data.recommendation.filter(elem => elem.businessId === req.params.id);
    res.send(filterItem);
}