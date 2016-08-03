// // random genrator button function
// list = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men']

// r = Math.floor((Math.random() * 4) 
// list[r]




<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("demo").innerHTML = x;
}
</script>