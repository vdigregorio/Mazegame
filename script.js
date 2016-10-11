console.log('IM WORKING!')


$(document).ready(function() {

    $('.colors').on('click', function() {
        $('.stacker .tester2 .tester4 .tester6 .tester8 .tester10').css('background-color', 'blue')
        $('.tester1 .tester3 .tester5 .tester7 .tester9 .tester11').css('background-color', 'purple')
    });



    var moving = true;
    var speed = 10;
    var keyPressCount = 0;
    keyPressCount++;
    var targetBlock = '.tester' + keyPressCount;
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
    var targetBlock;

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



            $(targetBlock).css('visibility', 'visible');


        } // if (targetBlock !== $('.stacker').css(left)){
        // alert('blah')
        //}

        e.preventDefault();
    }


    function keysReleased(e) {
        // mark keys that were released????

        keys[e.keyCode] = false;
    }


    //for loop that adds class every time you press spacebars
    // if ($('.tester').position == $('.stacker').position) {
    //     alert('You LOSE');
    // }
    // alert($(".stacker").css("margin-left"));
    // ALERT FOR LOSE AND WIN
    //WHEN DIV IS STOPPED AT SPECIFIC LOCATION AND IT ISNT RIGHT ON TOP OF
    //THE PREVIOUS ONE,



});
