import { NextFunction, Request, Response } from 'express';


export const validateKey = (req: Request, Response: Response, next: NextFunction)  => {
    try {
        const apiKey = req.headers['X-API-Key'] || req.headers['x-api-key'];
        console.log(apiKey);
        
        if(apiKey === 'g4bWl2eSKX3QQ4tgR0yZ31TzwpZcO796akpF0Zuy'){
            return next();
        }else{
            console.log('error');
        }
       
      } catch (err) {
        console.log('error');
        return Response.send({ error: 'APIKEY' });
      }
}