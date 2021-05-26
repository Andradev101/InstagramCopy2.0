const postscontainer = document.querySelectorAll(".postscontainer")[0];

let postDiv = document.createElement("div");
postDiv.classList.add("post")
postDiv.insertAdjacentHTML('afterbegin',    //these are the elements within the post div created above
    `
    <div class="postHeader">
        <div class="postUserImg">
            <img alt="User Profile Picture" srcset="/mockdata/images/SePYow.jpg">
        </div>
        <button class="postBtn">●●●</button>
    </div>
    <div class="postPhoto">
        <img src="/mockdata/images/SePYow.jpg" alt="" srcset="https://picsum.photos/600/600">
    </div>
    <div class="postReactions">
        <button class="reactionBtn heart">
            <i class="fas fa-heart"></i>
        </button>
        <button class="reactionBtn chat">
            <i class="fas fa-comment-alt"></i>
        </button>
        <button class="reactionBtn inbox">
            <i class="fas fa-inbox"></i>
        </button>
        <button class="reactionBtn bookmark lastChild">
            <i class="far fa-bookmark"></i>
        </button>
    </div>
    <div class="postComments"></div>
    `
);

for (let i = 0; i < 5; i++) {
    let clone = postDiv.cloneNode(true);     //clone the div node and all it children
    postscontainer.appendChild(clone);       //add it to the page
    clone.id = "post"+[i]
}