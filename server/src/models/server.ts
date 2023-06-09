import express, {Application} from 'express';
import cors from 'cors';
import routesTask from '../routes/task';
import routesUser from '../routes/user';
import { Task } from './task';
import { User } from './user';

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();        
        this.routes();
        this.dbConnect();
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Aplicación corriendo en el puerto http://localhost:' + this.port);
            
        })
    }

    routes(){
        this.app.use('/api/tasks', routesTask);
        this.app.use('/api/users', routesUser);
    }

    midlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect(){
        try {
            await Task.sync();
            await User.sync();          
        } catch (error) {
            console.log('No se puede conectar a la base de datos debido a: ',error);            
        }
    }
    
}

export default Server;