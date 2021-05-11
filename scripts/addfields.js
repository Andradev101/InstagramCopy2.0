const header = document.querySelectorAll(".header")[0];
const maindiv = document.querySelectorAll("#maindiv")[0];

header.insertAdjacentHTML('afterbegin',
    `
        <img src="#" alt="Logo" srcset="#" class="headerLogo">

        <input type="search" name="headerSearch" id="headerSearch" placeholder="Search">

        <div class="headerBtns">
            <a href="#" id="btn-home">a</a>
            <a href="#" id="btn-inbox">a</a>
            <a href="#" id="btn-explore">a</a>
            <a href="#" id="btn-liked">a</a>
            <button id="btn-user"></button>
        </div>
    `
);
maindiv.insertAdjacentHTML('afterbegin',
    `
    <div class="postscontainer">
        <div class="storiesdiv"></div>
        <div class="post">
            <div class="postHeader"></div>
            <div class="postPhoto"></div>
            <div class="postReactions"></div>
            <div class="postComments"></div>
        </div>
    </div>
    `
);

const postscontainer = document.querySelectorAll(".postscontainer")[0];
const post = document.querySelectorAll(".post");

for (let i = 0; i < 5; i++) {
    postscontainer.append(post[0]);
}
console.log(postscontainer);
console.log(post);