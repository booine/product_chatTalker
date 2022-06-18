$(document).ready(function (e) {
    var cost = {
        spend: function (people,num, pro) {
            $('.people').find('.num').text(people);
            $('.price').find('.num').text(num);
            $('.price').find('.pro').text(pro);
            console.log('成功!!');
        }
    }

    // go-top 滑動動畫效果
    $('.go-top').on('click', function (e) {
        $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以都寫最保險
            scrollTop:0,
        },1000)
    })


    // 方案計算
    $('.cost-item').on('click', 'a', function (e) {
        // console.log(e.currentTarget); //a.btn.btn-info-r
        var peopleNum = $(e.currentTarget).find('span').text();
        if (peopleNum == '10000') {
            cost.spend(peopleNum, 600, 1600);
        }
        if (peopleNum == '15000') {
            cost.spend(peopleNum, 900, 1900);
        }
        if (peopleNum == '20000') {
            cost.spend(peopleNum, 1200, 2200);
        }
        if (peopleNum == '25000') {
            cost.spend(peopleNum, 1500, 2500);
        }
        if (peopleNum == '>25000') {
            cost.spend(peopleNum, 1800, 2800);
        }
    }).on('click', 'a', function (e) {
        // console.log($('.cost-item').find('a'));

        // 移除.current-btn
        $('.cost-item').find('a').removeClass('current-btn');
        // 加上.current-btn
        $(e.currentTarget).addClass('current-btn');
    });

    // 常見問題
    $('.question').find('.text').on('click', '.title', function (e) {
        // console.log(e.currentTarget); // div.title

        $(e.currentTarget).find('p').toggleClass('current');

        $(e.currentTarget).siblings('.answer').toggleClass('d-none');
        var hideAnswer = $(e.currentTarget).siblings('.answer').is('.d-none');        
        if (!hideAnswer) {
            $(e.currentTarget).find('button').html(`<img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_minus.svg" alt="minus-icon" >`);
        } else {
            $(e.currentTarget).find('button').html(`<img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_plus.svg" alt="plus-icon">`);
        }
        
    });
});