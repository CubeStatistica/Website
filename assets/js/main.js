(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
//Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

var objectFitVideos=function(t){"use strict";function e(t){for(var e=getComputedStyle(t).fontFamily,o=null,i={};null!==(o=l.exec(e));)i[o[1]]=o[2];return i["object-position"]?n(i):i}function o(t){var o=-1;t?"length"in t||(t=[t]):t=document.querySelectorAll("video");for(;t[++o];){var n=e(t[o]);(n["object-fit"]||n["object-position"])&&(n["object-fit"]=n["object-fit"]||"fill",i(t[o],n))}}function i(t,e){function o(){var o=t.videoWidth,n=t.videoHeight,d=o/n,a=r.clientWidth,c=r.clientHeight,p=a/c,l=0,s=0;i.marginLeft=i.marginTop=0,(d<p?"contain"===e["object-fit"]:"cover"===e["object-fit"])?(l=c*d,s=a/d,i.width=Math.round(l)+"px",i.height=c+"px","left"===e["object-position-x"]?i.marginLeft=0:"right"===e["object-position-x"]?i.marginLeft=Math.round(a-l)+"px":i.marginLeft=Math.round((a-l)/2)+"px"):(s=a/d,i.width=a+"px",i.height=Math.round(s)+"px","top"===e["object-position-y"]?i.marginTop=0:"bottom"===e["object-position-y"]?i.marginTop=Math.round(c-s)+"px":i.marginTop=Math.round((c-s)/2)+"px"),t.autoplay&&t.play()}if("fill"!==e["object-fit"]){var i=t.style,n=window.getComputedStyle(t),r=document.createElement("object-fit");r.appendChild(t.parentNode.replaceChild(r,t));var d={height:"100%",width:"100%",boxSizing:"content-box",display:"inline-block",overflow:"hidden"};"backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g,function(t){d[t]=n[t]});for(var a in d)r.style[a]=d[a];i.border=i.margin=i.padding=0,i.display="block",i.opacity=1,t.addEventListener("loadedmetadata",o),window.addEventListener("optimizedResize",o),t.readyState>=1&&(t.removeEventListener("loadedmetadata",o),o())}}function n(t){return~t["object-position"].indexOf("left")?t["object-position-x"]="left":~t["object-position"].indexOf("right")?t["object-position-x"]="right":t["object-position-x"]="center",~t["object-position"].indexOf("top")?t["object-position-y"]="top":~t["object-position"].indexOf("bottom")?t["object-position-y"]="bottom":t["object-position-y"]="center",t}function r(t,e,o){o=o||window;var i=!1,n=null;try{n=new CustomEvent(e)}catch(t){n=document.createEvent("Event"),n.initEvent(e,!0,!0)}var r=function(){i||(i=!0,requestAnimationFrame(function(){o.dispatchEvent(n),i=!1}))};o.addEventListener(t,r)}var d=navigator.userAgent.indexOf("Edge/")>=0,a=new Image,c="object-fit"in a.style&&!d,p="object-position"in a.style&&!d,l=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;c&&p||(o(t),r("resize","optimizedResize"))};"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=objectFitVideos);