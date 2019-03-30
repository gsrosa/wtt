import * as express from 'express'
import * as parser from 'body-parser'

class Express {
    public app:express.Application

    constructor(){
        this.app = express()
        this.initialize()
    }

    private initialize(){        
        this.app.use(parser({extended:true}))
    }
}

export default new Express().app