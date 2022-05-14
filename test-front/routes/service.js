let axios = require('axios');

module.exports.listProject = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/projects').then(data => {
            resolve(data) 
        }).catch(err => reject(err))
    })
};

module.exports.createProject = (bodyData) => {
    return new Promise((resolve,reject) => {
        axios.post('http://localhost:3000/projects', bodyData).then(apiData => {
        console.log('Data api ',apiData.data);
        resolve(apiData.data)
        }).catch(err => reject(err))
    })
}