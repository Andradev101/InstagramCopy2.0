const header = document.querySelectorAll(".header")[0];
const maindiv = document.querySelectorAll("#maindiv")[0];
const storiesContainer = document.querySelectorAll(".storiesdiv")[0];

//insert header and it to every page
header.insertAdjacentHTML('afterbegin',
    `
        <a href="index.html">
            <img alt="Logo" srcset="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg" class="headerLogo">
        </a>

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

//stories div create iteration
let storiesDiv = document.createElement("div");
storiesDiv.classList.add("storiesUser");
for (let i = 0; i < 4; i++) {
    let cloneDup = storiesDiv.cloneNode(true);
    storiesContainer.appendChild(cloneDup);
}

//get all div.storiesUser and append a [div/p] within
storiesUser = document.querySelectorAll(".storiesUser");
storiesUser.forEach(element => {
    let div = document.createElement("div")
    div.classList.add("storiesUserPhoto");

    let p = document.createElement("p");
    p.classList.add("storiesUserName");

    element.append(div)
    element.append(p)
    p.innerText = "User"
});