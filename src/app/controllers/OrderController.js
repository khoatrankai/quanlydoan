
const Courses = require('../model/courses')


class OrderController{
    index(req,res,next){
        if(req.params.name != "")
        {
           Courses.findOne({name: req.params.name})
        .then(course => {
            res.render('order',{course})
        })
        .catch(next)
        }else{
                
        }
        
        
    }
    
}


module.exports = new OrderController()

