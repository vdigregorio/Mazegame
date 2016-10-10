document.addEventListener('DOMContentLoaded', function() {
    console.log('this is after the dom loaded');

    var $listForm = document.querySelector('.list-maker-form');
    console.log(window.location.search.substring(1))
    var searchUrl = window.location.search.charAt(1);
    var split = [];
    split = searchUrl.split("&");
    // var obj = {};
    var form = $('.list-maker-form');

    for (i = 0; i < split.length; i++) {
        var arr = [];
        arr = split[i].split("=");
        var key = $('.one');


        var p1 = $('<p>');

        p1.text(key);

        $('.box').append(p1);


        var input = $('.box');
        input.type = 'show';
        // input = key;
        form.appendTo(input);
    };

});


console.log('this is before the dom loaded');
