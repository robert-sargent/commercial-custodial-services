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
inputField.addEventListener("change", function (event) {
  formatPhoneNumber(event.target);
});
//////////////////////////////////////////////////

function animateSVG() {
  const path = document.getElementById("fill-path");
  const pathLength = path.getTotalLength();
  console.log("pathlength: ", pathLength);

  // Animation duration in milliseconds
  const duration = 3000; // Adjust as needed

  // Set initial styles
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;
  path.style.opacity = "1";

  // Animate the filling in from left to right
  path.style.animation = `fillAnimation ${duration}ms linear forwards`;

  // Delay the fade-out animation
  setTimeout(() => {
    path.style.animation = `fadeAnimation 1000ms forwards`;
  }, duration);

  // Reset the animation after fade-out
  setTimeout(() => {
    path.style.animation = "none";
    path.style.strokeDashoffset = pathLength;
    path.style.opacity = "0";
    animateSVG();
  }, duration + 1000);
}

// Start the animation
animateSVG();
