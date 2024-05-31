var checkbox = document.getElementById("dm"); //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dracula") {
  darkmode(); //if dark mode was on, run this funtion
} else {
  nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    nodark(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
function darkmode() {
  document.documentElement.setAttribute('data-theme','dracula');
  checkbox.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dracula"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
  document.documentElement.setAttribute('data-theme','light');
  checkbox.checked = false; //set checkbox to be unchecked state
  sessionStorage.removeItem("mode"); //store a name & value to know that dark mode is off or light mode is on
}
