import { Request, Response } from 'express';
import { Task } from '../models/task';

export const getTask = async (req: Request, res: Response) => {
    const listTask = await Task.findAll()
    res.json(listTask)
} 