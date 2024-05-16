/**
 * Template Name: Logis
 * Updated: May 30 2023 with Bootstrap v5.3.0
 * Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});

var swiper = new Swiper("#slideContainer", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: "#swipeNext",
    prevEl: "#swipePrev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper("#slideContainer2", {
  slidesPerView: 4,
  spaceBetween: 10,
  sliderPerGroup: 4,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: "#swipeNext2",
    prevEl: "#swipePrev2",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper("#slideContainer3", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: "#swipeNext3",
    prevEl: "#swipePrev3",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

$(document).ready(function () {
  $(".main-menu").click(function () {
    $(".main-menu").removeClass("main-menu-active");
    $(this).addClass("main-menu-active");
  });

  $("#sendEmail").click(async () => {
    // Ambil nilai dari input
    let formData = {
      emailAdd: $("#emailAdd").val(),
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      jobTitle: $("#jobTitle").val(),
      compName: $("#compName").val(),
      workPhone: $("#workPhone").val(),
      country: $("#country").val(),
      textArea: $("#textArea").val()
    };
  
    // Validasi formulir
    if (formData.emailAdd === '' || formData.firstName === '' || formData.workPhone === '' || formData.country === '') {
      Swal.fire({
        text: 'Please fill in the required fields!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else {
      try {
        // Kirim email menggunakan EmailJS
        const response = await emailjs.send('service_xbvy0sw', 'template_5ndapnr', formData);
        
        // Tampilkan pesan sukses
        Swal.fire({
          text: 'Demo request has been sent!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Sembunyikan modal dan reset input
          $("#exampleModal").modal('hide');
          $("#emailAdd, #firstName, #lastName, #jobTitle, #compName, #workPhone, #country, #textArea").val('');
        });
      } catch (error) {
        console.error('Error sending email:', error);
        Swal.fire({
          text: 'Failed to send demo request. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  });


  // Search menu
  $("#kosKosan").click(function () {
    $(".btn-search").attr("id", "btnSearchKos");
  });
  $("#kontrakan").click(function () {
    $(".btn-search").attr("id", "btnSearchKontrakan");
  });
  $("#apartment").click(function () {
    $(".btn-search").attr("id", "btnSearchApartment");
  });
  $("#beliRumah").click(function () {
    $(".btn-search").attr("id", "btnSearchRumah");
  });
  // End Search menu

  // Search Function
  $("#btnSearchKos").click(function () {
    alert("Search Kos-Kosan");
  });
  $("#btnSearchKontrakan").click(function () {
    alert("Search Kontrakan");
  });

  $("#btnSearchApartment").click(function () {
    alert("Search Apartment");
  });
  $("#btnSearchRumah").click(function () {
    alert("Search Beli Rumah");
  });
  // End Search Function
});
