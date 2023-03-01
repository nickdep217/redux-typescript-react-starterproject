import express from 'express'
import cors from 'cors'
import "dotenv/config"

const app:express.Application = express();
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
    res.send({message: ""})
})


export {app}