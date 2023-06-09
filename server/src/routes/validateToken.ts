import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const validateToken = (req:Request, res:Response, next: NextFunction) =>{
        
    const headerToken = req.headers['authorization']
    
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        
        try {
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'po2?0h3mlyuQA*ete4t&');
            next(); 
        } catch (error) {
            res.status(401).json({
                msg: 'Token no valido'
            })
        }
        
        
    } else {
        return res.status(401).json({
            msg: 'Acceso denegado'
        })
    }
};

export default validateToken;