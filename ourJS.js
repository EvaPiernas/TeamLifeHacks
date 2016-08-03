// pop up window
var windowObjectReference;
function openRequestedPopup() {
  windowObjectReference = window.open(
    "lifehackshome.html",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
    )};

// random generator button function
var myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter']; 

function show() { 
myShows[Math.floor(Math.random() * myShows.length)]; 
}

	