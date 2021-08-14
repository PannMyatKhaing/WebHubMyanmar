$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // // Owl-carousel

    // $('.site-main .about-area .owl-carousel').owlCarousel({
    //     loop: true,
    //     autoplay: true,
    //     dots: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         560: {
    //             items: 2
    //         }
    //     }
    // })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();


    // Team

    $(".about_me_hms").click(()=>{
        $('.wrapper:first').html(`<ul class="list-unstyled text-dark">
        <li><strong>Role : </strong>Founder</li>
        <li><strong>Skill : </strong>Full-Stack Developer</li>
        <li><strong>University : </strong>University Computer Studies, Loikaw</li>   
        </ul>
        <div class="buttons">
         <button class="buttons_remove" onclick="remove_hms()"><img src="./img/team/right-arrow.png" width="40px" height="20px" alt=""></button>
        </div>
    `);
    });
    


  

});


 