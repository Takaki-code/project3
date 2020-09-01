const router = require('express').Router();
const mysql = require('./sql');

//ejs
// 首页
router.get('/index.html', (res, rep) => {
    let sql = ' SELECT * FROM shop WHERE is_index = 1';
    mysql.query(sql, [], (err, data) => {
        if (err) {
            console.log(err)
        } else {
            if (res.session.user) {
                rep.render('index', { user: res.session.user, headimg: res.session.toux, info: data });
            } else {
                rep.render('index', { user: res.session.user, info: data });
            }
        }
    })

})
// 产品列表
router.get('/zhihuichanpin.html', (res, rep) => {
    let dataClass = 'all';
    if (res.query.dataClass) {
        dataClass = res.query.dataClass;
    }
    let sql = ' SELECT * FROM shop WHERE 1=1';
    if (dataClass == 'all') {
        sql = sql;
    } else {
        sql += ` and shop_class='${dataClass}'`;
    }
    mysql.query(sql, [], (err, data) => {
        if (err) {
            console.log(err)
        } else {
            if (res.session.user) {
                rep.render('zhihuichanpin', { user: res.session.user, headimg: res.session.toux, info: data });
            } else {
                rep.render('zhihuichanpin', { user: res.session.user, info: data });
            }
        }
    })
})
//商品详情
router.get('/shop.html', (res, rep) => {
    let shopclass = res.query.shopId;
    let sql = 'SELECT * FROM shop_m WHERE shop_id=?'
    mysql.query(sql, [shopclass], (err, data) => {
        if (err) {
            console.log(err)
        } else {
            if (res.session.user) {
                rep.render('shop', { user: res.session.user, headimg: res.session.toux, info: data });
            } else {
                rep.render('shop', { user: res.session.user, info: data });
            }
        }
    })
})
//购物车
router.get('/shopcar.html', (res, rep) => {
    let username = res.session.user;
    let sql = 'SELECT * FROM shopcar WHERE userName = ?'
    mysql.query(sql, [username], (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            rep.render('shopcar', { user: res.session.user, headimg: res.session.toux, info: data });
        }
    })

})
module.exports = router;