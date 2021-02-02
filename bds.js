        var nightMode = sessionStorage.getItem('nightModePref');
        var on = "On"
        
        if (nightMode === on) {
            nightModeOn();
        }
        else {
            nightModeOff();
        }
        
        function nightModeOn() {
            document.body.classList.add("night-mode");
            window.sessionStorage.setItem('nightModePref', 'On');
            document.getElementById('toggle-off').checked = true;
        }

        function nightModeOff() {
            document.body.classList.remove("night-mode");
            window.sessionStorage.setItem('nightModePref', 'Off');
            document.getElementById('toggle-on').checked = true;
        }