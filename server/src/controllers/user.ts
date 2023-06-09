import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

export const newUser = async (req:Request, res:Response) => {
    
    const {username, password} = req.body;
     
    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await User.findOne({ where: {username:username}});
    
    if (user) {
        return res.status(401).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    } 
    
    try {

        await User.create({
            username: username,
            password: hashedPassword,
        })

        res.json({
            msg: `Usuario ${username} registrado correctamente`,
        })

    } catch (error) {

        res.status(401).json({
            msg: 'Upps ocurrio un error',
            error
        })

    }

}

export const loginUser = async (req:Request, res:Response) => {
    
    const {username, password} = req.body;

    const user:any = await User.findOne({where: {username:username}});
    
    
    if (!user) {
        return res.status(401).json({
            msg: `El usuario ${username} no esta registrado en el sistema`,
        })
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
        return res.status(401).json({
            msg: 'Credenciales incorrectas'
        })
    }   

    const token = jwt.sign({
        username:username
    },process.env.SECRET_KEY || 'w$_hOne9aPe-7i7*MAWR', {
        expiresIn: process.env.EXPIRES_KEY ||'2d',
    })
    
    res.json(token)
}