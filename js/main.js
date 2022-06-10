$(document).ready(function () {
    // 常見問題
    $('.question').find('.text').on('click', '.title', function (e) {
        console.log(e.currentTarget); // div.title

        $(e.currentTarget).find('p').toggleClass('action');

        $(e.currentTarget).siblings('.answer').toggleClass('d-none');
        var hideAnswer = $(e.currentTarget).siblings('.answer').is('.d-none');        
        if (!hideAnswer) {
            $(e.currentTarget).find('button').html(`<img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_minus.svg" alt="minus-icon" >`);
        } else {
            $(e.currentTarget).find('button').html(`<img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_plus.svg" alt="plus-icon">`);
        }
        
    });
});