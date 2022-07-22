// toggle between light and dark mode //
let darkModeState = false;
const button = document.querySelector(".btn");

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Toggles the "dark-mode" class
function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

// Toggles the "dark-mode" class on click and sets localStorage state
button.addEventListener("click", () => {
  darkModeState = !darkModeState;
  toggleDarkMode(darkModeState);
  setDarkModeLocalStorage(darkModeState);
  if (darkModeState) {
    button.innerHTML = `                 
    <p>Dark</p>
    <i class="fa-solid fa-moon"></i>
    `;
  } else {
    button.innerHTML = `
    <p>Light</p>
    <i class="fa-solid fa-sun"></i>
    `;
  }
});

// formats date correctly
const dateFormat = (str) => {
  const year = new Date(Date.parse(str)).getFullYear();
  const month = new Date(str).toLocaleString("ENG", { month: "short" });
  const day = new Date(Date.parse(str)).getDate();
  return `Joined ${day} ${month} ${year}`;
};

// get the value that is put into the search bar //
const search = document.getElementById("search");

// get the user info //
const getUserInfo = () => {
  fetch(`https://api.github.com/users/${search.value}`)
    .then((res) => res.json())
    .then((data) => {

      const errMess = document.querySelector(".search-bar-p");
      if (data.message === "Not Found") {
        errMess.textContent = "No results";
      } else {
        errMess.textContent = "";
        setInnerHtml(data);
      }
    });
};

// set the inner HTML
const setInnerHtml = (data) => {
  let mainHtml = "";
  let footerHtml = "";
  mainHtml = `     
         <section class="user-name">
            <img src=${data.avatar_url || 
              `<div class='not-aval'>Not Available</div>`
              }} alt="user avatar" class="user-img">
            <div class="user-info"> 
              <h2>${data.name || data.login.slice(0)}</h2>
              <a href="${data.html_url}">@${data.login}</a>
              <p><time>${dateFormat(data.created_at)}</time></p>
            </div>
        </section>

        <section class="bio">
            <h3>${data.bio || 
              `<div class='not-aval'>This profile has no bio</div>`
              }</h3>
        </section>

        <section class="info-container">
            <div class="info repos">
              <h4>Repos</h4>
              <p>${data.public_repos}</p>
            </div>
            <div class="info followers">
              <h4>Followers</h4>
              <p>${data.followers}</p>
            </div>
            <div class="info following">
              <h4>Following</h4>
              <p>${data.following}</p>
            </div>
        </section>`;

  footerHtml = `
            <div class="link-container">
            <div class="links">
            <i class="fa-solid fa-location-dot"></i>
            <a href="https://www.google.com/maps/place/${data.location}">${data.location || 
            `<div class='not-aval'> 
              Not Available</div>`
            }</a>
                </div>

                <div class="links">
                  <i class="fa-solid fa-link"></i>
                  <a href="${data.blog}">${data.blog || 
                    `<div class='not-aval'>Not Available</div>`
                  }</a>
                </div>
            </div>

            <div class="link-container">
                <div class="links">
                  <i class="fa-brands fa-twitter"></i>
                  <a href="http://twitter.com/${data.twitter_username}">${data.twitter_username || 
                    `<div class='not-aval'>Not Available</div>`
                    }</a>
                </div>

                <div class="links">
                  <i class="fa-solid fa-building"></i>
                  <a href="${data.company}">${data.company || 
                  `<div class='not-aval'>Not Available</div>`
                  }</a>
                </div>
            </div>
        `;
  document.querySelector("main").innerHTML = mainHtml;
  document.querySelector("footer").innerHTML = footerHtml;
};

// targets to add event listeners to
const searchBtn = document.querySelector("button");
const searchEnterKey = document.getElementById("search");

// onload brings up my github profile :)
window.onload = async () => {
  fetch('https://api.github.com/users/eileenpk')
    .then((res) => res.json())
    .then((data) => {
      setInnerHtml(data)
    })
}
searchBtn.addEventListener("click", getUserInfo);
searchEnterKey.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode === 13) {
    getUserInfo();
  }
});
