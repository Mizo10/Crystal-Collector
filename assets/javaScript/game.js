$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log("random number: " + randomNumber);
    $(".randomNumber").html(randomNumber);


    var crystal1randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log("crystal1: " + crystal1randomNumber);
    $("#img1").html("<img src=" + "assets/images/image1.jpg" + " value=" + crystal1randomNumber + ">");

    var crystal2randomNumber = Math.floor(Math.random() * (6 - 4 + 1) + 4);
    console.log("crystal2: " + crystal2randomNumber);
    $("#img2").html("<img src=" + "assets/images/image2.jpg" + " value=" + crystal2randomNumber + ">");

    var crystal3randomNumber = Math.floor(Math.random() * (9 - 7 + 1) + 7);
    console.log("crystal3: " + crystal3randomNumber);
    $("#img3").html("<img src=" + "assets/images/image3.jpg" + " value=" + crystal3randomNumber + ">");

    var crystal4randomNumber = Math.floor(Math.random() * (12 - 10 + 1) + 8);
    console.log("crystal4: " + crystal4randomNumber);
    $("#img4").html("<img src=" + "assets/images/image4.jpg" + " value=" + crystal4randomNumber + ">");

    var score = 0;
    var wins = 0;
    var losses = 0;

    function reset() {
        var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        console.log("random number: " + randomNumber);
        $(".randomNumber").html(randomNumber);

        score = 0;
        $('.totalScore').html(score);

        var crystal1randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        console.log("crystal1: " + crystal1randomNumber);
        $("#img1").html("<img src=" + "assets/images/image1.jpg" + " value=" + crystal1randomNumber + ">");

        var crystal2randomNumber = Math.floor(Math.random() * (6 - 4 + 1) + 4);
        console.log("crystal2: " + crystal2randomNumber);
        $("#img2").html("<img src=" + "assets/images/image2.jpg" + " value=" + crystal2randomNumber + ">");

        var crystal3randomNumber = Math.floor(Math.random() * (9 - 7 + 1) + 7);
        console.log("crystal3: " + crystal3randomNumber);
        $("#img3").html("<img src=" + "assets/images/image3.jpg" + " value=" + crystal3randomNumber + ">");

        var crystal4randomNumber = Math.floor(Math.random() * (12 - 10 + 1) + 8);
        console.log("crystal4: " + crystal4randomNumber);
        $("#img4").html("<img src=" + "assets/images/image4.jpg" + " value=" + crystal4randomNumber + ">");

        $("img").on("click", function () {
            var newScore = score += parseInt($(this).attr("value"));
            $('.totalScore').html(newScore);

            if (newScore === randomNumber) {
                wins++;
                console.log("wins: " + wins)
                $("#wins").html("Wins: " + wins);
                reset ();
            }
            else if (newScore > randomNumber) {
                losses++;
                $("#losses").html("Losses: " + losses);
                reset ();
            }
        });
    };

    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
        $('.totalScore').html(newScore);

        if (newScore === randomNumber) {
            wins++;
            console.log("wins: " + wins)
            $("#wins").html("Wins: " + wins);
            reset ();
        }
        else if (newScore > randomNumber) {
            losses++;
            $("#losses").html("Losses: " + losses);
            reset ();
        }
    });
});
















