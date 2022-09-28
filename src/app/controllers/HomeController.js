
const Courses = require('../model/courses')
const {mutipleMongooseToObject} = require('../../util/mongoose')


class OrderController{
    index(req,res,next){

        Courses.find({})
        .then(courses => {
            
            res.render('home',{courses: mutipleMongooseToObject(courses)})
        })
        .catch(next)
    }
    search(req,res){
        res.render('search')
    }
}


module.exports = new OrderController()

