// Hide site until loaded adapted from https://www.amberweinberg.com/using-js-to-hide-site-until-loaded/
$(window).on("load", function () {
    $("main").addClass("all-loaded");
    $(".progress").css("display", "none");
});

// Materialize scrollspy http://www.freetimelearning.com/materialize-css/example-codes/scroll-spy.html
$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });
});

// Initialize modal
$(document).ready(function () {
    $('.modal-trigger').leanModal();
});

// Initialize carousel
$(document).ready(function () {
    $('.carousel').carousel({
        numVisible: 3,
        indicators: true
    });
});

function email() {
    window.location.href = "mailto:jwkeena@gmail.com";
};

$("#resume-button").on("click", function () {
    window.open("Resume.pdf");
});

$(document.body).on("dblclick", ".carousel-item", function () {
    let url = $(this).attr("data-link");
    window.open(url);
});