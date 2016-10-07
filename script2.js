$(document).ready(function() {
    var searchUrl = window.location.search.substring(1);
    var split = [];
    split = searchUrl.split("&");
    var obj = {};
    var form = document.querySelector('form');

    for (i = 0; i < split.length; i++) {
        var arr = [];
        arr = split[i].split("=");
        var key = arr[0];
        var value = arr[1];

        // var p1 = $('<div>');
        // var p2 = $('<option>');
        // p1.text(key);
        // p2.text(value);
        // $('.box').append(p1);
        // $('.box').append(p2);

        var input = $('.box');
        input.type = '';
        input.value = value;
        input.name = key;
        form.appendChild(input);
    }
})
