$(document).ready(() => {
    var currentPage = "about"
    var loadPage

    // function to load main parts of html body
    function startPage() {
        $("body").fadeIn(() => {
            $("nav").fadeIn(1000);
            $("footer").fadeIn(1000);
            $(`.${currentPage}-container`).fadeIn(1000);
        })
    }

    // $(document).on('click', '.header-name', function () {
    //     console.log('clicked')
    // })

    // $(document).on('click', '.nav-link', function (event) {
    //     event.preventDefault()

    //     loadPage = $(this).text().trim().toLowerCase()
    //     console.log(loadPage)

    //     if (loadPage === 'ashley eubank') {
    //         loadPage = 'about'
    //     }

    //     $(`.${currentPage}-container`).fadeOut(function () {
    //         $(`.${loadPage}-container`).fadeIn()
    //         currentPage = loadPage
    //     })
    // })


    startPage();
});