function heartBtnActive(ele){

    if(ele.classList.contains("liked") == false){
        ele.classList.add("liked")
        ele.childNodes[1].style.fontWeight = 1000;
        ele.childNodes[1].style.color = "#FF616F";
        ele.childNodes[1].style.transform = "scale(1.05)";
        //console.log(ele);
    }else{
        ele.classList.remove("liked")
        ele.childNodes[1].style.fontWeight = 300;
        ele.childNodes[1].style.color = "#000";
        ele.childNodes[1].style.transform = "scale(1.00)";
        //console.log(ele);
    }
}
function bookMarkBtnActive(ele){
    
    if(ele.classList.contains("bookmarked") == false){
        ele.classList.add("bookmarked")
        ele.childNodes[1].style.fontWeight = 1000;
        ele.childNodes[1].style.transform = "scale(1.05)";
        //console.log(ele);
    }else{
        ele.classList.remove("bookmarked")
        ele.childNodes[1].style.fontWeight = 300;
        ele.childNodes[1].style.transform = "scale(1.00)";
        //console.log(ele);
    }
}