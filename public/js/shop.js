//切换预览图
$('.imglist').on('click', '.imgs', function () {
    let imgl = document.getElementsByClassName('imgl')[0]
    imgl.children[0].src = $(this.children[0]).attr('src')
    $(this).siblings().removeClass('imgs_index');
    $(this).addClass('imgs_index');
})
// 规格选择
$('.speci_color,.guige_color').click(function () {
    $(this).siblings().removeClass('thechoose');
    $(this).addClass('thechoose');
})
// 数量加减
$('#addshop').click(function () {
    let i = $('#num').val();
    i++;
    $('#num').val(i);
    // console.log( $('#num').val())
})
$('#removeshop').click(function () {
    let i = $('#num').val();
    if (i == 1) {
        $('#num').val(i);
    } else {
        i--;
        $('#num').val(i);
    }
})

$('#shopcar').click(function () {
    if ($(this).data('user')) {
        //数量
        let num = $('#num').val();
        // 颜色
        let color = '';
        //规格
        let guige = '';
        //id
        let id = $(this).data('shopid');
        $('.speci_color').each(function () {
            for (let i = 0; i < this.classList.length; i++) {
                if (this.classList[i] == 'thechoose') {
                    color = $(this).text();
                    break;
                }
            }
        })
        $('.guige_color').each(function () {
            for (let i = 0; i < this.classList.length; i++) {
                if (this.classList[i] == 'thechoose') {
                    guige = $(this).text();
                    break;
                }
            }
        })
        $.ajax({
            type: "get",
            url: "shopcar.do",
            data: "num=" + num + "&color=" + color + "&guige=" + guige + "&id=" + id,
            success: function (data) {
                alert(data.messg)
            }
        });
    } else {
        $('.log').css({ display: 'block' });
    }
})