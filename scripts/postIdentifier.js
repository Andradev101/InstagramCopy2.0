const moreOptnsBtn = document.querySelectorAll(".postBtn");
const reactionBtns = document.querySelectorAll(".reactionBtn");
const heartBtn = document.querySelectorAll(".heart");
const chatBtn = document.querySelectorAll(".chat");
const inboxBtn = document.querySelectorAll(".inbox");
const bookMarkBtn = document.querySelectorAll(".bookmark");

//adding event to specific header btns
for (let j = 0; j < moreOptnsBtn.length; j++) {
    moreOptnsBtn[j].id = `${j}`  
    heartBtn[j].id = `${j}`  
    chatBtn[j].id = `${j}`  
    inboxBtn[j].id = `${j}`  
    bookMarkBtn[j].id = `${j}`  
}