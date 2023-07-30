// Toggle visibility of an element by ID
function toggleVis(elem) {
    if (document.getElementById(elem).style.display == 'none') {
        document.getElementById(elem).style.display = 'block';
    } else if (document.getElementById(elem).style.display == 'block') {
        document.getElementById(elem).style.display = 'none';
    }
}

// If the screen width is too narrow (like on a mobile device) expand the content to fill the window
function resizeContent() {
    if (window.innerWidth <= 900) {
        document.getElementById("bigbox").style.width = "100%";
    } else if (window.innerWidth > 900) {
        document.getElementById("bigbox").style.width = "50%";
    }
}

window.onload = function() { resizeContent(); }
window.onresize = function() { resizeContent(); }