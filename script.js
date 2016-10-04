console.log('IM WORKING!')

//if ontop of stack, you continue, otherwise the game is over
$(document).ready(function() {

//this function is moving my first original div left and right continiuously
    function stackLeft() {
        $(".stacker").animate({left: "-=200"}, 1500, "swing", stackRight);
    }
    function stackRight() {
        $(".stacker").animate({left: "+=200"}, 1500, "swing", stackLeft);
    }

  window.setInterval(function(){
  stackLeft();
  stackRight();

});

    //for loop that switches class every time you press spacebars



});
// make div move side to side using maybe setinterval()


//randomize the color, so every stack is different **SELF BONUS
