let navMenu = document.getElementById("navMenu")

const toggleNav = () => {
    navMenu.hidden? navMenu.removeAttribute("hidden"): navMenu.hidden="true"

}
let cookiesApproved = false;
let cookiesDenied = false;

const setCookies = (bool) => {
    if(bool === true){
        document.getElementById("cookiePopup").style.visibility="hidden"
        return cookiesApproved = true;
    }else{
        document.getElementById("cookiePopup").style.visibility="hidden"
        return cookiesDenied = false;
    }
}
window.onload = () => {
  if(!cookiesApproved && !cookiesDenied){
  document.getElementById("cookiePopup").style.visibility="visible"
  }else{
    document.getElementById("cookiePopup").style.visibility="hidden"
  }
}