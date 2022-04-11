export const validateKey = (req: any, Response:any, next: any)  => {
    try {
        const apiKey = req.headers['X-API-Key'] || req.headers['x-api-key'];
        console.log(apiKey);
        
        if(apiKey === '123'){
            return next();
        }
       
      } catch (err) {
        Response.status(400);
        return Response.send({ error: Response.message });
      }
}