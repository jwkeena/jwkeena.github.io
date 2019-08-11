// Hide site until loaded adapted from 
// https://www.amberweinberg.com/using-js-to-hide-site-until-loaded/ && https://www.utopiamechanicus.com/article/javascript-wait-for-img-load/

function processImages()  
{
  if ( loadingFlags[0])
  {
    // check often until loaded
    window.setTimeout(processImages,50);
    return;
  }
    $("main").addClass("all-loaded");
    $(".progress").css("display", "none");
}

$(document).ready(function () {
    window.setTimeout(processImages,1000);
})

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