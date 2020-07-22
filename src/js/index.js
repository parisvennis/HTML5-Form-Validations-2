var formisvalid = true;

function atError(message) {
  var errorBox = document.querySelector(".alert");
  errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
  errorBox.innerHTML += "<p>" + message + "</p>";
}

const validate = e => {
  e.preventDefault();
  var errorBox = document.querySelector(".alert");
  !errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
  errorBox.innerHTML = "";

  document.querySelectorAll("input").forEach(function(items) {
    items.classList.remove("is-invalid");
  });

  document.querySelector("#exampleState").classList.remove("is-invalid");

  // reset all parameters for the error box ^^^^

  var accField = document.querySelector("#exampleAccount");
  var ccvCode = document.querySelector("#exampleCcv");
  var amt = document.querySelector("#exampleAmount");
  var cit = document.querySelector("#exampleCity");
  var ste = document.querySelector("#exampleState");
  var zip = document.querySelector("#exampleZip");
  var firstN = document.querySelector("#exampleFirst");
  var lastN = document.querySelector("#exampleLast");

  if (accField.value.length < 16) {
    atError("credit card number needs to be 16 digits");
    accField.classList.add("is-invalid");
    formisvalid = false;
  }
  if (ccvCode.value.length < 3) {
    atError("CCV is invalid");
    ccvCode.classList.add("is-invalid");
    formisvalid = false;
  }
  if (amt.value <= 0) {
    atError("Amount is invalid");
    amt.classList.add("is-invalid");
    formisvalid = false;
  }
  if (cit.value.length < 2) {
    atError("Enter City");
    cit.classList.add("is-invalid");
    formisvalid = false;
  }
  if (ste.value === "Pick a state") {
    atError("select state");
    ste.classList.add("is-invalid");
    formisvalid = false;
  }
  if (zip.value.length < 5) {
    atError("Zipcode should be 5 Digits");
    zip.classList.add("is-invalid");
    formisvalid = false;
  }
  if (firstN.value.length <= 0) {
    atError("Must Input First Name");
    firstN.classList.add("is-invalid");
    formisvalid = false;
  }
  if (lastN.value.length <= 0) {
    atError("Must Input Last Name");
    lastN.classList.add("is-invalid");
    formisvalid = false;
  }
  if (formisvalid === true) {
    document.querySelectorAll("input").forEach(function(items) {
      items.value = "";
    });
    document.querySelector("#exampleState").value = "";
  }
};

document.querySelector("#theForm").addEventListener("submit", validate);
