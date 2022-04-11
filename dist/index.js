"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateKey = void 0;
const validateKey = (req, Response, next) => {
    try {
        const apiKey = req.headers['X-API-Key'] || req.headers['x-api-key'];
        console.log(apiKey);
        if (apiKey === 'g4bWl2eSKX3QQ4tgR0yZ31TzwpZcO796akpF0Zuy') {
            return next();
        }
        else {
            console.log('error');
        }
    }
    catch (err) {
        console.log('error');
        return Response.send({ error: 'APIKEY' });
    }
};
exports.validateKey = validateKey;
