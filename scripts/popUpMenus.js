const popConfigBtns = document.querySelectorAll(".popConfigBtns");
    const cancelBtn = popConfigBtns[popConfigBtns.length-1];
    
cancelBtn.addEventListener("click", popUpClose)

function popUpOpen(id) {
    console.log(id);
    popUpPost.style.visibility = "visible";
    popUpBackGround.style.visibility = "visible";
    body.style.overflow = 'hidden';    
}
function popUpClose(){
    popUpPost.style.visibility = "hidden";
    popUpBackGround.style.visibility = "hidden";
    body.removeAttribute("style")
}


