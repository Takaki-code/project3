$(function () {
    login();
})
function maAjax(method, url, parameter) {
    return new Promise(function (resolve, reject) {
        var xhr;
        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHttp');
        }
        //get传参
        if (method == 'get') {
            url += '?' + parameter;
        }
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                resolve(JSON.parse(xhr.responseText));
            }
        }
        if (method == 'post') {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.send(parameter)
        } else {
            xhr.send(null)
        }
    })
}
//显示登录界面
$('#menu').on('click', '#tologin', function () {
    $('.log').css({
        display: 'block'
    })
    $('.reg').css({
        display: 'none'
    })
})
function logind() {
    $('.log').css({ display: 'block' })
}

//显示注册界面
$('#menu').on('click', '#tologout', function () {
    $('.reg').css({
        display: 'block'
    })
    $('.log').css({
        display: 'none'
    })
})

// 退出登录
$('#menu').on('click', '#out', function () {
    console.log(1);
    $.ajax({
        type: "get",
        url: "logout.do",
        data: "",
        success: function (data) {
            // alert(data.messg)
            location.href = 'index.html';
        }
    })
})
// 登录注册
function login() {
    $('#username').blur(
        userWrong
    )
    $('#pwd').blur(
        pwdWrong
    )
    $('#pwd').focus(
        userWrong
    )
    // 登录事件
    $('#logindo').click(function () {
        let user = $('#username').val();
        let pwd = $('#pwd').val();
        $.ajax({
            type: "POST",
            url: "login.do",
            data: "username=" + user + "&pwd=" + pwd,
            success: function (data) {
                console.log(data);
                if (data.code == 500 && data.messg == '数据库错误') {
                    alert(data.messg);
                } else if (data.code == 200 && data.messg == '用户名或密码错误') {
                    //用户名密码错误状态
                    $('#userafter,#pwdafter').html(data.messg)
                    $('#username,#pwd').css({ border: '1px solid red' })
                } else {
                    //登录成功状态
                    $('#userafter,#pwdafter').html('&nbsp;')
                    $('#username,#pwd').css({ border: '1px solid #ddd' })
                    alert(data.messg);
                    //切换用户登录状态
                    location.href = 'index.html'
                }
            }
        })
    })
    // 注册事件
    $('#loginout').click(function () {
        let username = $('#reg_username').val();
        let pwd = $('#reg_pwd').val();
        let reqwd = $('#reg_qupwd').val();
        if (pwd != reqwd) {
            $('#reg_qupwd').css({ border: '1px solid red' });
            $('#reg_qupwdafter').html('两次密码不一致');
        } else {
            $('#reg_qupwd').css({ border: '1px solid #ddd' });
            maAjax('post', 'reg.do', "username=" + username + "&pwd=" + pwd).then((data) => {
                if (data.code == 200) {
                    alert(data.messg);
                    location.href = 'index.html';
                } else if (data.code == 202) {
                    $('#reg_username').css({ border: '1px solid red' });
                    $('#reg_userafter').html('用户名已存在');
                } else {
                    alert(data.messg);
                }
            })
        }
    })
}
// 用户名为空
function userWrong() {
    let user = $('#username').val();
    //账户为空判断
    if (user.trim().length == 0) {
        $('#userafter').html('用户名不能为空')
        $('#username').css({ border: '1px solid red' })
    } else {
        $('#userafter').html('&nbsp;')
        $('#username').css({ border: '1px solid #ddd' })
    }
}
// 密码为空
function pwdWrong() {
    let pwd = $('#pwd').val()
    //密码为空判断
    if (pwd.trim().length == 0) {
        $('#pwdafter').html('密码不能为空')
        $('#pwd').css({ border: '1px solid red' })
    } else {
        $('#pwdafter').html('&nbsp;')
        $('#pwd').css({ border: '1px solid #ddd' })
    }
}
