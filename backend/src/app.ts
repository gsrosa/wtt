import * as express from 'express'
import * as parser from 'body-parser'
import * as cors from 'cors'
import * as morgan from 'morgan'
const consign = require('consign')

class Express {
    public app:express.Application

    constructor(){
        this.app = express()
        this.initialize()
    }

    private initialize(){        
        this.app.use(parser.urlencoded({extended:true}))
        this.app.use(cors())
        this.app.use(morgan('dev'))

        consign({extensions:['.ts'],cwd:'src'}).then('config').into(this.app)
    }
}

export default new Express().app