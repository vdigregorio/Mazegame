console.log('IM WORKING!')


$(document).ready(function() {

    // var searchUrl = window.location.search.charAt(1);
    //    var split = [];
    //    split = searchUrl.split("&");
    //    // var obj = {};
    //    var form = $('.list-maker-form');

    //    for (i = 0; i < split.length; i++) {
    //        var arr = [];
    //        arr = split[i].split("=");
    //        var key = $('.one');


    //        var p1 = $('<p>');

    //        p1.text(key);

    //        $('.box').append(p1);


    //        var input = $('.box');
    //        input.type = 'hidden';
    //        // input = key;
    //        form.appendTo(input);
    //    };


    var moving = true;
    var speed = 10;
    var targetBlock;


    var going = window.setInterval(function() {
        // the count should be reset to 0 when it reaches 100
        var count = $('.stacker').data('count');

        // if the count reaches 100 set to 0
        if (count === 400) {
            $('.stacker').toggleClass('right');
            $('.stacker').data('count', 0);
        } else {
            $('.stacker').data('count', count + 1);
        }

        var position = $(".stacker").position();

        if ($('.stacker').hasClass('right')) {
            $(".stacker").css({ left: position.left + 1 });
        } else {
            $(".stacker").css({ left: position.left - 1 });
        }

        // console.log(count);

    }, 10);
    var going1 = window.setInterval(function() {
        var count1 = $(targetBlock).data('count');

        // if the count reaches 100 set to 0
        if (count1 === 400) {
            $(targetBlock).toggleClass('right');
            $(targetBlock).data('count', 0);
        } else {
            $(targetBlock).data('count', count1 + 1);
        }

        var position = $(targetBlock).position();

        if ($(targetBlock).hasClass('right')) {
            $(targetBlock).css({ left: position.left + 1 });
        } else {
            $(targetBlock).css({ left: position.left - 1 });
        }

        // console.log(count1);

    }, 10);

    //stop animation when you hit spacebar!
    window.addEventListener("keydown", keysPressed, false);
    window.addEventListener("keyup", keysReleased, false);

    var keys = [];
    var keyPressCount = 0;

    $(document).on("keypress", function() {
        console.log(keyPressCount);

    });

    function keysPressed(e) {
        // store an entry for every key pressed
        //somewhat confusing, would like to review this
        //dont forget
        keys[e.keyCode] = true;

        // space
        if (keys[32]) {
            keyPressCount++;
            targetBlock = '.tester' + keyPressCount
            console.log(targetBlock)
                // animate the div
                // console.log(going)
            window.clearInterval(going);


            $(targetBlock).css('visibility', 'visible');
            // e.stopPropagation();
            // window.clearInterval(going1);


            // prevent default browser behavior



            //animate div again

        } if (targetBlock !== $('.stacker').css(left)){
        alert('blah')
         }

        e.preventDefault();
    }


    function keysReleased(e) {
        // mark keys that were released????

        keys[e.keyCode] = false;
    }

    $('.colors').on('click', function(){
      $('.stacker').toggleClass('colorsAF');
      $('.1 .3 .5 .7 .9 .11').toggleClass('colorsFT');
    })
    //for loop that adds class every time you press spacebars
    // if ($('.tester').position == $('.stacker').position) {
    //     alert('You LOSE');
    // }
    // alert($(".stacker").css("margin-left"));
    // ALERT FOR LOSE AND WIN
    //WHEN DIV IS STOPPED AT SPECIFIC LOCATION AND IT ISNT RIGHT ON TOP OF
    //THE PREVIOUS ONE,



});
