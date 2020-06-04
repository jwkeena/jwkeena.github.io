function email() {
    window.location.href = "mailto:jwkeena@gmail.com";
};

$(document).ready(function () {
    // Initialize Materialize components
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });

    $('.modal-trigger').leanModal();

    $('.carousel').carousel({
        numVisible: 3,
        indicators: true
    });

    // Event listeners
    $("#resume-button").on("click", function () {
        window.open("./assets/pdfs/Resume.pdf");
    });
    
    $(document.body).on("dblclick", ".carousel-item", function () {
        let url = $(this).attr("data-link");
        window.open(url);
    });
});

