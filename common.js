// Toggle visibility of an element by ID
function toggleVis(elem) {
    if (document.getElementById(elem).style.display == 'none') {
        document.getElementById(elem).style.display = 'block';
    } else if (document.getElementById(elem).style.display == 'block') {
        document.getElementById(elem).style.display = 'none';
    }
}

// iOS device detection (thanks to Paul R. and Pierre https://stackoverflow.com/questions/9038625/detect-if-device-is-ios)
function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

// If the screen width is too narrow (like on a mobile device) expand the content to fill the window
function resizeContent() {
    if (window.innerWidth <= 900 || iOS()) {
        document.getElementById("bigbox").style.width = "100%";
    } else if (window.innerWidth > 900) {
        document.getElementById("bigbox").style.width = "50%";
    }
}

window.onload = function() { resizeContent(); }
window.onresize = function() { resizeContent(); }