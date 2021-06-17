const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

if (document.querySelector(".hamburger-menu")!= null) {menuIcon.addEventListener("click", () => {
   navbar.classList.toggle("change");
})}

// Rating Stars inspiration: https://dev.to/leonardoschmittk/how-to-make-a-star-rating-with-js-36d3*/

const ratingStars = [...document.getElementsByClassName("rating__star")]; //variabel
const ratingResult = document.querySelector(".rating__result");           //variabel

printRatingResult(ratingResult);

function executeRating(stars, result) {
   const starClassActive = "rating__star fas fa-star"; //variabel
   const starClassUnactive = "rating__star far fa-star"; //variabel
   const starsLength = stars.length; //variabel
   let i; //variabel 
   stars.map((star) => {
      star.onclick = () => {                               //clickevent
         i = stars.indexOf(star);


         if (star.className.indexOf(starClassUnactive) !== -1) {                    //decision
            printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
         }
      };
   });
}

function printRatingResult(result, num = 0) {
   result= `${num}/5`;
}

executeRating(ratingStars, ratingResult);

// PopUp Contact Service  ... inspiration: https://www.youtube.com/watch?v=MBaw_6cPmAw


const openKundeserviceButtons = document.querySelectorAll('[data-kundeservice-target]')        // Dom Metoden
const closeKundeserviceButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openKundeserviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const kundeservice = document.querySelector(button.dataset.kundeserviceTarget)
        openKundeservice(kundeservice)
    })
})

if(document.querySelector("[data-kundeservice-target]") !== null) {overlay.addEventListener('click' , () => {            // If statement
   const kundeservice = document.queryselectorAll('.kundeservice.active')
   kundeservice.forEach(kundeservice => {
       closeKundeservice(kundeservice)
   })
})

closeKundeserviceButtons.forEach(button => {
   button.addEventListener('click', () => {                          //clickevent
       const kundeservice = button.closest('.kundeservice')
       closeKundeservice(kundeservice)
   })
})


function openKundeservice(kundeservice) {            // If statement & datatype null
   if (kundeservice == null) return
   kundeservice.classList.add('active')
   overlay.classList.add('active')
}


function closeKundeservice(kundeservice) {         // If statement & datatype null
   if (kundeservice == null) return
   kundeservice.classList.remove('active')
   overlay.classList.remove('active')
}

overlay.addEventListener('click' , () => {          // click event
   const kundeservice = document.queryselectorAll('.kundeservice.active')
   kundeservice.forEach(kundeservice => {
       closeKundeservice(kundeservice)
   })
})

closeKundeserviceButtons.forEach(button => {
   button.addEventListener('click', () => {                  //clickevent
       const kundeservice = button.closest('.kundeservice')
       closeKundeservice(kundeservice)
   })
})

}

// PopUp door ist not closed

if(document.querySelector(".popUp2") !== null) {                     // Dom metoden & datatype null
   const popUp2 = document.querySelector(".popUp2");
   const overlay2 = document.querySelector(".overlay");

   function removeHide(){
       if(popUp2.classList.contains("hide")){                      // if statement
         popUp2.classList.remove("hide");
         overlay2.classList.add("active");
      }
   }

   function addHide (){
       if(!popUp2.classList.contains("hide")){
         popUp2.classList.add("hide");
         overlay2.classList.remove("active");
      }
   }

   setTimeout(()=>{
       removeHide();
   }, 6000);

   setTimeout(()=>{
      addHide();
  }, 8000);
}


// PopUp blueetoth 

if(document.querySelector(".popUp") !== null){             //Dom metoden & datatype null
const popUp = document.querySelector(".popUp");
const btn = document.querySelector(".hidePopUp");

function hidePopUp(){
   if(!popUp.classList.contains("hide")){                //if event
       popUp.classList.add("hide")
   }
}

function showPopUp(){
   if(!popUp.classList.contains("hide")){                //if event
       popUp.classList.remove("hide")
   }
}

btn.addEventListener("click", hidePopUp);
}

