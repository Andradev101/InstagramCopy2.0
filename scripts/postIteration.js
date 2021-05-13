const postscontainer = document.querySelectorAll(".postscontainer")[0];
let postDiv = document.createElement("div");

postDiv.classList.add("post")
postDiv.insertAdjacentHTML('afterbegin',    //these are the elements within the post div created above
    `
    <div class="postHeader"></div>
    <div class="postPhoto">
        <img src="/mockdata/images/iStock-979449394-3.jpg" alt="" srcset="/mockdata/images/iStock-979449394-3.jpg">
    </div>
    <div class="postReactions"></div>
    <div class="postComments"></div>
    `
);
const post = document.querySelectorAll(".post")[0];

for (let i = 0; i < 3; i++) {
    let cloneDup = postDiv.cloneNode(true);     //clone the div node and all it childs
    postscontainer.appendChild(cloneDup);       //add it to the page
}