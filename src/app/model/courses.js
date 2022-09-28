const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema

const Courses = new schema({
    name: {type: String},
    img: {type: String},
    price: {type: String}
})

module.exports = mongoose.model('Courses', Courses);