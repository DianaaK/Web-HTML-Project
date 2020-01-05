(function() {

    let settings = document.getElementById("settingsButton");
    let fontSize = document.getElementById("textFontOption");
    let siteTheme = document.getElementById("themeOption");


    settings.addEventListener("click", function(event) {
        let userSize = fontSize.options[fontSize.selectedIndex].value;
        let userTheme = siteTheme.options[siteTheme.selectedIndex].value;

        switch (userSize) {
            case "mic":
                document.body.style.fontSize = 'smaller';
                break;
            case "mediu":
                document.body.style.fontSize = 'initial';
                break;
            case "mare":
                document.body.style.fontSize = 'larger';
                break;
        }

        switch (userTheme) {
            case "bright":
                var color = randomColor({
                    luminosity: 'light',
                    format: 'rgba'
                });
                document.body.style.background = color;
                break;
            case "dark":
                var color = randomColor({
                    luminosity: 'dark',
                    hue: 'monochrome',
                    format: 'rgba'
                });
                document.body.style.background = color;
                break;
            case "standard":
                document.body.style.background = 'initial';
                break;
        }

    })
})();