const firebaseConfig = {
  apiKey: "AIzaSyC6-opKrlyYjECwQalV0GjzCkRkVPSXPBk",
  authDomain: "ecommercegazola-2db33.firebaseapp.com",
  databaseURL: "https://ecommercegazola-2db33-default-rtdb.firebaseio.com",
  projectId: "ecommercegazola-2db33",
  storageBucket: "ecommercegazola-2db33.appspot.com",
  messagingSenderId: "480541650369",
  appId: "1:480541650369:web:dec21a23cec001e4bb9340",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
