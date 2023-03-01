import mongoose from 'mongoose';
import {app} from './app';

const port:string|undefined = process.env.PORT;

const startServer =async () => {
    try {
        //await mongoose.connect(process.env.MONGODB_URL!)
        //await mongoose.connect("mongodb://127.0.0.1/test")
        //console.log("Connected to DB");
        app.listen(port, () => console.log("Server running on port",port))
        
    } catch (e) {
        console.log(e);
        
    }
}

startServer();
