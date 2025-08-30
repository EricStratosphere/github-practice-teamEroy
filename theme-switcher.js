document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const themeKey = 'site-theme';
    const savedTheme = localStorage.getItem(themeKey);

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (toggleButton) {
            toggleButton.style.backgroundColor = "white";
            toggleButton.style.color = "black";
        }
    } else {
        if (toggleButton) {
            toggleButton.style.backgroundColor = "black";
            toggleButton.style.color = "white";
        }
    }

    if(toggleButton) {
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            if(body.classList.contains('dark-mode')){
                localStorage.setItem(themeKey, 'dark');
                toggleButton.style.backgroundColor = "white";
                toggleButton.style.color = "black";
            } else {
                localStorage.setItem(themeKey, 'light');
                toggleButton.style.backgroundColor = "black";
                toggleButton.style.color = "white";
            }
        });
    }
});