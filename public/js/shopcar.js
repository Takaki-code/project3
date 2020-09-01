

// 数量-
$('tbody').on('click', '.removnum', function () {
    if (this.nextElementSibling.value > 1) {
        this.nextElementSibling.value--;
        let num = this.nextElementSibling.value;
        let id = $(this).data('shopid');
        let price = Number(this.parentNode.previousElementSibling.children[0].innerText);
        let total = price * num;
        this.parentNode.nextElementSibling.children[0].innerText = total;
        $.ajax({
            type: "get",
            url: "shopnum.do",
            data: 'id=' + id + "&num=" + num + "&total=" + total,
            success: function (data) {
                // alert(data.messg)
            }
        });
        totalChange();
    }
})

// 数量+
$('tbody').on('click', '.addnum', function () {
    this.previousElementSibling.value++;
    let num = this.previousElementSibling.value;
    let id = $(this).data('shopid');
    let price = Number(this.parentNode.previousElementSibling.children[0].innerText);
    let total = price * num;
    this.parentNode.nextElementSibling.children[0].innerText = total;
    $.ajax({
        type: "get",
        url: "shopnum.do",
        data: 'id=' + id + "&num=" + num + "&total=" + total,
        success: function (data) {
            // alert(data.messg)
        }
    });
    totalChange();
})
// 删除
$('tbody').on('click', '.remove', function () {
    let id = $(this).data('shopid')
    $.ajax({
        type: "get",
        url: "shopremove.do",
        data: 'id=' + id,
        success: function (data) {
            if (data.code == 200) {
                alert(data.messg);
                location.href = 'shopcar.html';
            } else {
                alert(data.messg);
            }
        }
    });
})
console.log(

)
// 选中
$('tbody').on('click', '.check', function () {
    let i = 0;
    $('.check').each(function () {
        if ($(this).prop('checked') == true) {
            i++;
        }
        if (i == $('.check').length) {
            $('thead input').prop('checked', true);
        } else {
            $('thead input').prop('checked', false);
        }
    })
    totalChange();
})
// 总金额变化
function totalChange() {
    let total = 0;
    $('.check').each(function () {
        let i = Number(this.parentNode.parentNode.children[4].children[0].innerText);
        if ($(this).prop('checked') == true) {
            total += i;
        }
    })
    $('#total').text(total);
}
// 全选
$('thead input').click(function () {
    if ($(this).prop('checked') == true) {
        $('.check').each(function () {
            $(this).prop('checked', true)
        })
    } else {
        $('.check').each(function () {
            $(this).prop('checked', false)
        })
    }
    totalChange();
})



