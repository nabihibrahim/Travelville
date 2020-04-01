
$(document).ready(function(){
// side nav
    $('.button-collapse').sideNav();
    $('.slider').slider({
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });
    $('input.autocomplete').autocomplete({
        data:{
            "Aruba": null,
            "Canun Mexico": null,
            "Hawaii": null,
            "Florida": null,
            "Calefornia": null,
            "Jamaica": null,
            "Europe": null
        },
        limit: 20,
        onAutocomplete: function(val) {
        },
        minLength: 1,
    });
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
})