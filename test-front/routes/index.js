let express = require('express');
let router = express.Router();
let service = require('./service');


router.get('/',(req,res,next) => {
    service.listProject().then(dt => {
        console.log(dt.data)
        res.render('index',{
            title:"Ashu : Portfolio",
            projects: dt.data.data
        })
    }).catch(err => {
        next(err)
    });
});

router.get('/create-project', (req,res,next) => {
    res.render('create-project',{
        title:"Create Project"
    })
})

router.post('/create-project', (req,res,next) => {
    let body = req.body;
    console.log(body);
    service.createProject(body).then(data => {
        res.redirect('/')
    }).catch(err => next(err))


})

module.exports = router;