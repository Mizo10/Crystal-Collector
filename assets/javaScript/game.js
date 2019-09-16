$(document).ready(function() {
    var score = 0;
    var wins = 0;
    var losses = 0;

    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log("random number: " + randomNumber);
    $(".randomNumber").html(randomNumber);


    var crystal1randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log("crystal1: " + crystal1randomNumber);

    var crystal2randomNumber = Math.floor(Math.random() * (6 - 4 + 1) + 4);
    console.log("crystal2: " + crystal2randomNumber);

    var crystal3randomNumber = Math.floor(Math.random() * (9 - 7 + 1) + 7);
    console.log("crystal3: " + crystal3randomNumber);

    var crystal4randomNumber = Math.floor(Math.random() * (12 - 10 + 1) + 8);
    console.log("crystal4: " + crystal4randomNumber);
    if (score === randomNumber) {
        wins++;
        console.log("wins: " + wins)
        $("#wins").html("hi");
    }
    else if (score > randomNumber) {
        losses++;
        $("#losses").html(losses);
    }
    $("#crystal1").on("click", function () {
        score += crystal1randomNumber;
        $('.totalScore').html(score);

    });

    $("#crystal2").on("click", function () {
        score += crystal2randomNumber;
        $('.totalScore').html(score);
    });

    $("#crystal3").on("click", function () {
        score += crystal3randomNumber;
        $('.totalScore').html(score);
    });

    $("#crystal4").on("click", function () {
        score += crystal4randomNumber;
        $('.totalScore').html(score);
    });



}); 
















