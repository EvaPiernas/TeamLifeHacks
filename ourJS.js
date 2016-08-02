function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "lifehackshome.html",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"