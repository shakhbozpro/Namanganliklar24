var elOpenModalBtn = document.querySelector(".js-open-modal");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".js-modal-close");
var elBody = document.querySelector("body");

elOpenModalBtn.addEventListener("click" , function(){
   elModal.classList.add("modal-open");
   elBody.classList.add("overflow");

})

elCloseModalBtn.addEventListener("click" , function(){
   elModal.classList.remove("modal-open");
   elBody.classList.remove("overflow");
})