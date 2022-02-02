$(document).ready(function () {
   
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top, .nav-link, .navbar-brand");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
});

//Scroll to Top Button:

//Get the button
scrollButton = document.getElementById("btnScrollToTop");

//When scroll down 50% from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

//when button clicked, scroll to top of the document
function topFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}