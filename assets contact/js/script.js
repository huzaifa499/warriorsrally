// Get the modal
var popup = document.getElementById("facebookPopup");

// Get the button that opens the modal
var btn = document.getElementById("facebookBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closePopup");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
