let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor;
let userChosenColor;
let gamePattern = [];
let userClickedPattern = [];
let audio;
let level = 0;



function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $('h1').text('Level ' + level);

}

$('.btn').click((e) => {
    userChosenColor = e.target.getAttribute('id');
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer();

})

function playSound(name) {

    switch (name) {
        case "blue":
            audio = new Audio('sounds/blue.mp3');
            audio.play();
            break;

        case "green":
            audio = new Audio('sounds/green.mp3');
            audio.play();
            break;

        case "red":
            audio = new Audio('sounds/red.mp3');
            audio.play();
            break;

        case "yellow":
            audio = new Audio('sounds/yellow.mp3');
            audio.play();
            break;

    }

}

function animatePress(currentColor) {
    $('#' + userChosenColor).addClass('pressed');
    setTimeout(() => {
        $('#' + userChosenColor).removeClass('pressed')
    }, 100)
}

$(document).keydown(() => {
    nextSequence();
    $(document).unbind();
})



function checkAnswer() {
    let count = 0;
    for (var i = 0; i < userClickedPattern.length; i++) {
        if (userClickedPattern[i] === gamePattern[i]) {
            count++;

            if (count === gamePattern.length) {
                userClickedPattern = [];
                setTimeout(function () {
                    nextSequence();
                }, 1000);
            }

        } else {
            $('body').addClass('game-over');
            setTimeout(() => {
                $('body').removeClass('game-over');
            }, 100);
            $('h1').text('Game Over, Press Any Key To Restart');
            audio = new Audio('sounds/wrong.mp3');
            audio.play();
            $('.btn').unbind();
            $(document).keydown(() => {
               startOver();
            })
        }
    }

}

function startOver() {
    level = 0;
    $('h1').text('level');
    gamePattern = [];
    userClickedPattern = [];
    setTimeout(function () {
        nextSequence();
    }, 1000);
}



// function checkAnswer() {

//     console.log(gamePattern.length);
//      for (let i = 0; i < gamePattern.length; i++) {

//         if (gamePattern.length === userClickedPattern.length) {

//             return userClickedPattern.every((element, i) => {
//                 if (element === gamePattern[i]) {
//                     nextSequence();
//                     userClickedPattern = [];
//                 }else{
//                     $('body').addClass('game-over');
//                     setTimeout(() => {
//                         $('body').removeClass('game-over');
//                     }, 100);
//                     $('h1').text('Game Over, Press Any Key To Restart');
//                     audio = new Audio('sounds/wrong.mp3');
//                     audio.play();
//                     $('.btn').unbind();
//                 }




//             })

//         }
//     }

// }


// if (gamePattern[i] == userClickedPattern[i]) {


// } else {

// }