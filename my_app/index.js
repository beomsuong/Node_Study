import  express from 'express';
import path from 'path'
import nunjucks from 'nunjucks'

const app= express();
const __dirname=path.resolve();

app.set('view engine', 'html');

nunjucks.configure('views',{
    watch :true,
    express:app
})

app.get('/',(req,res)=>{
    //res.send('<h1>Hello Main page</h1>');
    res.sendFile(__dirname + '/public/main.html');
});

app.get('/write',(req,res)=>{
    res.render('write.html');
});

app.listen(3000,()=>{
    console.log('Server is running');
});