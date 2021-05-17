const postscontainer = document.querySelectorAll(".postscontainer")[0];

let postDiv = document.createElement("div");
postDiv.classList.add("post")
postDiv.insertAdjacentHTML('afterbegin',    //these are the elements within the post div created above
    `
    <div class="postHeader">
        <div class="postUserImg">
            <img alt="User Profile Picture" srcset="/mockdata/images/SePYow.jpg">
        </div>
        <button class="postBtn">
            <svg height="16" viewBox="0 0 48 48" width="16">
                <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
            </svg>
        </button>
    </div>
    <div class="postPhoto">
        <img src="/mockdata/images/SePYow.jpg" alt="" srcset="https://picsum.photos/1280/720">
    </div>
    <div class="postReactions">
        <button class="reactionBtn heart">H</button>
        <button class="reactionBtn chat">C</button>
        <button class="reactionBtn inbox">I</button>
        <button class="reactionBtn bookmark" lastChild">B</button>
    </div>
    <div class="postComments"></div>
    `
);

//postscontainer.append(postDiv)
const post = document.querySelectorAll(".post")[0];

for (let i = 0; i < 10; i++) {
    let clone = postDiv.cloneNode(true);     //clone the div node and all it childs
    postscontainer.appendChild(clone);       //add it to the page
}