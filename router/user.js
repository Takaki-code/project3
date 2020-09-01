const router = require('express').Router();
const mysql = require('./sql');

//登录判断
router.post('/login.do', (res, rep) => {
    let sql = 'SELECT * FROM users WHERE userName = ? AND pwd = ?';
    let username = res.body.username;
    let pwd = res.body.pwd;
    mysql.query(sql, [username, pwd], (err, data) => {
        if (err) {
            rep.send({ code: 500, messg: '数据库错误' })
            console.log(err)
        } else {
            // affectedRows
            if (data.length > 0) {
                // 登录用户信息
                res.session.user = username;
                res.session.toux = data[0].headImg
                rep.send({ code: 200, messg: '登录成功' })
            } else {
                rep.send({ code: 200, messg: '用户名或密码错误' })
            }
        }
    })
})
//退出登录
router.get('/logout.do', (res, rep) => {
    res.session.user = '';
    res.session.toux = '';
    rep.send({ code: 200, messg: "已退出登录" })
})
// 注册
router.post('/reg.do', (request, response) => {
    let user = request.body.username;
    let pwd = request.body.pwd;
    let sql = 'INSERT INTO users(userName,pwd) VALUES(?,?)';
    let sql2 = 'SELECT userName FROM users WHERE userName = ?';
    mysql.query(sql2, [user], (err, data) => {
        if (err) {
            console.log(err);
            response.send({ code: 500, messg: '数据库错误' })
        } else {
            if (data.length > 0) {
                response.send({ code: 202, messg: '注册失败，用户名重复' })
            } else {
                mysql.query(sql, [user, pwd], (err, data) => {
                    if (err) {
                        console.log(err);
                        response.send({ code: 500, messg: '数据库错误' })
                    } else {
                        if (data.affectedRows > 0) {
                            response.send({ code: 200, messg: '注册成功' })
                        } else {
                            response.send({ code: 201, messg: '注册失败' })
                        }
                    }
                })
            }
        }
    })

})
router.get('/', (req, res) => {
    res.redirect('/index.html')
})
//购物车
router.get('/shopcar.do', (request, response) => {
    let num = request.query.num;
    let color = request.query.color;
    let guige = request.query.guige;
    let shopid = request.query.id;
    let sql = 'SELECT * FROM shop_m WHERE shop_id = ?';
    let sql2 = 'SELECT * FROM shopcar WHERE shop_id = ?';
    mysql.query(sql2, [shopid], (err, data) => {
        if (err) {
            console.log(err)
            response.send({ code: 500, messg: '数据库错误' });
        } else {
            if (data.length > 0) {
                //重复商品,修改表字段
                console.log(data[0].num, num)
                num = Number(data[0].num) + Number(num);
                let total = data[0].price * num;
                let sql3 = 'UPDATE shopcar SET num = ?,total=? WHERE shop_id = ?';
                mysql.query(sql3, [num, total, shopid], (err, data) => {
                    if (err) {
                        console.log(err);
                        response.send({ code: 500, messg: '数据库错误' });
                    } else {
                        response.send({ code: 500, messg: '添加成功，请到购物车查看' });
                    }
                })
            } else {
                // 不重复商品，查询相关商品信息后添加到购物车表
                mysql.query(sql, [shopid], (err, data) => {
                    if (err) {
                        console.log(err);
                        response.send({ code: 500, messg: '数据库错误' });
                    } else {
                        let sql4 = 'INSERT INTO shopcar VALUES(?,?,?,?,?,?,?,?,?)';
                        let total = data[0].price * num;
                        let user = request.session.user;
                        let arr = [shopid, user, data[0].shopName, data[0].img1, color, guige, data[0].price, num, total]
                        mysql.query(sql4, arr, (err, data) => {
                            if (err) {
                                console.log(err);
                                response.send({ code: 500, messg: '数据库错误' });
                            } else {
                                response.send({ code: 500, messg: '添加成功，请到购物车查看' });
                            }
                        })
                    }
                })
            }
        }
    })

})
// 购物车数量修改
router.get('/shopnum.do', (req, res) => {
    let num = req.query.num;
    let id = req.query.id;
    let total = req.query.total;
    let sql = 'UPDATE shopcar SET num = ?,total=? WHERE shop_id = ?'
    mysql.query(sql, [num, total, id], (err, data) => {
        if (err) {
            console.log(err);
            res.send({ code: 500, messg: '数据库错误' })
        } else {
            res.send({ code: 200, messg: '修改成功' })
        }
    });

})
// 购物车删除
router.get('/shopremove.do', (req, res) => {
    let id = req.query.id;
    let sql = 'DELETE FROM shopcar WHERE shop_id=?'
    mysql.query(sql, [id], (err, data) => {
        if (err) {
            console.log(err);
            res.send({ code: 500, messg: '数据库错误' })
        } else {
            if (data.affectedRows > 0) {
                res.send({ code: 200, messg: '删除成功' })
            }else{
                res.send({ code: 201, messg: '删除失败' })
            }
        }
    })
})
module.exports = router;