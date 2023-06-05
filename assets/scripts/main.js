//////////////////////////////////////////////////
//init vars for cookie controller
let cookiesApproved = false;
let cookiesDenied = false;
//////////////////////////////////////////////////
//onload func that creates localStorage for cookies 
window.onload = () => {
  if(localStorage.getItem('ccs-phx-cookies')=== true){
  document.getElementById("cookiePopup").style.visibility="visible"
  }else{
    document.getElementById("cookiePopup").style.visibility="hidden"
  }
}
///////////////////////////////////////////////////
//cookie controller
const setCookies = (bool) => {
  if(bool === true){
      document.getElementById("cookiePopup").style.visibility="hidden"
      localStorage.setItem('ccs-phx-cookies', true)
      return cookiesApproved = true;
  }else{
      document.getElementById("cookiePopup").style.visibility="hidden"
      localStorage.setItem('ccs-phx-cookies', false)
      return cookiesDenied = false;
  }
}
//////////////////////////////////////////////////
//mobile nav toggle control
let navMenu = document.getElementById("navMenu")
let navBackground = document.getElementById("navBackground")
const toggleNav = () => {
  if(navMenu.hidden){
    navBackground.classList.add('mobile-nav-in')
    navMenu.removeAttribute("hidden")
    setTimeout(()=> {
      navBackground.classList.remove('mobile-nav-in')
    }, 150)
  }else{
    navBackground.classList.add('mobile-nav-out')
    setTimeout(() => {
      navMenu.hidden="true"
      navBackground.classList.remove('mobile-nav-out')
    }, 150)
    
  }
}
//////////////////////////////////////////////////
//phone number input formatter
function formatPhoneNumber(input) {
  if (!input) {
    return; // Exit the function if the input is not defined
  }

  let phoneNumber = input.value.replace(/\D/g, "");
  let formattedNumber = "";

  if (phoneNumber.length >= 3) {
    formattedNumber += "(" + phoneNumber.substring(0, 3) + ")";
  }

  if (phoneNumber.length > 3) {
    formattedNumber += " " + phoneNumber.substring(3, 6);
  }

  if (phoneNumber.length > 6) {
    formattedNumber += "-" + phoneNumber.substring(6, 10);
  }

  input.value = formattedNumber;
}

const inputField = document.getElementById("phoneNumberInput");
inputField.addEventListener("change", function (event) {
  formatPhoneNumber(event.target);
});
//////////////////////////////////////////////////