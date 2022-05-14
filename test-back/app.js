let express = require('express');
let app = express();
let mongoose = require('mongoose');
let projectRouter = require('./server/projects/projectRouter')

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/my-db',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(d => console.log('Db connected success'))
    .catch(err => console.log('Error connecting', err));

app.get('/', function(req,res,next) {
    res.send('API up and running');
});

app.use('/projects', projectRouter);

app.listen(3000, (err) => {
    if(err) console.error(err);
    console.log('Server up and running on port 3000')
})

app.use('*', (req,res) => {
    res.status(404).json({message: 'Reuested URL not found'})
});

app.use((err, req,res,next) => {
    if(err) {
        console.log(err);
        res.json({error: err.message})
    }
})