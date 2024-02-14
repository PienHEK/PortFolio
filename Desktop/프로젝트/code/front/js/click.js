$(document).ready(function ($) {
    $(".scroll").click(function (event) {
        console.log(".scroll");
        event.preventDefault();
        $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});
