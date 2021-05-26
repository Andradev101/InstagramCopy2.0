const body = document.body;
const moreOptnsBtn = document.querySelectorAll(".postBtn");
const reactionBtns = document.querySelectorAll(".reactionBtn");
const heartBtn = document.querySelectorAll(".heart");
const chatBtn = document.querySelectorAll(".chat");
const inboxBtn = document.querySelectorAll(".inbox");
const bookMarkBtn = document.querySelectorAll(".bookmark");

//popup
const popUpPost = document.querySelectorAll(".popUpPostConfig")[0];
const popUpBackGround = document.querySelectorAll(".popUpBackGround")[0];

//adding id/event to the specific header btns
for (let j = 0; j < moreOptnsBtn.length; j++) {
    moreOptnsBtn[j].id = `moreOptnsBtn${j}`  
    heartBtn[j].id = `heartBtn${j}`  
    chatBtn[j].id = `chatBtn${j}`  
    inboxBtn[j].id = `inboxBtn${j}`  
    bookMarkBtn[j].id = `bookMarkBtn${j}`
    
    //return the id of a button based on its index j to popUpMenus.js
    moreOptnsBtn[j].addEventListener("click", ()=>{popUpOpen(moreOptnsBtn[j].id);}) 
    
    
    //all these functions are located in postReactionBtns.js
    heartBtn[j].addEventListener("click", ()=>{heartBtnActive(heartBtn[j])})
    chatBtn[j].addEventListener("click", ()=> {console.log("acessando botao chat id: "+ chatBtn[j].id);})
    inboxBtn[j].addEventListener("click", ()=> {console.log("acessando botao inbox id: "+ inboxBtn[j].id);})
    bookMarkBtn[j].addEventListener("click", ()=> {bookMarkBtnActive(bookMarkBtn[j])})
}

