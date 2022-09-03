function action() {
    if (window.innerWidth <= 800) {
        document.querySelector(".nav_pages").innerHTML = "";
        document.querySelector(".nav_icons").innerHTML = '<div class="icon"><i class="fa-solid fa-list"></i></div>';
        document.querySelector(".nav").style = `justify-content: space-between;
                                                height: 4em;
                                                padding-left:1em;
                                                padding-right:1em;`;
        
    } else {
        document.querySelector(".nav_pages").outerHTML = `<div class="nav_pages">
                                                            <div><a href="./index.html">Home</a></div>
                                                            <div><a href="./about.html">About</a></div>
                                                            <div><a href="./projects.html">Projects</a></div>
                                                            <div><a href="./contact.html">Contact</a></div>
                                                        </div>`;
        document.querySelector(".nav_icons").outerHTML = `<div class='nav_icons'>
                                                            <div>
                                                                <a href="https://www.twitter.com">
                                                                <i class="fa-brands fa-facebook"></i>
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <a href="https://www.twitter.com">
                                                                    <i class="fab fa-twitter"></i>
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <a href="https://www.twitter.com">
                                                                    <i class="fab fa-behance"></i>
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <a href="https://www.twitter.com">
                                                                    <i class="fab fa-linkedin"></i>
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <a href="https://www.twitter.com">
                                                                    <i class="fab fa-sketch"></i>
                                                                </a>
                                                            </div>
                                                        </div>`;
        document.querySelector(".nav").style = `justify-content: space-around;
                                                padding:0;
                                                height: 4em;`;
      }
      
}

function lists() {
    const list = document.createElement("div");
    const nav = document.querySelector("header");
    nav.appendChild(list)
    list.outerHTML = `<div class="new_nav_pages">
                <div class='pages'><a href="./index.html">Home</a></div>
                <div class='pages'><a href="./about.html">About</a></div>
                <div class='pages'><a href="./projects.html">Projects</a></div>
                <div class='pages'><a href="./contact.html">Contact</a></div>
            </div>`;
}

function delist() {
  document.querySelector(".new_nav_pages").remove();
}



//resizing
window.addEventListener("mousemove", action);
window.addEventListener("load", action);
window.addEventListener("resize", action);
    



//list
document.querySelector(".nav_icons").addEventListener("click", lists, { once: true });
document.querySelector(".icon").addEventListener("load", delist);


