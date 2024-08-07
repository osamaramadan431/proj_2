let span = document.querySelector(".up")

// Show the Bottun Up
window.onscroll = function () {
    this.scrollY >= 600 ? span.classList.add("show") : span.classList.remove("show")
}

// scroll to up
span.addEventListener("click", () => {
    window.scrollTo({
        top:0, 
        behavior:"smooth"
    })
} )