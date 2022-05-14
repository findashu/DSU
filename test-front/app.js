let express = require('express');
let app = express();
let hbs = require('hbs');
let indexRouter = require('./routes/index')

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static(__dirname+'/static'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/', indexRouter);

app.listen(3002, () => {
    console.log(`Server up n running on port ${3002}`)
});