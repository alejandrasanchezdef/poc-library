"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateKey = void 0;
const validateKey = (req, Response, next) => {
    try {
        const apiKey = req.headers['X-API-Key'] || req.headers['x-api-key'];
        console.log(apiKey);
        if (apiKey === '123') {
            return next();
        }
    }
    catch (err) {
        Response.status(400);
        return Response.send({ error: Response.message });
    }
};
exports.validateKey = validateKey;
