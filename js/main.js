$(document).ready(function() {
    $(".DarkMode").click(function() {
        $(document.body).toggleClass("darkMode");
        $(".DarkMode").toggleClass("uil-brightness-low");
        $(".DarkMode").toggleClass("uil-moon");
    })

    $(".nav-link").click(function() {
        $(".nav-link").removeClass("active");
        $(this).toggleClass("active");
    })
});