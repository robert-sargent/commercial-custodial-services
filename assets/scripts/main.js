let navMenu = document.getElementById("navMenu")

const toggleNav = () => {
    navMenu.hidden? navMenu.removeAttribute("hidden"): navMenu.hidden="true"
}