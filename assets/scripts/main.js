let navMenu = document.getElementById("navMenu");

const toggleNav = () => {
  navMenu.hidden
    ? navMenu.removeAttribute("hidden")
    : (navMenu.hidden = "true");
};
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
let cookiesApproved = false;
let cookiesDenied = false;

const setCookies = (bool) => {
  if (bool === true) {
    document.getElementById("cookiePopup").style.visibility = "hidden";
    return (cookiesApproved = true);
  } else {
    document.getElementById("cookiePopup").style.visibility = "hidden";
    return (cookiesDenied = false);
  }
};
window.onload = () => {
  if (!cookiesApproved && !cookiesDenied) {
    document.getElementById("cookiePopup").style.visibility = "visible";
  } else {
    document.getElementById("cookiePopup").style.visibility = "hidden";
  }
};

const inputField = document.getElementById("phoneNumberInput");
inputField.addEventListener("change", function (event) {
  formatPhoneNumber(event.target);
});
