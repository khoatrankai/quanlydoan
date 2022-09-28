const Courses = require('../model/courses')
// const {mutipleMongooseToObject} = require('../../util/mongoose')


class CreateController{
    create(req,res,next){

            res.render('./courses/create')
    }
    store(req,res,next){
        res.json(req.body)
    }
    search(req,res){
        res.render('search')
    }
}


module.exports = new CreateController()