$(document).ready(function () {

    let c = 0;
    let l = 0;
    $('#clap-img').click(function () {
        c++;
        document.getElementById("clap-count").innerHTML = c;
    });
    $("#like-img").click(function () {
        l++;
        document.getElementById("like-count").innerHTML = l;
    });
});

