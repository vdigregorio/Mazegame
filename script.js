console.log('IM WORKING!')

var moving = true;
var speed = 10;

//this function is moving my first original div left and right continiuously


//if ontop of stack, you continue, otherwise the game is over
$(document).ready(function() {



    var going = window.setInterval(function() {


        // if the stacker moves to the left 100 times
        // we should change direction





        // if it has a class of right then move 100 times then toggle class





        // the count should be reset to 0 when it reaches 100
        var count = $('.stacker').data('count');

        // if the count reaches 100 set to 0
        if (count === 200) {
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



        // stackLeft();
        // stackRight();
        console.log(count);

    }, 10);
    var going1 = window.setInterval(function() {
    var count1 = $('.tester').data('count');

        // if the count reaches 100 set to 0
        if (count1 === 200) {
            $('.tester').toggleClass('right');
            $('.tester').data('count', 0);
        } else {
            $('.tester').data('count', count1 + 1);
        }

        var position = $(".tester").position();

        if ($('.tester').hasClass('right')) {
            $(".tester").css({ left: position.left + 1 });
        } else {
            $(".tester").css({ left: position.left - 1 });
        }



        // stackLeft();
        // stackRight();
        console.log(count1);

    }, 10);

    //stop animation when you hit spacebar!
    window.addEventListener("keydown", keysPressed, false);
    window.addEventListener("keyup", keysReleased, false);

    var keys = [];

    function keysPressed(e) {
        // store an entry for every key pressed
        //somewhat confusing, would like to review this
        //dont forget
        keys[e.keyCode] = true;

        // enter
        if (keys[32]) {
            // animate the div
            console.log(going)
            window.clearInterval(going);
            $('.tester').css('visibility', 'visible');
            // window.clearInterval(going1);
           // prevent default browser behavior
            e.preventDefault();
        }
    }

    function keysReleased(e) {
        // mark keys that were released????
        keys[e.keyCode] = false;
    }
    //for loop that switches class every time you press spacebars



});
// make div move side to side using maybe setinterval()


//randomize the color, so every stack is different **SELF BONUS
