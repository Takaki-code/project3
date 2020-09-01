//引用express模块
const myExpress = require('express');
const bodyParser = require('body-parser');
const router = require('./router/user');
const viewRouter = require('./router/viewRouter');
const ejs = require('ejs');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// 实例化
const app = myExpress();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({
    secret: '54321',
    name: 'loginUser',
    cookie: { maxAge: 360000 },//单位毫秒，登录状态失效时间。
    // rolling:true,//更新session-cookies失效时间。
    // resave:true //重新保存
}))

app.use(router);
app.use(viewRouter);
app.set('views', __dirname + '/view');
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(myExpress.static(__dirname + '/public'));


// 监听端口
app.listen(1820);
console.log('')
console.log('---------服务启动---------')