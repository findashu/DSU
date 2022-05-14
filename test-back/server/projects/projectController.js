const projectService = require('./projectService')

exports.create = (req,res,next) => {
    let reqObj = req.body;
    reqObj.alias = reqObj.title.toLowerCase().split(' ').join('-');
    projectService.createProject(reqObj).then(data => {
        res.json({message:'Project created success',data: data})
    }).catch (err => next(err))
}

exports.list = (req,res,next) => {
    projectService.listProjects({}).then(data => {
        res.status(200).json(data)
    }).catch(err => next(err))
}

exports.update = (req,res,next) => {
    let id = req.params.id
    let data = req.body;
    projectService.updateOne(id,data).then(data => {
        res.status(200).json(data)
    }).catch(err => next(err))
}

exports.delete = (req,res,next) => {
    let id = req.params.id;
    projectService.deleteOne(id).then(data => {
        res.status(200).json({message:`Project with id ${id} deleted successfully`})
    }).catch(err => {next(err)})
}