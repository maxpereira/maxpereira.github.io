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

