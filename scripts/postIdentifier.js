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
    
    moreOptnsBtn[j].addEventListener("click", ()=>{popUpOpen(moreOptnsBtn[j].id);}) 
    //return the id of a button based on its index j to popUpMenus.js
    
    heartBtn[j].addEventListener("click", ()=> {
        //console.log(heartBtn[j].childNodes);
        heartBtn[j].childNodes[1].style.fontWeight = 1000;
        heartBtn[j].childNodes[1].style.color = "#FF616F";
        heartBtn[j].childNodes[1].style.transform = "scale(1.05)";
    })
    
    chatBtn[j].addEventListener("click", ()=> {console.log("acessando botao chat id: "+ chatBtn[j].id);})
    
    inboxBtn[j].addEventListener("click", ()=> {console.log("acessando botao inbox id: "+ inboxBtn[j].id);})
    
    bookMarkBtn[j].addEventListener("click", ()=> {
        //console.log(bookMarkBtn[j].childNodes);
        bookMarkBtn[j].childNodes[1].style.fontWeight = 1000;
        bookMarkBtn[j].childNodes[1].style.transform = "scale(1.05)";
    })
}