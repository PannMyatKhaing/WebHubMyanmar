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


AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 180, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

//   Loader

	var loader = function() {
		setTimeout(function() { 
			if($('#preloader').length > 0) {
				$('#preloader').hide();
			}
		}, 1);
	};
	loader();
