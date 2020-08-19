$(document).ready(() => {
    $(".toggle").click(() => {
        let items = $(".item");
        if (items.hasClass("active")) {
            items.removeClass("active");
        } else {
            items.addClass("active");
        }
    })
})