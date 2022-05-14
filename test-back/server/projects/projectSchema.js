const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    title : {
        type:String,
        minLength:2,
        required: true,
    },
    alias : {
        type:String,
        unique : true,
        required: true
    },
    shortDescription : String,
    description : String,
    author : String,
    tags: [String],
    imageUrl : String,
    githubUrl : String,
    relatedProject: [{title : String, link : String}]
}, {timestamps: true});


module.exports = mongoose.model('projects', projectSchema);