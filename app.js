
var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();
var bodyParser = require('body-parser');

db_config.connect(conn);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function(req, res){
  res.render('main.ejs');
});

app.get('/list', function (req, res) {
    var sql = 'SELECT * FROM board';
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('list.ejs', {list : rows});
    });
});

app.get('/read/:name', function (req, res, next) {
var name = req.params.name;
  console.log("name : "+name);
conn.query(`SELECT name, dis FROM list where name="${name}"`, function(err,rows){
console.log(rows);
res.render('read',{name:rows[0].name, dis:rows[0].dis, rows : rows});
})
});

app.listen(7115, () => console.log('Server is running on port 7115...'));