import {Application} from 'express'
import * as mongoose from 'mongoose'

class Mongodb {
    app:Application

    constructor(app:Application){
        this.app = app
    }
}

export default (app:Application) => new Mongodb(app)