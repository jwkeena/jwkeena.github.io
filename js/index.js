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

// Resume zoom. Thanks to https://codepen.io/galulex/pen/eNZRVq
function zoom(e) {
    let zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
    x = offsetX / zoomer.offsetWidth * 100;
    y = offsetY / zoomer.offsetHeight * 100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
};

// If the screen is too small for the zoom function to look good on the resume, open it on a separate page and close the modal invisibly
let isModalOpen = false
$("#resume-button").on("click", function () {

    if (isModalOpen === false) {
        isModalOpen = true
    };

    if (document.documentElement.clientWidth <= 800) {
        window.open("/Resume.pdf");

        // Probably due to the event loop, making this an instant delay causes it to work. If it's not wrapped in a setTimeout, the modal won't close
        setTimeout(function () {
            document.getElementById("modal-close").click();
            isModalOpen = false;
        }, 0);
    };
});

$(document.body).on("click", function (e) {

    // If anything BUT the resume button is clicked (necessary so it doesn't interfere with previous event listener)
    if (!$(e.target).is("#resume-button")) {

        // Then close the modal
        if (isModalOpen === true) {
            document.getElementById("modal-close").click();
            isModalOpen = false;
        };
    };

});

$(document.body).on("dblclick", ".carousel-item", function () {
    let url = $(this).attr("data-link");
    window.open(url);
});