export class Scrolling {
    
    constructor() {
        this.scrollingboutons()
    }

    scrollingboutons(){

        $(".elm_nav:eq(0), .burger-item:eq(0)").click(function() {
            $('#chkBoutonBurger').prop('checked', false);
            $('html,body').animate({
                scrollTop: $(".video").offset().top},
                'slow');
        });

        $(".elm_nav:eq(1), .burger-item:eq(1)").click(function() {
            $('#chkBoutonBurger').prop('checked', false);
            $('html,body').animate({
                scrollTop: $(".galerie").offset().top},
                'slow');
        });

        $(".elm_nav:eq(2), .burger-item:eq(2)").click(function() {
            $('#chkBoutonBurger').prop('checked', false);
            $('html,body').animate({
                scrollTop: $(".bio").offset().top},
                'slow');
        });

        $(".elm_nav:eq(3), .burger-item:eq(3)").click(function() {
            $('#chkBoutonBurger').prop('checked', false);
            $('html,body').animate({
                scrollTop: $("footer").offset().top},
                'slow');
        });
    }

}//Fin classe scrolling