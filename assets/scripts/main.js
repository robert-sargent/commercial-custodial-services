//////////////////////////////////////////////////
//init vars for cookie controller
let cookiesApproved = false;
let cookiesDenied = false;
//////////////////////////////////////////////////
//onload func that creates localStorage for cookies
window.onload = () => {
  if (!localStorage.getItem("ccs-phx-cookies")) {
    document.getElementById("cookiePopup").style.visibility = "visible";
  } else {
    document.getElementById("cookiePopup").style.visibility = "hidden";
  }
};
///////////////////////////////////////////////////
//cookie controller
const setCookies = (bool) => {
  if (bool === true) {
    document.getElementById("cookiePopup").style.visibility = "hidden";
    localStorage.setItem("ccs-phx-cookies", true);
    return (cookiesApproved = true);
  } else {
    document.getElementById("cookiePopup").style.visibility = "hidden";
    localStorage.setItem("ccs-phx-cookies", false);
    return (cookiesDenied = false);
  }
};
//////////////////////////////////////////////////

// Google analytics tag 
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
if(cookiesApproved){
  console.log('cookies')
  gtag("js", new Date());
  gtag("config", "G-B1HXBE2XVY");
}


//////////////////////////////////////////////////////////////
//mobile nav toggle control
let navMenu = document.getElementById("navMenu");
let navBackground = document.getElementById("navBackground");
const toggleNav = () => {
  if (navMenu.hidden) {
    navBackground.classList.add("mobile-nav-in");
    navMenu.removeAttribute("hidden");
    setTimeout(() => {
      navBackground.classList.remove("mobile-nav-in");
    }, 150);
  } else {
    navBackground.classList.add("mobile-nav-out");
    setTimeout(() => {
      navMenu.hidden = "true";
      navBackground.classList.remove("mobile-nav-out");
    }, 150);
  }
};
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
inputField != null
  ? inputField.addEventListener("change", function (event) {
      formatPhoneNumber(event.target);
    })
  : null;
//////////////////////////////////////////////////
// SVG Animation functions
const path = document.getElementById("fill-path");
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

const animatePath = () => {
  path.style.transition = "none";
  path.style.strokeDashoffset = pathLength;
  path.style.fill = "none";
  // Trigger reflow to restart the animation
  path.getBoundingClientRect();
  path.style.transition = `stroke-dashoffset 2s linear, fill 1s linear 2s`;
  path.style.strokeDashoffset = "0";
};
const resetPath = () => {
  path.style.transition = "none";
  path.style.strokeDashoffset = pathLength;
  path.style.fill = "none";
};
const restartAnimation = () => {
  resetPath();
  animatePath();
};
animatePath();
path.addEventListener("transitionend", (event) => {
  if (event.propertyName === "stroke-dashoffset") {
    setTimeout(restartAnimation, 1000);
  }
});
// Start the animation
path != null ? animateSVG() : null;
/////////////////////////////////////////////////
