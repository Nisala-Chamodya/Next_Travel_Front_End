//start header section
let searchBtn = document.querySelector('#search-btn');
let searchBar =  document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm =  document.querySelector('.login-form-container');
let formClose =  document.querySelector('#form-close');

let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');




///////////////////////////////////////////////////
/*======================Scroll section active link===================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*======================sticky navbar===================*/
  let header = document.querySelector("header");
 header.classList.toggle("sticky", window.scrollY > 100);

  /*======================remove toggle icon and navbar when  click navbar link (scroll)===================*/
 searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};



///////////////////////////////////////////////////

/*window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
     
}*/
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
    
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
    
});

//end header section



//start regular section

let regularBtn=document.querySelector("#regularBtn");
let regularContainer=document.querySelector(".regular-container");
let regularContainerClose=document.querySelector("#regular-close");

regularBtn.addEventListener("click",()=>{
    regularContainer.classList.add('active');
});
regularContainerClose.addEventListener("click",()=>{
    regularContainer.classList.remove('active');
});

var swiper = new Swiper(".regular-slider", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:2500,
    disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
     1024:{
        slidesPerView:3,
    },
},

});

/*start vehicale slider */
var swiper = new Swiper(".regular-vehicale-section", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:2500,
    disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
     1024:{
        slidesPerView:3,
    },
},

});

/*end vehicale slider */
//end  regular section



//start midlevel section section
let midLevelBtn=document.querySelector("#midLevelBtn");
let midLevelContainer=document.querySelector(".midlevel-container");
let midLevelContainerClose=document.querySelector("#midlevel-close");

midLevelBtn.addEventListener("click",()=>{
    midLevelContainer.classList.add('active');
});
midLevelContainerClose.addEventListener("click",()=>{
    midLevelContainer.classList.remove('active');
});

var swiper = new Swiper(".midlevel-slider", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:2500,
    disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
     1024:{
        slidesPerView:3,
    },
},

});
/*start vehicale section  */
var swiper = new Swiper(".midlevel-vehicale-section", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:2500,
    disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
     1024:{
        slidesPerView:3,
    },
},

});
/*end vehicale section  */

//end midlevel section section

//////////////////////////////////////////

/*start luxury section*/
////////////////////////////////////////
let luxuryLevelBtn=document.querySelector("#luxuryLevelBtn");
let luxuryLevelContainer=document.querySelector(".luxury-container");
let luxuryLevelContainerClose=document.querySelector("#luxury-close");

luxuryLevelBtn.addEventListener("click",()=>{
    luxuryLevelContainer.classList.add('active');
});
luxuryLevelContainerClose.addEventListener("click",()=>{
    luxuryLevelContainer.classList.remove('active');
});

var swiper = new Swiper(".luxury-slider", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:2500,
    disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
     1024:{
        slidesPerView:3,
    },
},

});

/*start vehicale section  */
var swiper = new Swiper(".luxury-vehicale-section ", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:2500,
    disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
     1024:{
        slidesPerView:3,
    },
},

});
/*end vehicale section  */



/*end luxury section*/

/////////////////////////////////////////
/*start super luxury section */

let superluxuryLevelBtn=document.querySelector("#superLuxuryLevelBtn");
let superluxuryLevelContainer=document.querySelector(".super-luxury-container");
let superluxuryLevelContainerClose=document.querySelector("#super-luxury-close");

superluxuryLevelBtn.addEventListener("click",()=>{
    superluxuryLevelContainer.classList.add('active');
});
superluxuryLevelContainerClose.addEventListener("click",()=>{
    superluxuryLevelContainer.classList.remove('active');
});

var swiper = new Swiper(".super-luxury-slider", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:2500,
    disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
     1024:{
        slidesPerView:3,
    },
},

});
/*start vehicale section  */
var swiper = new Swiper(".superluxury-vehicale-section ", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:2500,
    disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
     1024:{
        slidesPerView:3,
    },
},

});
/*end vehicale section  */


/*end super luxury section */


/* home section start */

let videoBtn=document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls  .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

/* home section start */

/*start regular swiper */


/*end regular swiper */