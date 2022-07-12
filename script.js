var darkMode = ["rgb(35, 35, 35)", "rgb(25, 25, 25)", "rgb(255, 255, 255)", "gray"];
var lightMode = ["rgb(255, 255, 255)", "rgb(125, 125, 125)", "rgb(0, 0, 0)", "rgb(25,25,25)"];


function changeColorMode() {
    var currStyle = getComputedStyle(document.body);

    if(currStyle.getPropertyValue('--curr-color-mode').trim() == 'dark') {
        console.log("Switching to light mode...");

        document.body.style.setProperty('--curr-color-mode', 'light');
        document.body.style.setProperty('--curr-main-color', lightMode[0]);
        document.body.style.setProperty('--curr-secondary-color', lightMode[1]);
        document.body.style.setProperty('--curr-text-color', lightMode[2]);
        document.body.style.setProperty('--curr-scroll-color', lightMode[3]);
    }
    else {
        console.log("Switching to dark mode...");
        
        document.body.style.setProperty('--curr-color-mode', 'dark');
        document.body.style.setProperty('--curr-main-color', darkMode[0]);
        document.body.style.setProperty('--curr-secondary-color', darkMode[1]);
        document.body.style.setProperty('--curr-text-color', darkMode[2]);
        document.body.style.setProperty('--curr-scroll-color', darkMode[3]);
    }
}