//loads sound files

 $(document).ready(function(){

        ion.sound({
            sounds: [
                {name: "plop"},
                {name: "Cha_Ching"},
                {name: "Trombone"}

               

            ],
            path: "sounds/",
            preload: true,
            volume: 1.0
        });

       

    });

 //global variable for the score and the level

 var $score = $("#score");
 var $level = $("#level");

 //game object

 var game={ 
    level: 0, 
    score: 0, 
    computer: [], 
    player: [], 
    playerTurn: false,
    init: false,
    numOfCompBeeps: 3,
    index: 0

}

//these two methods are for bug checking

// function computerSequence(){
//     for(var i = 0; i < game.computer.length; i++){
//         console.log("computer = " +game.computer[i]);
//     }

// }

// function playerSequence(){
//     for(var i = 0; i < game.player.length; i++){
//         console.log("player = " +game.player[i]);
//     }
// }


//determines what to do the gameplay buttons, once the document is loaded
$(document).ready(function(){

    $("#one").on("click", doClick(1));
    $("#two").on("click", doClick(2));
    $("#three").on("click", doClick(3));
    $("#four").on("click", doClick(4));
    $("#five").on("click", doClick(5));
    $("#six").on("click", doClick(6));
    $("#seven").on("click", doClick(7));
    $("#eight").on("click", doClick(8));
    $("#nine").on("click", doClick(9));
    $("#ten").on("click", doClick(10));
    $("#eleven").on("click", doClick(11));
    $("#twelve").on("click", doClick(12));

});


//function for player clicks, includes animation, sound, and DOM updates for winning and losing
function doClick(i) {

    return function() {

        $(this).animate({opacity: 0.0});
        ion.sound.play("plop");
        $(this).animate({opacity: 1.0});

       var message1 = $("<h3>You lose.<br> Final Score: "+ game.score+ ". <br> " + "Refresh the page to play again.</h3>");
        
        //evaluating player click 
        if(game.init && game.playerTurn){
            game.player.push(i);
            if(game.player[game.index] !== game.computer[game.index] && game.index <= game.computer.length){
                ion.sound.play("Trombone");
                $( ".gamebutton" ).hide();
                $( ".button" ).hide();
                $score.hide();
                $(".append").prepend(message1);
                $level.hide();
            }else if(game.player[game.index] === game.computer[game.index] && game.index <= game.computer.length){
                game.score += 100;
                $score.text("score: " + game.score);
                  
            }
            game.index+=1;
            
        }

       
    }
}

//creates computer sequence through random numbers
function computerPlay(numBeeps){
    var delay = 1250;
    game.playerTurn = false;
   
    for(var i = 0; i < numBeeps; i++){
        var n = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        game.computer.push(n);
        console.log("this is right before the computer button is pushed: " + game.playerTurn);
        if (n === 1) {
            setTimeout(function () {
                $("#one").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#one").animate({opacity: 1.0});
            }, delay);
        } else if (n === 2) {
            setTimeout(function () {
                $("#two").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#two").animate({opacity: 1.0});
            }, delay);
        } else if (n === 3) {
            setTimeout(function () {
                $("#three").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#three").animate({opacity: 1.0});
            }, delay);
        } else if (n === 4) {
         setTimeout(function () {
                $("#four").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#four").animate({opacity: 1.0});
            }, delay);
        } else if (n === 5) {
           setTimeout(function () {
                $("#five").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#five").animate({opacity: 1.0});
            }, delay);
        } else if (n === 6) {
            setTimeout(function () {
                $("#six").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#six").animate({opacity: 1.0});
            }, delay);
        } else if (n === 7) {
            setTimeout(function () {
                $("#seven").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#seven").animate({opacity: 1.0});
            }, delay);
        } else if (n === 8) {
            setTimeout(function () {
                $("#eight").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#eight").animate({opacity: 1.0});
            }, delay);
        } else if (n === 9) {
            setTimeout(function () {
                $("#nine").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#nine").animate({opacity: 1.0});
            }, delay);
        } else if (n === 10) {
            setTimeout(function () {
                $("#ten").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#ten").animate({opacity: 1.0});
            }, delay);
        } else if (n === 11) {
            setTimeout(function () {
                $("#eleven").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#eleven").animate({opacity: 1.0});
            }, delay);
        } else if (n === 12) {
            setTimeout(function () {
                $("#twelve").animate({opacity: 0.0});
                ion.sound.play("plop");
                $("#twelve").animate({opacity: 1.0});
            }, delay);
        } else {
            console.log("Something went wrong here i.e. none of the if clauses fired.");
        }
        delay+=1000;
    }
    
    
    
}

//makes player turn true
function humanPlay(){
    game.playerTurn = true;
}

//shows the score and level

function showScoreLevel(){
     $score.text("score: " + game.score);
     $score.show("fast");
     $level.text("level: " + game.level);
     $level.show("fast");

}


//starts game when main button is pressed
$(document).ready(function(){
    $(".button").on("click",function(){
        //prevents round from triggering too early
      if(game.computer.length === game.player.length){
        gameLogic();
      }
       
     
    });
});

function gameLogic(){
        game.init = true;
        game.level += 1;
        computerPlay(game.numOfCompBeeps);
        humanPlay();
        game.numOfCompBeeps += 1;
        console.log(game.playerTurn);
        showScoreLevel();
}