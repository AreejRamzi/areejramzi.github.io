

var turn = "x";
var playerX = 0;
var playerO = 0;
var gameInPlay = false;
var clickNum = 0;
var winner1= false;


$(".box").on("click", function (event) {
    console.log($(event.target).css("background-image", "none"));
    console.log(gameInPlay);

    if ($(event.target).css("background-image", "none")) {

        if (!gameInPlay) {
            if (turn == "x") {
                $(event.target).css({
                    "background-image": "url('./Ribo.png')",
                    "background-size": "157px 147px"
                });
                
                $(event.target).addClass("x");
                turn = "o";

            }
            else {
                $(event.target).css({
                    "background-image": "url('./Jass.png')",
                    "background-size": "157px 147px"
                });
                $(event.target).addClass("o");
                turn = "x";
            }
        }
    };

    if (($(".num1").hasClass("x")) && ($(".num2").hasClass("x")) && ($(".num3").hasClass("x"))) {
        console.log("x winner");
        playerX++;
        swal({
            title: "rock!",
            icon: "images/areebwin.png",
        });
        console.log(playerO)
        console.log(playerX)
        $('#playerA').text(playerX);
        clickNum++;
        gameInPlay = true
        reset()

    }
    if (($(".num4").hasClass("x")) && ($(".num5").hasClass("x")) && ($(".num6").hasClass("x"))) {
        console.log("x winner");
        playerX++;
        swal({
            title: "rock!",
            icon: "images/areebwin.png",
        });
        console.log(playerO)
        console.log(playerX);
        $('#playerA').text(playerX);
        //$('#playerJ').text("0");
        gameInPlay = true
        reset()
    }
    if (($(".num7").hasClass("x")) && ($(".num8").hasClass("x")) && ($(".num9").hasClass("x"))) {
        console.log("x winner");
        playerX++;
        swal({
            title: "way to go!",
            icon: "images/areebwin.png",
        });
        console.log(playerO)
        console.log(playerX);
        $('#playerA').text(playerX);
        //$('#playerJ').text("0");
        gameInPlay = true
        reset()
    }
    if (($(".num1").hasClass("x")) && ($(".num4").hasClass("x")) && ($(".num7").hasClass("x"))) {
        console.log("x winner");
        playerX++;
        swal({
            title: "Awesome!",
            icon: "images/areebwin.png",
        });
        console.log(playerO)
        console.log(playerX);
        $('#playerA').text(playerX);
        //$('#playerJ').text("0");
        gameInPlay = true
        reset()
    }
    if (($(".num2").hasClass("x")) && ($(".num5").hasClass("x")) && ($(".num8").hasClass("x"))) {
        console.log("x winner");
        playerX++;
        swal({
            title: "star of the show!",
            icon: "images/areebwin.png",
        });
        console.log(playerO)
        console.log(playerX);
        $('#playerA').text(playerX);
        //$('#playerJ').text("0");
        gameInPlay = true
        reset()
    }
    if (($(".num3").hasClass("x")) && ($(".num6").hasClass("x")) && ($(".num9").hasClass("x"))) {
        console.log("x winner");
        playerX++;
        swal({
            title: "genius!",
            icon: "images/areebwin.png",
        });
        console.log(playerO)
        console.log(playerX);
        $('#playerA').text(playerX);
        //$('#playerJ').text("0");
        gameInPlay = true
        reset()
    }
    if (($(".num1").hasClass("x")) && ($(".num5").hasClass("x")) && ($(".num9").hasClass("x"))) {
        console.log("x winner");
        playerX++;
        swal({
            title: "Tony Stark!",
            icon: "images/areebwin.png",
        });
        console.log(playerO)
        console.log(playerX);
        $('#playerA').text(playerX);
        //$('#playerJ').text("0");
        gameInPlay = true
        reset()
    }
    if (($(".num3").hasClass("x")) && ($(".num5").hasClass("x")) && ($(".num7").hasClass("x"))) {
        console.log("x winner");
        playerX++;
        swal({
            title: "rock!",
            icon: "images/areebwin.png",
        });
        console.log(playerO)
        console.log(playerX);
        $('#playerA').text(playerX);
        //$('#playerJ').text("0");
        gameInPlay = true
        reset()
    }
    if (($(".num1").hasClass("o")) && ($(".num2").hasClass("o")) && ($(".num3").hasClass("o"))) {
        console.log("o winner");
        playerO++;
        swal({
            title: "sweet like a flower!",
            icon: "images/jasminewin.png",
        });
        console.log(playerO)
        console.log(playerX);
        // $('#playerJ').text(playerO);
        $('#playerJ').text(playerO);
        gameInPlay = true
        reset()
    }
    if (($(".num4").hasClass("o")) && ($(".num5").hasClass("o")) && ($(".num6").hasClass("o"))) {
        console.log("o winner");
        playerO++;
        swal({
            title: "tough like a diamond!",
            icon: "images/jasminewin.png",
        });
        console.log(playerO)
        console.log(playerX);
        // $('#playerJ').text(playerO);
        $('#playerJ').text(playerO);
        gameInPlay = true
     
        reset()
    }
    if (($(".num7").hasClass("o")) && ($(".num8").hasClass("o")) && ($(".num9").hasClass("o"))) {
        console.log("o winner");
        playerO++;
        swal({
            title: "smarty pants!",
            icon: "images/jasminewin.png",
        });
        console.log(playerO)
        console.log(playerX);
        //$('#playerJ').text(playerO);
        $('#playerJ').text(playerO);
        gameInPlay = true
    
        reset()
    }
    if (($(".num1").hasClass("o")) && ($(".num4").hasClass("o")) && ($(".num7").hasClass("o"))) {
        console.log("o winner");
        playerO++;
        swal({
            title: "勝者!",
            icon: "images/jasminewin.png",
        });
        console.log(playerO)
        console.log(playerX);
        //$('#playerJ').text(playerO);
        $('#playerJ').text(playerO);
        gameInPlay = true
    
        reset()
    }
    if (($(".num2").hasClass("o")) && ($(".num5").hasClass("o")) && ($(".num8").hasClass("o"))) {
        console.log("o winner");
        playerO++;
        swal({
            title: "rock star!",
            icon: "images/jasminewin.png",
        });
        console.log(playerO)
        console.log(playerX);
        //$('#playerJ').text(playerO);
        $('#playerJ').text(playerO);
        gameInPlay = true
  
        reset()
    }
    if (($(".num3").hasClass("o")) && ($(".num6").hasClass("o")) && ($(".num9").hasClass("o"))) {
        console.log("o winner");
        playerO++;
        swal({
            title: "pumpkin!",
            icon: "images/jasminewin.png",
        });
        console.log(playerO)
        console.log(playerX);
        //$('#playerJ').text(playerO);
        $('#playerJ').text(playerO);
        gameInPlay = true
  
        reset()
    }
    if (($(".num1").hasClass("o")) && ($(".num5").hasClass("o")) && ($(".num9").hasClass("o"))) {
        console.log("o winner");
        playerO++;
        swal({
            title: "sweet like a flower tough like a diamond!",
            icon: "images/jasminewin.png",
        });
        console.log(playerO)
        console.log(playerX);
        //$('#playerJ').text(playerO);
        $('#playerJ').text(playerO);
        gameInPlay = true
   
        reset()
    }
    if (($(".num3").hasClass("o")) && ($(".num5").hasClass("o")) && ($(".num7").hasClass("o"))) {
        console.log("o winner");
        playerO++;
        swal({
            title: "sweet like a flower tough like a diamond!",
            icon: "images/jasminewin.png",
        });
        console.log(playerO)
        console.log(playerX);
        // $('#playerJ').text(playerO);
        $('#playerJ').text(playerO);
        gameInPlay = true
       
        reset()
    }

   
    });




$("#reset").on("click", function (event) {
    location.reload();
});


function reset() {
    $('.box').removeClass("x")
    $('.box').removeClass("o")
}
$("#playAgin").on("click", function (event) {
    $('.box').removeAttr("style")
    $('.box').removeClass("x")
    $('.box').removeClass("o")
    turn = "x"
    gameInPlay = false
});



