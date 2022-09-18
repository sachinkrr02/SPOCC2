const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyBDWxQ5gZFOcb8Eb9a9rGsnho3x4N6i5pc",
  authDomain: "web-project-bd188.firebaseapp.com",
  databaseURL: "https://web-project-bd188-default-rtdb.firebaseio.com",
  projectId: "web-project-bd188",
  storageBucket: "web-project-bd188.appspot.com",
  messagingSenderId: "466020963978",
  apdomain: "1:466020963978:web:f7c5cf904d74da2dd03f73",
  measurementId: "G-VG59SNTBDJ",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("SPOCC");

document.getElementById("SPOCC").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var phone = getElementVal("phone");
  var cid = getElementVal("cid");
  var domain = getElementVal("domain");
  var branch = getElementVal("branch");
  var section = getElementVal("section");
  var rollno = getElementVal("rollno");
  var studentno = getElementVal("studentno");

  saveMessages(name, cid, domain, branch, section, rollno, studentno);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("SPOCC").reset();
}

const saveMessages = (name, cid,domain, branch, section, rollno, studentno) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    cid : cid,
    domain :domain,
    branch: branch,
    section: section,
    rollno: rollno,
    studentno: studentno,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
