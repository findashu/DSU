const Project = require('./projectSchema')



exports.createProject = (projectObj) => {
    let proj = new Project(projectObj);
    return proj.save();
}

exports.listProjects = async (filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            let count = await Project.find(filter).countDocuments();
            let documents = await Project.find(filter);
            console.log(count, documents);
            resolve({ total: count, data: documents })
        } catch (err) {
            reject(err);
        }
    })
}

exports.updateOne = (id, data) => {
    return new Promise((resolve, reject) => {
        Project.findByIdAndUpdate(id, { $set: data, $inc: { __v: 1 } }, { new: true }).then(data => {
            resolve(data);
        }).catch(err => reject(err))
    })
}

exports.deleteOne = (id) => {
    return new Promise((resolve, reject) => {
        Project.findByIdAndDelete(id).then(data => {
            resolve(data)
        }).catch(err => reject(err))
    })
}